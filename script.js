window.addEventListener("scroll", () => {
    document.body.classList.toggle("scrolled", window.scrollY > 0);
}, {
    passive: true,
});

window.addEventListener("load", async () => {
    if (location.hash.length) {
        requestAnimationFrame(() => {
            const anchor = document.querySelector(location.hash);
            anchor.scrollIntoView({
                behavior: "smooth",
            });
        });
    }
    document.body.classList.add("loaded");
})

const splashPics = [
    "pool",
    "terrace",
    "bed",
    "drink",
];

const container = document.getElementById("splash");
const fader = document.createElement("div");
const fadeDuration = 1000;
fader.className = `bg-full transition-opacity duration-1000 opacity-0`;
container.appendChild(fader);
let currentPic = -1;

const cache = {};
function load (src) {
    if (cache[src]) {
        return cache[src];
    }
    const img = new Image();
    img.src = src;

    const promise = new Promise((resolve, reject) => {
        img.addEventListener("load", () => resolve(img));
        img.addEventListener("error", reject);
    });

    cache[src] = promise;

    return promise;
}

function wait (time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

async function next (time = 0) {
    currentPic = (currentPic + 1) % splashPics.length;

    const [img] = await Promise.all([
        load(`./media/${splashPics[currentPic]}.webp`),
        wait(time),
    ]);

    fader.style.backgroundImage = `url(${img.src})`;
    requestAnimationFrame(async () => {
        fader.style.opacity = "1";

        await wait(fadeDuration);

        container.style.backgroundImage = fader.style.backgroundImage;
        fader.style.opacity = "0";

        next(3000);
    });
}
next();

const nav = document.getElementById("nav");
document.querySelectorAll(".anchor")
    .forEach(anchor => {
        anchor.id = anchor.textContent
            .toLowerCase()
            .normalize("NFD")
            .replace(/[ -]/g, "_")
            .replace(/\W/g, "");
        const li = document.createElement("li");
        li.className = "flex grow";
        const a = document.createElement("a");
        a.addEventListener("click", () => {
            history.replaceState({}, "", `#${anchor.id}`);
           anchor.scrollIntoView({
               behavior: "smooth",
           });
        });
        a.textContent = anchor.textContent;
        a.className = "p-4 cursor-pointer text-end self-center lg:text-center flex-1 lg:p-8 transition-all hover:underline hover:bg-gray-950";
        li.appendChild(a);
        nav.appendChild(li);
    });
