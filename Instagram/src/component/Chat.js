import React from 'react';
import {FlatList, Image, Text, View,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
const ChatDisplay = ({data}) => {
    const navigation=useNavigation()
 console.log("djebjbde",data)
  return (
      
      <FlatList
      showsVerticalScrollIndicator={false}
        data={data}
        renderItem={element => {
            return(
                <Pressable onPress={()=>{navigation.navigate("ChatUser",{data:element.item})}}>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingTop:10}}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                 <View style={{backgroundColor:"rgba(239,239,239,255)",alignItems:"center",borderRadius:105}}> 
                 <Image source={{uri: element.item.image}} style={{height: 60,
                width: 60,
                borderRadius: 105,
                borderWidth: 1}}/>
                 </View>
              
                <View style={{padding:10}}>
                <Text style={{fontWeight:"600",fontSize:16,color:"black"}}>{element.item.firstName}</Text>
                <Text style={{fontWeight:"600"}}>{element.item.lastName}</Text>
                </View>
                </View>
            <Icon name="camera" style={{fontSize:25}}></Icon>
            </View> 
            </Pressable>
            )
        }}
        keyExtractor={element=>element.id}
      />
    
  );
};
export default ChatDisplay;
