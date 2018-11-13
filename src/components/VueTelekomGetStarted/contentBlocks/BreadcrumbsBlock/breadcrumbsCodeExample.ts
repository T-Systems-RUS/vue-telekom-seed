export const breadcrumbsRouterConfig = `import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contacts from './views/Contacts.vue';

// AbstractRoute is a component that allows to create child structure
// it should contain the following: <template><router-view/></template>
import AbstractRoute from './AbstractRoute.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: AbstractRoute,
      meta: {
        title: 'Home'
      },
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: '',
          component: AbstractRoute,
          meta: {
            title: 'About'
          },
          children: [
            {
              path: '',
              component: About
            },
            {
              path: '',
              component: Contacts,
              meta: {
                title: 'Contacts'
              }
            }
          ]
        }
      ]
    }
  ]
});`;
