<template >
    <div style="display: inline-block">
        <Tooltip :content="$t('history.revocation')">
            <Button @click="undo" type="text" size="small" :disabled="undoStack.length === 0">
            <Icon type="ios-undo" size="20" />
            </Button>
        </Tooltip>
        <Tooltip :content="$t('history.redo')">
            <Button @click="redo" type="text" size="small" :disabled="redoStack.length === 0">
            <Icon type="ios-redo" size="20" />
            </Button>
        </Tooltip>
        <span class="time" v-if="history.length">
          {{ newDate }}
        </span>
    </div>
</template>

<script setup>
import useSelect from '@/hooks/select';
const { canvasEditor } = useSelect();
import { useDateFormat } from '@vueuse/core';
const newDate = useDateFormat(new Date(), 'HH:mm:ss')
const { history, redoStack, undoStack } = reactive(canvasEditor.getHistory());
// 后退
const undo = () => {
  canvasEditor.undo();
};
// 重做
const redo = () => {
  canvasEditor.redo();
};
</script>

<style lang="less">
.time {
  color: #c1c1c1;
}
</style>