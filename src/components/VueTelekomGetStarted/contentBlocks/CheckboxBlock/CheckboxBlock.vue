<template>
  <section class="content-block is-checkbox">
    <h2 class="title is-2 is-main">Checkbox</h2>
    <p>Simple base checkbox component. Please see the usage options below:</p>
    <ContentBlockExample>
      <template slot="example">
        <CheckboxBlockExample/>
      </template>
      <template slot="code">
        {{ checkboxCodeExample }}
      </template>
    </ContentBlockExample>
    <h4 class="title is-4">API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li class="list-item"><b>checked (type: String, required: false)</b>: to specify the checkbox state.
        Use <i>checked.sync</i> (see example above) to get updated.</li>
      <li class="list-item"><b>name (type: String, required: false)</b>: in case if it's needed to specify the
        name to the checkbox input (same as native)</li>
      <li class="list-item"><b>disabled (type: String, required: false)</b>: same as native </li>
    </ul>
    <h5 class="title is-6">Events</h5>
    <ul class="list">
      <li class="list-item"><b>update:checked (value: Boolean)</b>:
        triggers when the value of checkbox is changed</li>
    </ul>
    <h5 class="title is-6">Slots</h5>
    <ul class="list">
      <li class="list-item"><b>default</b>: for checkbox label</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import CheckboxBlockExample from './CheckboxBlockExample/CheckboxBlockExample.vue';
  import {checkboxCodeExample} from './checkboxCodeExample';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    components: {CheckboxBlockExample},
    data() {
      return {checkboxCodeExample};
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
