export const alertCodeExample =  `<template>
  <div>
    <div class="alert-wrapper">
      <Alert/>
    </div>
    <div class="columns is-multiline">
      <div class="column is-6">
        <p class="is-size-7">Add DEFAULT alert</p>
        <button
          @click="setDefault"
          class="button is-outline">Default</button>
      </div>

      <div class="column is-6">
        <p class="is-size-7">Add SUCCESS alert with no close button</p>
        <button
          @click="setSuccess"
          class="button is-outline">Success</button>
      </div>

      <div class="column is-6">
        <p class="is-size-7">Add WARNING alert with link</p>
        <button
          @click="setWarning"
          class="button is-outline">Warning</button>
      </div>

      <div class="column is-6">
        <p class="is-size-7">Add HINT alert</p>
        <button
          @click="setHint"
          class="button is-outline">Hint</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {AlertType} from '../../../../../common/vue-telekom/components/Alert/alertStore';
  import Alert from '../../../../../common/vue-telekom/components/Alert/Alert.vue';
  import {SET_ALERT} from '../../../../../common/vue-telekom/components/Alert/alertStore/mutation-types';

  export default Vue.extend({
    components: {Alert},
    methods: {
      setDefault() {
        this.$store.commit(SET_ALERT, {
          text: 'This is a default alert.',
          type: AlertType.DEFAULT
        });
      },
      setSuccess() {
        this.$store.commit(SET_ALERT, {
          text: 'Wow! That was a great success!',
          type: AlertType.SUCCESS,
          noCloseBtn: true
        });
      },
      setWarning() {
        this.$store.commit(SET_ALERT, {
          text: 'CAUTION! Something is about to happen! Now click the link to show the ',
          type: AlertType.WARNING,
          link: {
            text: 'Default alert',
            method: () => this.setDefault()
          }
        });
      },
      setHint() {
        this.$store.commit(SET_ALERT, {
          text: 'Hey! Click close button to close alert.',
          type: AlertType.HINT
        });
      }
    }
  });
</script>

<style scoped lang="scss">
  .alert-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }

  .column {
    padding-top: 12px;
    padding-bottom: 12px;
  }
</style>`;
