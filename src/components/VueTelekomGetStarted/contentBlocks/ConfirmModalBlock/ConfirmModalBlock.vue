<template>
  <section class="content-block is-common-modal">
    <h2 class="title is-2 is-main">ConfirmModal</h2>
    <p>A modal overlay, in which you can include any content you want. Please see the example below:</p>
    <ContentBlockExample>
      <ConfirmModalExample slot="example"/>
      <template slot="code">{{ confirmModalCodeExample }}</template>
    </ContentBlockExample>
    <h4 class="title is-4">API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li class="list-item"><b>loadingState (type: Boolean, required: false)</b>: specifies whether loading process is
        going on and shows LoadingOverlay component if true</li>
    </ul>
    <h5 class="title is-6">Events</h5>
    <ul class="list">
      <li class="list-item"><b>exit ()</b>: triggers when close button or cancel is clicked</li>
      <li class="list-item"><b>confirm ()</b>: triggers when confirm button is clicked</li>
    </ul>
    <h5 class="title is-6">Slots</h5>
    <ul class="list">
      <li class="list-item"><b>modal-title</b>: inserts confirm modal title</li>
      <li class="list-item"><b>modal-body</b>: inserts confirm modal body</li>
      <li class="list-item"><b>confirm-button</b>: allows to insert custom confirm button with custom behavior</li>
      <li class="list-item"><b>confirm-button-text</b>: allows to specify confirm button text
        (not needed when <i>confirm-button</i> is provided)</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import ConfirmModalExample from './ConfirmModalExample/ConfirmModalExample.vue';
  import {confirmModalCodeExample} from './confirmModalCodeExample';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    components: {ConfirmModalExample},
    data() {
      return {
        confirmModalCodeExample
      };
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
