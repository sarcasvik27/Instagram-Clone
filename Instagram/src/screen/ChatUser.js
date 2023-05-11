import {useState, React, useEffect} from 'react';
import HeaderChat from '../component/HeaderChat';
import {TextInput, View, Text, Pressable, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/Ionicons';

const ChatUser = ({route}) => {
  const [sendVisible, setSendVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [allMessages, setAllMessage] = useState([]);
  const arr = [];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        padding: 10,
      }}>
      <HeaderChat data={route.params.data} />
<View>
<FlatList
          data={allMessages}
          renderItem={element => {
            return (
              <View style={{alignItems: 'flex-end', margin:2}}>
                <View
                  style={{
                    padding: 10,
                    borderTopRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderBottomLeftRadius: 16,
                    backgroundColor: 'rgba(39,116,232,255)',
                  }}>
                  <Text style={{color: 'white'}}>{element.item.message}</Text>
                </View>
              </View>
            );
          }}
          keyExtractor={element => {
            element.id;
          }}></FlatList>

      <View
        style={{
          backgroundColor: 'rgba(239,239,239,255)',
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 50,
          flexDirection: 'row',
          alignItems: 'center',
          // padding: 5,
          marginTop:5
        }}>

        <View
          style={{
            backgroundColor: 'rgba(39,116,232,255)',
            borderRadius: 50,
            padding: 10,
          }}>
          <Icon2
            name="camera"
            style={{
              fontSize: 25,
              color: 'white',
            }}></Icon2>
        </View>
        <TextInput
          multiline
          placeholder="Message..."
          value={message}
          onChangeText={value => {
            setMessage(value);
          }}
          style={{flex: 0.9}}
        />

        {message.length > 0 ? (
          <Pressable
            onPress={() => {
              userObject = {
                message: message,
                time: new Date(),
              };
              setAllMessage([...allMessages, userObject]);
              //arr.push(message)
              console.log('the message is ', allMessages);
              setMessage('');
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'rgba(39,116,232,255)',
                fontSize: 16,
              }}>
              Send
            </Text>
          </Pressable>
        ) : (
          <View style={{flexDirection: 'row'}}>
            <Icon3
              name="mic"
              style={{
                fontSize: 25,
                paddingHorizontal: 5,
              }}></Icon3>
            <Icon4
              name="image-outline"
              style={{
                fontSize: 25,
                paddingHorizontal: 5,
              }}></Icon4>
            <Icon
              name="sticker-emoji"
              style={{
                fontSize: 25,
                paddingHorizontal: 5,
              }}></Icon>
          </View>
        )}
      </View>
      </View>
    </View>
  );
};
export default ChatUser;
