export const toggleVisibleFieldCodeExample = `<template>
  <div class="example-list">
    <div class="example-item">
      <div class="field">
        <span class="label is-pulled-left is-size-7">Password:</span>
        <ToggleVisibleField
          placeholder="Type password here"
          v-model="password"/>
      </div>
      Password value: {{ password }}
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  // tslint:disable-next-line
  import ToggleVisibleField
    from '../../../../../common/vue-telekom/components/ToggleVisibleField/ToggleVisibleField.vue';

  export default Vue.extend({
    components: {
      ToggleVisibleField
    },
    data() {
      return {
        password: ''
      };
    }
  });
</script>

<style scoped lang="scss">
  @import '../../contentBlocks';
</style>`;
