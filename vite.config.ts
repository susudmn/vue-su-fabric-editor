import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import eslintPlugin from 'vite-plugin-eslint'; //导入包
import vueSetupExtend from 'vite-plugin-vue-setup-extend-plus';
import autoImports from 'unplugin-auto-import/vite';
// import { VitePWA } from 'vite-plugin-pwa';
require('events').EventEmitter.defaultMaxListeners = 0  // 设置最大监听器数量为15
type CacheStrategy =
  | 'CacheFirst'
  | 'CacheOnly'
  | 'NetworkFirst'
  | 'NetworkOnly'
  | 'StaleWhileRevalidate';
interface IgetCache {
  name: string;
  pattern: RegExp | string;
  cacheDay?: number;
  cacheType?: CacheStrategy;
}

const autoprefixer = require('autoprefixer');
const path = require('path');
const getCache = ({ name, pattern, cacheDay = 7, cacheType }: IgetCache) => ({
  urlPattern: pattern,
  handler: cacheType || 'CacheFirst',
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 500,
      maxAgeSeconds: 60 * 60 * 24 * cacheDay,
    },
    cacheableResponse: {
      statuses: [200],
    },
  },
});

const config = ({ mode }) => {
  // const isProd = mode === 'production';
  const envPrefix = 'APP_';
  const { APP_TITLE = '' } = loadEnv(mode, process.cwd(), envPrefix);
  return {
    // base: isProd ? '/vue-su-fabric-editor/' : './',
    base: './',
    plugins: [
      vue(),
      autoImports({
        imports: ['vue'],
        eslintrc: {
          enabled: true,
        },
      }),
      vueSetupExtend(),
      // 增加下面的配置项,这样在运行时就能检查eslint规范
      // eslintPlugin({
      //   include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
      // }),
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
      }),
      createHtmlPlugin({
        // minify: isProd,
        inject: {
          data: {
            title: APP_TITLE,
          },
        },
      }),
    ],
    build: {
      target: 'es2015',
      outDir: path.resolve(__dirname, 'dist'),
      assetsDir: 'assets',
      assetsInlineLimit: 8192,
      // sourcemap: !isProd,
      emptyOutDir: true,
      rollupOptions: {
        input: path.resolve(__dirname, 'index.html'),// 入口文件
        // 指定输出（打包）文件的目录
        output: {
          chunkFileNames: 'js/[name].[hash].js',
          entryFileNames: 'js/[name].[hash].js',
        },
      },
    },
    envPrefix,
    // 用来设置引用模块
    resolve: {
      alias: [
        { find: /^@\//, replacement: path.resolve(__dirname, 'src') + '/' },
        { find: /^~/, replacement: '' },
        { find: /^vue-i18n/, replacement: 'vue-i18n/dist/vue-i18n.cjs.js' },
      ],
      extensions: ['.ts', '.tsx', '.js', '.mjs', '.vue', '.json', '.less', '.css'],
    },
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // additionalData: `@import "${path.resolve(__dirname, 'src/styles/variable.less')}";`,
        },
      },
    },
    server: {
      port: 3000,
      open: true,
      proxy: {
        '/fontFile': {
          target: 'https://github.com/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/fontFile/, ''),
        },
      },
    },
    preview: {
      port: 5000,
    },
  };
};

export default defineConfig(config);
