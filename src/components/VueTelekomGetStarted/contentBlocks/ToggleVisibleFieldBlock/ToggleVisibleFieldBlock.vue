<template>
  <section class="content-block is-toggle-visible-field">
    <h2 class="title is-2 is-main">ToggleVisibleField</h2>
    <p>
      It is a field that can mainly be used for password inputs. It allows to hide/view what is typed in input field:
    </p>
    <ContentBlockExample>
      <ToggleVisibleFieldExample slot="example"/>
      <template slot="code">{{ toggleVisibleFieldCodeExample }}</template>
    </ContentBlockExample>
    <h4 class="title is-4">API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li class="list-item"><b>v-model (type: String, required: true)</b>:
        combination of binding value / input event</li>
      <li class="list-item"><b>value (type: String, required: false)</b>:
        value of the ToggleVisibleField</li>
      <li class="list-item"><b>placeholder (type: String, required: false)</b>:
        placeholder of the ToggleVisibleField</li>
    </ul>
    <h5 class="title is-6">Events</h5>
    <ul class="list">
      <li><b>input (String)</b>: triggers when typing in input field</li>
      <li><b>blur</b>: triggers when focus out of input field</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import ToggleVisibleFieldExample from './ToggleVisibleFieldExample/ToggleVisibleFieldExample.vue';
  import {toggleVisibleFieldCodeExample} from './toggleVisibleFieldCodeExample';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    components: {ToggleVisibleFieldExample},
    data() {
      return {
        toggleVisibleFieldCodeExample
      };
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
