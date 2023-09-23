<!--
 * @Description: 删除元素按钮
-->
<template>
        <Tooltip v-if="mixinState.mSelectMode" :content="$t('quick.del')">
            <Button @click="del" icon="ios-trash" type="text"></Button>
        </Tooltip>
</template>

<script setup>
import useSelect from '@/hooks/select';
import { debounce } from 'lodash-es';
import { fabric } from 'fabric';

const { mixinState, canvasEditor } = useSelect();

const del = debounce(function () {
    canvasEditor.del();
}, 300);


</script>
