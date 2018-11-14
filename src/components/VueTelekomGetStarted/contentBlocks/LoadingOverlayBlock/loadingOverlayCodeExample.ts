export const loadingOverlayCodeExample = `<template>
  <div class="example-document">
    <LoadingOverlay
      class="is-absolute"
      :is-loading="loading"/>
    <header class="example-header"/>
    <div class="example-main has-text-centered">
      <button
        @click="fakeLoading"
        class="button is-primary is-large">Fake load something</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import LoadingOverlay from '../../../../../common/vue-telekom/components/LoadingOverlay/LoadingOverlay.vue';

  export default Vue.extend({
    components: {LoadingOverlay},
    data() {
      return {
        loading: false
      };
    },
    methods: {
      fakeLoading() {
        this.loading = true;
        window.setTimeout(() => {
          this.loading = false;
        }, 5000);
      }
    }
  });
</script>

<style lang='scss' scoped>
  @import '../../contentBlocks';

  .example-document {
    display: flex;
    flex-direction: column;
    height: 250px;
    border: 1px solid $gray-178;
    position: relative;

    .example-header {
      height: 80px;
      background-color: $magenta;
      margin-top: 4px;
    }

    .example-main {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>`;
