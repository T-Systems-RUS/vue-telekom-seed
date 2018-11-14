<template>
  <div class="example-item">
    <LoadingOverlay
      class="is-absolute"
      :is-loading="loading"/>
    <button
      @click="fakeLoading"
      class="button is-primary is-large">Fake load something</button>
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

  .example-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    border: 1px solid $gray-178;
    position: relative;
  }
</style>
