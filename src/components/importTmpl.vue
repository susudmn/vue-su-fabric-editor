<template>
    <div>
        <div class="search-box">
        <Cascader :data="[data, ...state.materialTypelist]" v-model="state.materialType" @on-change="handleChange">
            <Button icon="ios-menu"></Button>
        </Cascader>
        <Input class="input" v-model="state.search" :placeholder="state.placeholder" search  @on-change="search"/>
        </div>
        <div :key="item.value" v-for="item in state.materialist">
            <Divider orientation="left" style="font-size: 14px;color: #5e5c5c;">{{ item.label }}</Divider>
            <Tooltip :content="info.label" placement="top" v-for="(info,i) in item.list" :key="`${i}-bai1-button`">
                <img
                    class="tmpl-img"
                    :alt="info.label"
                    v-lazy="info.src"
                    @click="beforeClearTip(info.tempUrl)"
                />
            </Tooltip>
        </div>
    </div>
</template>

<script setup name="ImportTmpl" lang="ts">
import { reactive } from 'vue'
import useSelect from '@/hooks/select';
import axios from 'axios';
import { Spin, Modal } from 'view-ui-plus';
import { useI18n } from 'vue-i18n';
import { cloneDeep } from 'lodash-es';

const { t } = useI18n();
const { canvasEditor } = useSelect();
const data = {
    value:'',
    label:'全部'
}

interface materialTypeI {
    value: string;
    label: string;
    list?: materialItemI[];
}

interface materialItemI {
    value: string;
    label: string;
    tempUrl: string;
    src: string;
}

const state = reactive({
    search: '',
    placeholder: <undefined | string>'',
    jsonFile: <any>null,
    materialType: [''], // 选中分类
    materialTypelist: <materialTypeI[]>[], // 分类列表
    materialist: <materialTypeI[]>[], // 列表内容
});
// 获取素材分类
canvasEditor.getMaterialType('template').then((list: materialTypeI[]) => {
    state.materialTypelist = [...list];
    state.materialist = list;
});

// 插入文件
const insertSvgFile = ()=> {
    canvasEditor.insertSvgFile(state.jsonFile)
}

// 替换提示
const beforeClearTip = (tmplUrl: string) =>{
    Modal.confirm({
        title:t('tip'),
        okText:t('ok'),
        cancelText:t('cancel'),
        content: `<p>${t('replaceTip')}</p>`,
        onOk: () => getTempData(tmplUrl)
    })
}

// 获取模板数据
const getTempData = (tmplUrl: string) => {
    Spin.show({
        render: (h: (arg0: string, arg1: string) => any) => h('div', t('alert.loading_data')),
    })
    const getTemp = axios.get(tmplUrl)
    getTemp.then((res)=>{
        state.jsonFile = JSON.stringify(res.data)
        Spin.hide();
        insertSvgFile();
    })
}
// 切换素材类型
const handleChange = (e: any, item: { label: any; value: any; }[]) => {
    // 搜索框文字设置
    const { label, value } = item[0];
    state.placeholder = label;
    state.search = '';
    filterTypeList(value);
};

// 模板搜索功能
const filterTypeList = (value: string) => {
    // 全部类型
    if (!value) {
        state.materialist = cloneDeep(state.materialTypelist);
    } else {
        // 当前分类详情
        const materialTypeInfoList =
            state.materialTypelist.filter((item) => item.value === value) || [];
            state.materialist = materialTypeInfoList;
    }

    // 展示分类
    if (state.search) {
        const list = cloneDeep(state.materialist);
        // console.log(state.search);
        
        // 按照搜索内容展示
        state.materialist = list.map((item) => {
            // if(item.list){
            //     if (item.label.indexOf(state.search) != -1) {
            //         item.list = item.list.filter((info) => item = info)
            //         console.log(item.list)
            //     }
            //     // console.log(item)
            // }
            if (item.list) {
            //    item.list.filter((item)=>{item.label});           
                item.list = item.list.filter((info) => info.label.includes(state.search));
            }
            // console.log(item)
            return item;
        });
    }
};

const search = () => {
    const [typeValue] = state.materialType; 
    filterTypeList(typeValue);
}

</script>

<style scoped lang="less">
.search-box{
    display: flex;
    padding-top: 10px;
    .input {
        margin-left: 10px;
    }
}
.tmpl-img {
  width: 132px;
  cursor: pointer;
  margin-right: 5px;
}

</style>
