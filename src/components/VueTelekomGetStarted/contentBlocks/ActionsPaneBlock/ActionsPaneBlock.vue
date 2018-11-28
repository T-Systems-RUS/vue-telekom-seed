<template>
  <section class="content-block is-actions-pane">
    <h2 class="title is-2 is-main">ActionsPane</h2>
    <p>
      ActionsPane is a simple pane that has two buttons: <i>Share</i> and <i>Print</i>.
      <i>Share</i> button will open sharing panel
      flyout with the list of social networks the user can share the current page in.
      <i>Print</i> button will start page printing process.
      Please see the example below:
    </p>
    <ContentBlockExample>
      <ActionsPane slot="example"/>
      <template slot="code">{{ codeExample }}</template>
    </ContentBlockExample>
    <p>
      ActionsPane has no properties and doesn't emit anything to its parent. It is dependent on
      SharePane component.
    </p>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import ActionsPane from '../../../../common/vue-telekom/components/ActionsPane/ActionsPane.vue';

  const codeExample = `<ActionsPane/>`;

  export default Vue.extend({
    components: {ActionsPane},
    mixins: [contentBlockMixin],
    data() {
      return {
        codeExample
      };
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
