import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
const StoryDisplay = ({data}) => {
  console.log('jaaya', data);
  return (
    <>
    <View style={{paddingBottom:15}}>
    <FlatList
      horizontal={true}
      data={data}
      renderItem={element => {
        return (
            <View style={{flexDirection:"column",alignItems:"center"}}>
          <View
            style={{
              height: 70,
              width: 70,
              borderRadius: 105,
              borderWidth: 3,
              marginHorizontal: 10,
              justifyContent:'center',
              alignItems:'center',
              borderBottomColor: 'red',
              borderTopColor: 'orange',
              borderRightColor:'orange',
            }}>
            <Image
              source={{uri: element.item.image}}
              style={{
                height: 70,
                width: 70,
                borderRadius: 105,
                alignSelf:'center',
                borderWidth: 3,
              }}
            />
      
          </View>
                <Text>{element.item.firstName}</Text>
                
                </View>           
        );
      }}
    />
      </View>
    <View style={{borderWidth:0.4,borderColor:"rgb(196,196,196)"}}></View>

  </>

  
  );
};
export default StoryDisplay;
