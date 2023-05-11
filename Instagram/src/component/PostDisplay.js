import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const PostDisplay = ({Data}) => {
 console.log("djebjbde",Data)
  return (
    
      <FlatList
        data={Data}
        renderItem={element => {
            return(
              <View style={{paddingVertical:10}}>
                <View style={{flexDirection:"row",alignItems:"center",paddingLeft:10}}>
                 <View style={{borderWidth:1,alignItems:"center",borderRadius:105}}> 
                 <Image source={{uri: element.item.image}} style={{height: 40,
                width: 40,
                borderRadius: 105,
                borderWidth: 1}}/>
                 </View>
              
                <View style={{padding:10}}>
                <Text style={{fontWeight:"600",fontSize:16,color:"black"}}>{element.item.firstName}</Text>
                <Text style={{fontWeight:"600"}}>{element.item.lastName}</Text>
                </View>
                </View>
                  
                <Image source={{uri: element.item.image}} style={{width: "100%",
                height:400,backgroundColor:"#D7D8D8"}}/>
                <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:"center"}}>
                <View style={{padding:10,flexDirection:"row"}}>
                <Icon name="heart-o" style={{fontSize:25,color:"black"}}></Icon>
                <Icon name="comment-o" style={{fontSize:25,paddingHorizontal:20,color:"black"}}></Icon>
                <Icon name="send-o" style={{fontSize:25,color:"black"}}></Icon>
                </View>
                <Icon name="bookmark-o" style={{fontSize:25,color:"black",paddingHorizontal:10}}></Icon>
                </View>
                <Text style={{paddingHorizontal:10,fontWeight:"600",color:"black"}}>{element.item.age} likes</Text>
                <View style={{paddingHorizontal:10,flexDirection:"row"}}>
                <Text style={{fontWeight:"600",color:"black"}}>{element.item.firstName}</Text>
                <Text style={{color:"black"}}> {element.item.address.address} {element.item.address.city} {element.item.address.state}</Text>
                </View>
               

                </View>
            )
        //   console.log('hey jaya your data', element.item.category);
        }}
        // keyExtractor={element=>element.id}
      />
    
  );
};
export default PostDisplay;
