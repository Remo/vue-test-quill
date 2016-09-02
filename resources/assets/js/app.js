import Vue from 'vue';
import VueRouter from 'vue-router';

import test from './test.vue';

Vue.use(VueRouter);
Vue.use(require('vue-quill'));

var App = Vue.extend({});

var router = new VueRouter();

router.map({
    '/test': {
        component: test
    }
});

router.start(App, '#app');