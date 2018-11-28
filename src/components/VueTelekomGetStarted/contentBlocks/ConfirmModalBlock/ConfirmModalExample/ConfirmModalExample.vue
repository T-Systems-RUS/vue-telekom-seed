<template>
  <div class="example-list">

    <div class="example-item">
      <p class="label is-size-7">Simple usage:</p>
      <button
        @click="isModalOpen = true"
        class="button is-outline">Open Modal</button>

      <transition name="opacity">
        <p
          v-if="isConfirmed"
          class="message is-size-7">Something has been deleted!</p>
      </transition>

      <ConfirmModal
        v-if="isModalOpen"
        @exit="isModalOpen = false"
        @confirm="confirm">
        <template slot="modal-title">Do you want to delete something?</template>
        <div
          class="has-text-centered is-size-6"
          slot="modal-body">
          Are you sure you would like to delete this something? Please note that this action cannot be undone.
        </div>
        <template slot="confirm-button-text">Delete</template>
      </ConfirmModal>
    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import ConfirmModal from '../../../../../common/vue-telekom/components/ConfirmModal/ConfirmModal.vue';

  export default Vue.extend({
    components: {ConfirmModal},
    data() {
      return {
        isModalOpen: false,
        isConfirmed: false
      };
    },
    methods: {
      confirm() {
        this.isModalOpen = false;
        this.isConfirmed = true;
        window.setTimeout(() => {
          this.isConfirmed = false;
        }, 2000);
      }
    }
  });
</script>

<style scoped lang="scss">
  @import '../../contentBlocks';

  .message {
    color: $green;
    margin-top: $building-unit;
  }
</style>
