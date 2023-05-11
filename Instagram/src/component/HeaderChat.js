import React from "react"
import {Text,View,Image} from "react-native"
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/Octicons';

const HeaderChat=({data})=>{
    return(
    <View style={{backgroundColor:"#FFFFFF"}}>
    <View style={{padding:10,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <View style={{flexDirection:'row',alignItems:"center"}}>
    <Icon1
          name="arrow-back"
          style={{
            fontSize: 25,
            color: 'black',
          }}></Icon1>
    <View style={{borderWidth:1,borderRadius:50,marginHorizontal:10}}><Image source={{uri:data.image}} style={{width:40,height:40}}/></View>
    <View><Text style={{fontWeight:"bold",color:'black'}}>{data.firstName}  {data.lastName}</Text><Text style={{fontStyle:"italic"}}>{data.company.name}</Text>
    </View>
    </View>

    <View style={{flexDirection:"row"}}>
    <Icon2
          name="phone"
          style={{
            fontSize: 25,
            color: 'black',
            paddingHorizontal:15
          }}></Icon2>
              <Icon3
          name="device-camera-video"
          style={{
            fontSize: 25,
            color: 'black',
          }}></Icon3>
    </View>
    </View>
   
   </View>
    )
}
export default HeaderChat