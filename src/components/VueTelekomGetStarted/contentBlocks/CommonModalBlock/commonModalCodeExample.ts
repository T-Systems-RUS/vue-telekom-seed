export const commonModalCodeExample = `<template>
  <div class="example-list">

    <div class="example-item">
      <p class="label is-size-7">Simple usage:</p>
      <button
        @click="isModal1Open = true"
        class="button is-outline">Open Modal</button>
      <CommonModal
        v-if="isModal1Open"
        @exit="isModal1Open = false">
        <template slot="modal-title">Modal is open!</template>
        <h2
          class="title is-5"
          slot="modal-subtitle">Here can be any text you want to add as subtitle.</h2>
        <ul slot="modal-content"><li v-for="i in [1,2,3,4,5,6,7,8,9,10]">{{ i }}</li></ul>
      </CommonModal>
    </div>

    <div class="example-item">
      <p class="label is-size-7">With loading overlay:</p>
      <button
        @click="isModal2Open = true"
        class="button is-outline">Open Modal</button>
      <CommonModal
        :loadingState="loadingState"
        v-if="isModal2Open"
        @exit="isModal2Open = false">
        <template slot="modal-title">Modal is open!</template>
        <h2
          class="title is-5"
          slot="modal-subtitle">Here can be any text you want to add as subtitle.</h2>
        <div
          class="has-text-centered"
          slot="modal-content">
          <p >Click button below to see LoadingOverlay</p>
          <button
            @click="testLoadingOverlay"
            class="button is-primary is-large">Test Loading Overlay</button>
        </div>
      </CommonModal>

    </div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import CommonModal from '../../../../../common/vue-telekom/components/CommonModal/CommonModal.vue';

  export default Vue.extend({
    components: {CommonModal},
    data() {
      return {
        isModal1Open: false,
        isModal2Open: false,
        loadingState: false
      };
    },
    methods: {
      testLoadingOverlay() {
        this.loadingState = true;
        window.setTimeout(() => {
          this.loadingState = false;
          }, 700);
      }
    }
  });
</script>

<style scoped lang="scss">
  @import '../../contentBlocks';
</style>`;
