<template>
    <div class="container">
        <ul>
            <li>
                <BIcon icon="email" />
                <a href="mailto:#">mail@diamantinn.fr</a>
            </li>
            <li>
                <BIcon icon="phone" />
                <a href="tel:#">+336 06060606</a>
            </li>
        </ul>
        <div class="container map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4712.971551412467!2d-61.048027602160666!3d14.48890744088581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI5JzIwLjYiTiA2McKwMDInNDguMCJX!5e1!3m2!1sen!2sfr!4v1622116034726!5m2!1sen!2sfr" loading="lazy"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact",
};
</script>

<style scoped lang="scss">
    ul {
        list-style: none;
        display: flex;

        li {
            flex: 1 0 auto;
            text-align: center;
        }
    }
    .map {
        width: 80%;

        iframe {
            width: 100%;
            height: 370px;
        }
    }
</style>
