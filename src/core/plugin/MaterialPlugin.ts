import { fabric } from 'fabric';
import Editor from '../core';
type IEditor = Editor;
import axios from 'axios';

class MaterialPlugin {
  public canvas: fabric.Canvas;
  public editor: IEditor;
  static pluginName = 'MaterialPlugin';
  static apis = ['getMaterialType', 'getMaterialList'];
  apiMapUrl: { [propName: string]: string };
  constructor(canvas: fabric.Canvas, editor: IEditor) {
    this.canvas = canvas;
    this.editor = editor;

    this.apiMapUrl = {
      template: 'https://nihaojob.github.io/vue-fabric-editor-static/template/type.json',
      svg: 'https://nihaojob.github.io/vue-fabric-editor-static/svg/type.json',
    };
  }

  // 根据素材类型获取分类列表
  async getMaterialType(typeId: string) {
    const url = this.apiMapUrl[typeId];
    const res = await axios.get(url, { params: { typeId } });
    return res.data.data;
  }

  async getMaterialInfo(typeId: string) {
    const url = this.apiMapUrl[typeId];
    const res = await axios.get(url, { params: { typeId } });
    return res.data.data;
  }
}

export default MaterialPlugin;
