<template>
  <div class="example-list">
    <div class="example-item">
      <Dropdown>
        <template slot="items">
          <div
            @click="doAction('A')"
            class="dropdown-item">Action A</div>
          <div
            @click="doAction('B')"
            class="dropdown-item">Action B</div>
          <div
            @click="doAction('C')"
            class="dropdown-item">Action C</div>
          <div
            @click="doAction('D')"
            class="dropdown-item">Action D</div>
          <div
            @click="doAction('E')"
            class="dropdown-item">Action E</div>
          <div
            @click="doAction('F')"
            class="dropdown-item">Action F</div>
        </template>
      </Dropdown>
      <transition name="opacity">
        <p
          v-if="actionResult"
          class="message is-size-7">{{ actionResult }}</p>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Dropdown from '../../../../../common/vue-telekom/components/Dropdown/Dropdown.vue';

  export default Vue.extend({
    components: {Dropdown},
    data() {
      return {
        actionResult: ''
      };
    },
    methods: {
      doAction(action: string) {
        this.actionResult = `Action ${action} was selected!`;
        window.setTimeout(() => {
          this.actionResult = '';
        }, 2000);
      }
    }
  });
</script>

<style lang='scss' scoped>
  @import '../../contentBlocks';

  .message {
    margin-top: $building-unit;
    color: $green;
  }
</style>
