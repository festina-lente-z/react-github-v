// const { getThemeVariables } = require('antd/dist/theme');

// module.exports = function override(config, env) {
//   return config
// }

const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const { getThemeVariables } = require('antd/dist/theme');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#060707',
      'link-color': '#060707',
    }
  })
);