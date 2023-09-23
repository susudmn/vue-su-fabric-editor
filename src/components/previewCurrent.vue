
<template>
  <Button type="text" @click="preview">
    {{ $t('preview') }}
  </Button>
</template>

<script lang="ts" setup>
import { ImagePreview } from 'view-ui-plus';
import vfe from 'vfe';

const canvasEditor = inject('canvasEditor') as vfe.ICanvas;
const preview = () => {
  canvasEditor.preview().then((dataUrl) => {
    // const dataUrl = getImgUrl();
    ImagePreview.show({
      previewList: [dataUrl],
    });
  });
};
</script>

<style scoped lang="less"></style>
