import Vue from "vue/dist/vue.esm.js";
import buefy from "buefy";
import "@mdi/font/css/materialdesignicons.min.css";
import "buefy/dist/buefy.min.css";
import "./global.scss";
import Main from "./main.vue";

const wrapper = document.createElement("main");
document.body.appendChild(wrapper);

Vue.use(buefy);

new Vue({
    el: wrapper,
    components: {
        Main,
    },
    template: "<Main />",
});
