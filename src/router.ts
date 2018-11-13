import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import VueTelekomGetStarted from './components/VueTelekomGetStarted/VueTelekomGetStarted.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/vue-telekom',
      name: 'vue-telekom',
      component: VueTelekomGetStarted,
      props: true
    }
  ]
});
