/* eslint-disable import/no-extraneous-dependencies */
const reactRefresh = require('@vitejs/plugin-react-refresh')
const reactSvgPlugin = require('vite-plugin-react-svg')

export default {
  root: 'src',
  plugins: [
    reactRefresh(),
    reactSvgPlugin({
      defaultExport: 'component',
    }),
  ],
}
