import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './views/Main.vue';
import Signup from './views/Signup.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Main },
  { path: '/signup', component: Signup },
];

const router = new VueRouter({
  routes,
});

export default router;