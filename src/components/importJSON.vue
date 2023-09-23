<template>
    <div style="display: inline-block;">
        <Button @click="insert" type="text" size="small">{{ $t('import_files') }}</Button>
    </div>
</template>

<script name="ImportJson" setup>
import useSelect from '@/hooks/select';
const { canvasEditor } = useSelect()
const insert = () => {
    canvasEditor.insert()
}
</script>