<template>
  <section class="content-block is-loading-overlay">
    <h2 class="title is-2 is-main">LoadingOverlay</h2>
    <p>Loading progress bar with the white translucent overlay under it (usually added at the top of each page).
      Please see the example below:</p>
    <ContentBlockExample>
      <LoadingOverlayExample slot="example"/>
      <template slot="code">{{ loadingOverlayCodeExample }}</template>
    </ContentBlockExample>
    <p>
      You can also check second example in
      <router-link
        @click.native="goToMenuItem(UIComponent.CommonModal)"
        :to="{query: {q: UIComponent.CommonModal}}">CommonModal</router-link>
      component description.
    </p>
    <h4 class="title is-4">API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li class="list-item"><b>isLoading (type: Boolean, required: true)</b>: provides loading status</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import LoadingOverlayExample from './LoadingOverlayExample/LoadingOverlayExample.vue';
  import {loadingOverlayCodeExample} from './loadingOverlayCodeExample';
  import {contentBlockMixin} from '../contentBlockMixin';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    components: {LoadingOverlayExample},
    data() {
      return {loadingOverlayCodeExample};
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
