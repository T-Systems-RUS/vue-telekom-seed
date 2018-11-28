<template>
  <div class="example-block">
    <div class="example-block-content">
      <div
        v-if="hasExampleBlock"
        class="example">
        <span class="example-label is-size-8">Example</span>
        <slot name="example"/>
      </div>
      <div
        v-if="hasCodeBlock"
        class="code-block">
        <div class="code-block-inner">
          <span class="example-label is-size-8">Code</span>
          <pre><code><slot name="code"/></code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    computed: {
      hasCodeBlock(): boolean {
        return Boolean(this.$slots.code);
      },
      hasExampleBlock(): boolean {
        return Boolean(this.$slots.example);
      }
    }
  });

</script>

<style lang="scss" scoped>
  @import '../../../common/vue-telekom/styles/base/variables';
  @import '../../../common/vue-telekom/styles/utilities/mixins';

  $code-max-height: 500px;

  .example-block {
    margin-top: $building-unit-x2;

    &:not(:last-child) {
      margin-bottom: $building-unit-x2;
    }
  }

  .example-block-content {
    border-radius: $telekom-radius;
    border: 1px dashed $gray-220;
  }

  .example {
    padding: $building-unit-x2;
    position: relative;
    z-index: 1;
  }

  .example-label {
    position: absolute;
    top: $building-unit-x0_5;
    right: $building-unit;
    color: $gray-178;
  }

  .code-block {
    position: relative;
    overflow: hidden;
    border-top: 1px solid $gray-230;

    pre {
      padding: $building-unit-x2;
      background-color: $gray-248;
      @include custom-scroll;
      max-height: $code-max-height;
      overflow: auto;

      code {
        font-family: monospace;
        font-size: $size-7;
        line-height: 1.1;
      }
    }

    .example-label {
      position: absolute;
      top: $building-unit-x0_5;
      right: $building-unit;
      color: $gray-178;
    }
  }
</style>
