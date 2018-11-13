import Vue from 'vue';
import ContentBlockExample from '../ContentBlockExample/ContentBlockExample.vue';
import {UIComponent} from '../vueTelekom';

export const contentBlockMixin = Vue.extend({
  components: {ContentBlockExample},
  data() {
    return {
      UIComponent
    };
  }
});
