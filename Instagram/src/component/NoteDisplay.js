import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
const NoteDisplay = ({data}) => {
  console.log('jaaya', data);
  return (
    
    <View style={{paddingBottom:15 }}>
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={data}
      renderItem={element => {
        return (
            <View style={{flexDirection:"column",alignItems:"center",backgroundColor:"#FFFFFF",marginTop:10}}>
             <View style={{padding:10,backgroundColor:"#FFFFFF",borderRadius:16, position:"absolute",zIndex:1,elevation:10}}><Text>{element.item.firstName} </Text></View>
          <View
            style={{
              height: 70,
              width: 70,
              borderRadius: 105,
              marginHorizontal: 10,
              justifyContent:'center',
              alignItems:'center',
              marginTop:30
            }}>
            <Image
              source={{uri: element.item.image}}
              style={{
                height: 70,
                width: 70,
                borderRadius: 105,
                alignSelf:'center',
                borderWidth: 3,
                backgroundColor:"rgba(239,239,239,255)"
              
              }}
            />
      
          </View>
                <Text>{element.item.firstName}</Text>
                
                </View>           
        );
      }}
    />
      </View>  
  );
};
export default NoteDisplay;
