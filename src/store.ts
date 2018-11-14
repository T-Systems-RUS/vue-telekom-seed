import Vue from 'vue';
import Vuex from 'vuex';

import alertState from './common/vue-telekom/components/Alert/alertStore';
import fileUploadState from './common/vue-telekom/components/FileUploader/fileUploadStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    alertState,
    fileUploadState
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
});
