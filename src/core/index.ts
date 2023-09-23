/*
 * @Description: 核心入口文件
 */
import Editor from './core';
import MaterialPlugin from './plugin/MaterialPlugin';
import RulerPlugin from './plugin/RulerPlugin';
import WorkspacePlugin from './plugin/WorkspacePlugin';
import DringPlugin from './plugin/DringPlugin';
import DrawLinePlugin from './plugin/DrawLinePlugin';
import GroupPlugin from './plugin/GroupPlugin';
import DeleteHotKeyPlugin from './plugin/DeleteHotKeyPlugin';
import CopyPlugin from './plugin/CopyPlugin';
import GroupAlignPlugin from './plugin/GroupAlignPlugin';
import CenterAlignPlugin from './plugin/CenterAlignPlugin';
import LayerPlugin from './plugin/LayerPlugin';
import HistoryPlugin from './plugin/HistoryPlugin';
import DownFontPlugin from './plugin/DownFontPlugin';

export {
  MaterialPlugin,
  RulerPlugin,
  WorkspacePlugin,
  DringPlugin,
  DrawLinePlugin,
  GroupPlugin,
  DeleteHotKeyPlugin,
  CopyPlugin,
  GroupAlignPlugin,
  CenterAlignPlugin,
  LayerPlugin,
  HistoryPlugin,
  DownFontPlugin
};
export default Editor;
