/*
 * @Author: Emiria486 87558503+Emiria486@users.noreply.github.com
 * @Date: 2023-11-04 15:47:44
 * @LastEditTime: 2023-11-05 10:28:12
 * @LastEditors: Emiria486 87558503+Emiria486@users.noreply.github.com
 * @FilePath: \Instagram\.eslintrc.js
 * @Description: 头部注释配置模板
 */
module.exports = {
  root: true,
  extends: ['@react-native-community','plugin:react/jsx-runtime'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      }, ,
    ],
  },
};