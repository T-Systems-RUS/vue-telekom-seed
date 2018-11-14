<template>
  <section class="content-block is-loading-overlay">
    <h2 class="title is-2 is-main">LoadingOverlay</h2>
    <p>Loading progress bar with the white translucent overlay under it.</p>
    <ContentBlockExample>
      <LoadingOverlayExample slot="example"/>
      <template slot="code">{{ loadingOverlayCodeExample }}</template>
    </ContentBlockExample>
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
