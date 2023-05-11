import {React} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
const HeaderMessage = () => {
  return (
    <View
      style={{
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon1
          name="arrow-back"
          style={{
            fontSize: 25,
            color: 'black',
            paddingRight: 15,
            color: 'gray',
          }}></Icon1>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>sarcasvik</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Icon
          name="video-camera"
          style={{
            fontSize: 25,
            color: 'black',
            paddingHorizontal: 10,
            color: 'gray',
          }}></Icon>
        <Icon
          name="pencil-square-o"
          style={{
            fontSize: 25,
            color: 'black',
            paddingHorizontal: 10,
            color: 'gray',
          }}></Icon>
      </View>
    </View>
  );
};
export default HeaderMessage