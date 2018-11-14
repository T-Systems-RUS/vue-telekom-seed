<template>
  <section class="content-block is-radio-button">
    <h2 class="title is-2 is-main">RadioButton</h2>
    <p>Simple base radio button component. Please see the usage options below:</p>
    <ContentBlockExample>
      <template slot="example">
        <RadioButtonExample/>
      </template>
      <template slot="code">
        {{ radioButtonCodeExample }}
      </template>
    </ContentBlockExample>
    <h4 class="title is-4">API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li class="list-item"><b>checked (type: String, required: false)</b>: to specify the radio state.</li>
      <li class="list-item"><b>name (type: String, required: false)</b>: in case if it's needed to specify the
        name to the checkbox input (same as native)</li>
      <li class="list-item"><b>label (type: String, required: false)</b>: radio button label </li>
      <li class="list-item"><b>disabled (type: String, required: false)</b>: disabled state</li>
    </ul>
    <h5 class="title is-6">Events</h5>
    <ul class="list">
      <li class="list-item"><b>toggle ()</b>: when the radio button value is selected</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import RadioButtonExample from './RadioButtonExample/RadioButtonExample.vue';
  import {radioButtonCodeExample} from './radioButtonCodeExample';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    components: {RadioButtonExample},
    data() {
      return {radioButtonCodeExample};
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
