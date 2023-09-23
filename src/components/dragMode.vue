<!--
 * @Description: 拖拽模式
-->

<template>
  <div class="box">
    <Switch size="large" v-model="status" @on-change="switchMode">
      <template #open>
        <span>Drag</span>
      </template>
    </Switch>
  </div>
</template>

<script setup name="Drag">
import useSelect from '@/hooks/select';
const status = ref(false);
const { canvasEditor } = useSelect();

const switchMode = (val) => {
  if (val) {
    canvasEditor.startDring();
  } else {
    canvasEditor.endDring();
  }
};

onMounted(() => {
  canvasEditor.on('startDring', () => (status.value = true));
  canvasEditor.on('endDring', () => (status.value = false));
});

onBeforeUnmount(() => {
  canvasEditor.off('startDring');
  canvasEditor.off('endDring');
});
</script>
<style scoped lang="less">
.box {
  position: absolute;
  right: 193px;
  bottom: 14px;
}
</style>
