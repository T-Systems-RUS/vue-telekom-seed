<template>
  <section class="content-block is-common-modal">
    <h2 class="title is-2 is-main">CommonModal</h2>
    <p>A modal overlay, in which you can include any content you want. Please see the example below:</p>
    <ContentBlockExample>
      <CommonModalExample slot="example"/>
      <template slot="code">{{ commonModalCodeExample }}</template>
    </ContentBlockExample>
    <h4 class="title is-4">API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li class="list-item"><b>loadingState (type: Boolean, required: false)</b>: specifies whether loading process is
        going on and shows LoadingOverlay component if true</li>
    </ul>
    <h5 class="title is-6">Events</h5>
    <ul class="list">
      <li class="list-item"><b>exit ()</b>: triggers when close button is clicked</li>
    </ul>
    <h5 class="title is-6">Slots</h5>
    <ul class="list">
      <li class="list-item"><b>modal-title</b>: inserts modal title</li>
      <li class="list-item"><b>modal-subtitle</b>: inserts modal subtitle</li>
      <li class="list-item"><b>modal-content</b>: inserts modal content</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import CommonModalExample from './CommonModalExample/CommonModalExample.vue';
  import {commonModalCodeExample} from './commonModalCodeExample';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    components: {CommonModalExample},
    data() {
      return {
        commonModalCodeExample
      };
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
