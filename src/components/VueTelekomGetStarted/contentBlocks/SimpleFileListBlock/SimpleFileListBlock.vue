<template>
  <section class="content-block is-simple-file-list">
    <h2 class="title is-2 is-main">SimpleFileList</h2>
    <p> Simple file list that is supposed to be used in conjunction with SimpleFileUploader. For the examples please
      also refer to
      <router-link
        @click.native="goToMenuItem(UIComponent.SimpleFileUploader)"
        :to="{query: {q: UIComponent.SimpleFileUploader}}">SimpleFileUploader</router-link>.
    </p>

    <h4 class="title is-4">API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li class="list-item">
        <b>files (type: IFileUpload[], required: false)</b>: files that will be displayed in the list
      </li>
      <li class="list-item"><b>isImageUpload (type: Boolean, required: false)</b>:
        changes the style of the file list to display images</li>
      <li class="list-item"><b>isTile (type: Boolean, required: false)</b>:
        used together with isImageUpload, changes the style of the file list to display images as tiles
      </li>
      <li class="list-item"><b>fileUrl (type: IFileUrl, required: false)</b>: file url to display the uploaded file</li>
    </ul>
    <h5 class="title is-6">Events</h5>
    <ul class="list">
      <li class="list-item">
        <b>delete (IFileUpload)</b>: triggers when file is deleted
      </li>
      <li class="list-item">
        <b>deleteurl (string)</b>: triggers when file url is deleted
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';

  export default Vue.extend({
    mixins: [contentBlockMixin]
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
