<template>
    <main class="is-flex is-flex-direction-column">
        <section class="hero is-medium is-info">
            <div class="hero-body">
                <h1 class="title is-size-1 is-size-3-mobile">
                    {{ title }}
                    <img src="./assets/logo.svg"  alt="logo" class="logo">
                </h1>
            </div>
        </section>
        <section class="content container">
            <BTabs v-model="activeTab" type="is-boxed">
                <BTabItem v-for="(page, index) in pages" :key="index" :label="page.name">
                    <component :is="page.content" />
                </BTabItem>
            </BTabs>
        </section>
    </main>
</template>

<script>
import pages from "./pages";

export default {
    name: "Main",
    data () {
        return {
            title: "Diamant'inn",
            pages,
            activeTab: 0,
        };
    },
}
</script>

<style scoped lang="scss">
    h1 {
        font-family: 'Parisienne', cursive;

        .logo {
            height: 2em;
            transform: translateY(.4em);
            padding-left: 1em;
        }
    }
    main {
        min-height: 100vh;
    }
    .content {
        background-color: #fff;
        width: 100%;
    }
</style>
