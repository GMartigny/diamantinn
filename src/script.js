import { render } from "@gmartigny/whiskers.js";
// eslint-disable-next-line import/no-unresolved
import imgs from "url:./media/*.webp";
import gridData from "./grid.json";

window.addEventListener("scroll", () => {
    document.body.classList.toggle("scrolled", window.scrollY > 0);
}, {
    passive: true,
});

window.addEventListener("load", async () => {
    if (window.location.hash.length) {
        requestAnimationFrame(() => {
            const anchor = document.querySelector(window.location.hash);
            anchor.scrollIntoView({
                behavior: "smooth",
            });
        });
    }
    document.body.classList.add("loaded");
});

const container = document.getElementById("splash");
const fader = render("div", {
    class: "bg-full transition-opacity duration-1000 opacity-0",
});
container.appendChild(fader);
const fadeDuration = 1000;
let currentPic = -1;

const cache = {};

/**
 * @param {string} name -
 * @return {Promise<Image>}
 */
function load (name) {
    if (cache[name]) {
        return cache[name];
    }
    const img = new Image();
    img.src = imgs[name];

    const promise = new Promise((resolve, reject) => {
        img.addEventListener("load", () => resolve(img));
        img.addEventListener("error", reject);
    });

    cache[name] = promise;

    return promise;
}

/**
 * @param {number} time -
 * @return {Promise<unknown>}
 */
function wait (time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

/**
 * @param {number} time -
 * @return {Promise<void>}
 */
async function next (time = 0) {
    currentPic = (currentPic + 1) % Object.keys(imgs).length;

    const [img] = await Promise.all([
        load(Object.keys(imgs)[currentPic]),
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
    .forEach((anchor) => {
        anchor.id = anchor.textContent
            .toLowerCase()
            .normalize("NFD")
            .replace(/[ -]/g, "_")
            .replace(/\W/g, "");
        nav.appendChild(render("li", {
            class: "flex grow hover:bg-primary",
        }, render("a", {
            // eslint-disable-next-line max-len
            class: "p-4 cursor-pointer text-end self-center lg:text-center flex-1 lg:p-8 transition-padding hover:underline",
            "@click": () => {
                window.history.replaceState({}, "", `#${anchor.id}`);
                anchor.scrollIntoView({
                    behavior: "smooth",
                });
            },
        }, anchor.textContent)));
    });

const grid = document.querySelector(".pics");

gridData.forEach(({ img, alt, desc }) => {
    grid.appendChild(render("label", [
        render("input", {
            type: "radio",
            name: "pic",
            class: "hidden",
        }),
        render("img", {
            src: imgs[img],
            alt,
        }),
        render("i", desc),
    ]));
});
grid.appendChild(render("label", {
    class: "close",
}, [
    render("input", {
        type: "radio",
        name: "pic",
        class: "hidden",
        checked: true,
    }),
    render("span", {
        class: "material-symbols-rounded",
    }, "close"),
]));
