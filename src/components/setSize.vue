<template>
    <div v-if="!mixinState.mSelectMode">
        <Divider orientation="left" style="font-weight: 700;font-size: 14px;color: #5e5c5c;">{{ $t('size') }}</Divider>
        <Form :label-width="40" class="form-wrap" >
            <FormItem :label="$t('width')" prop="name">
                <InputNumber v-model="width" :disabled="true"  @on-change="setSize"/>
            </FormItem>
             <FormItem :label="$t('height')" prop="name">
                <InputNumber v-model="height" :disabled="true"  @on-change="setSize"/>
            </FormItem>
        </Form>
        <Button type="primary" @click="() => (showModal = true)">{{ $t('resize') }}</Button>

        <Modal
            v-model="showModal"
            :title="$t('setSizeTip')"
            @on-ok="OK"
            @on-cancel="Cancel">
            <p>{{ $t('default_size') }}</p>
            <ButtonGroup vertical style="margin: 10px 0">
                <Button size="small"
                    v-for="(item, i) in  presetSize "
                    :key="`${i} presetSize`"
                    style="text-align: left"
                    @click="setSizeBy(item.width, item.height)">
                    {{ item.label }} ： {{ item.width }}×{{ item.height }}
                </Button>
            </ButtonGroup>
         <Form :label-width="40" class="form-wrap" style="justify-content: flex-start">
            <FormItem :label="$t('width')" prop="name" style="margin-right: 10px">
                <InputNumber :min="1" :max="2000" v-model="modalData.width"></InputNumber>
            </FormItem>
            <FormItem :label="$t('height')" prop="name">
                <InputNumber :min="1" :max="2000" v-model="modalData.height"></InputNumber>
            </FormItem>
        </Form>
        </Modal>
    </div>
</template>

<script setup>
import { Modal } from 'view-ui-plus';
import useSelect from '@/hooks/select';
import { useI18n } from 'vue-i18n';

const {  mixinState,canvasEditor } = useSelect();
const { t } = useI18n();

let presetSize = reactive([
    {
        label: t('red_book_vertical'),
        width: 900,
        height: 1200,
    },
    {
        label: t('red_book_horizontal'),
        width: 1200,
        height: 900,
    },
    {
        label: t('phone_wallpaper'),
        width: 1080,
        height: 1920,
    },
]);
const DefaultSize = {
    width:900,
    height:1200
}
const modalData = reactive({
    width: DefaultSize.width,
    height: DefaultSize.height,
});

let width = ref(DefaultSize.width)
let height = ref(DefaultSize.height)

const showModal = ref(false)
const OK = () => {
    width.value = modalData.width
    height.value = modalData.height
    setSize()
}

const Cancel = () => {
    showModal.value = false
}

const setSizeBy = (w,h) => {
    modalData.width = w
    modalData.height = h
}
const setSize = () => {
    canvasEditor.setSize(width.value, height.value)
}
onMounted(() => {
    canvasEditor.setSize(width.value, height.value);
    canvasEditor.on('sizeChange', (width, height) => {
        width.value = width;
        height.value = height;
    });
});
</script>

<style lang="less" scoped>
:deep(.ivu-form-item) {
  margin-bottom: 0;
}
:deep(.ivu-divider-plain) {
  &.ivu-divider-with-text-left {
    margin: 10px 0;
    font-weight: bold;
  }
}

.form-wrap {
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin-bottom: 10px;
}
</style>