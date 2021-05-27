<template>
    <main class="is-flex is-flex-direction-column">
        <section class="hero is-medium is-info">
            <div class="hero-body">
                <h1 class="title">{{ title }}</h1>
            </div>
        </section>
        <section class="content container">
            <BTabs v-model="activeTab" type="is-boxed">
                <BTabItem v-for="(page, name) in pages" :key="name" :label="name">
                    <component :is="page" />
                </BTabItem>
            </BTabs>
        </section>
    </main>
</template>

<script>
import * as pages from "./pages";

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
        font-size: 90px;
    }
    main {
        min-height: 100vh;
    }
    .content {
        background-color: #fff;
        width: 100%;
    }
</style>
