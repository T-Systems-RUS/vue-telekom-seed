<template>
  <section class="content-block is-breadcrumbs">
    <h2 class="title is-2 is-main">Breadcrumbs</h2>
    <p>Breadcrumbs component allows you to create breadcrumbs based on the matched routes.
    To make it work you should have a specific routing structure so that the child route will always be
    inside the <i>children</i> option of the parent node and also add meta title to each route you would like
    to be shown in breadcrumbs.</p>
    <p>Please have a look at the router structure below that will create breadcrumbs: <i>Home > About</i>
    for About page (<i>/about</i>) and <i>Home > About > Contacts</i> for Contacts page (/about/contacts)</p>
    <ContentBlockExample>
      <template slot="code">{{ breadcrumbsRouterConfig }}</template>
    </ContentBlockExample>

    <p>As you might have noticed the parent route is always some abstract component.
      This abstract component is supposed to only have <i>router-view</i> tag inside of it to provide the
      nested routes structure. The actual parent route (i.e. Home) is located inside the children array with <i>''</i>
      path.</p>
    <p>Parent <i>meta.title</i> that is essential for breadcrumbs should is assigned to the abstract
      parent route, child - to child.</p>
    <p>If you do not want to use this nested routes structure in your application you may use just the styles (can be
      imported from <i>/vue-telekom/styles/components/breadcrumbs</i>)</p>
    <ContentBlockExample>
      <div
        slot="example"
        class="breadcrumbs is-flex">
        <div
          class="breadcrumb is-flex"
          v-for="route in ['Home', 'About', 'Contacts']">
          <router-link
            :to="'/' + route"
            class="breadcrumb-link is-size-7">
            {{ route }}
          </router-link>
        </div>
      </div>
    </ContentBlockExample>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import {breadcrumbsRouterConfig} from './breadcrumbsCodeExample';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    data() {
      return {breadcrumbsRouterConfig};
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
  @import '../../../../common/vue-telekom/styles/components/breadcrumbs';
</style>
