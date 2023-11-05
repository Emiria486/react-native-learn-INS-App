/*
 * @Author: Emiria486 87558503+Emiria486@users.noreply.github.com
 * @Date: 2023-11-04 15:47:44
 * @LastEditTime: 2023-11-05 12:23:54
 * @LastEditors: Emiria486 87558503+Emiria486@users.noreply.github.com
 * @FilePath: \Instagram\App.tsx
 * @Description: 头部注释配置模板
 */
import {View, Text} from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.primary, fontSize: font.size.xxlg}}>
        hello world
        <AntDesign name="stepforward" size={25}/>
      </Text>
    </View>
  );
};
export default App;
