import React from "react";
import { Pressable, Text,View } from "react-native";
import { TextInput } from "react-native";

const MyProfile=()=>{
  
    return(
     <View>
      <TextInput style={{borderWidth:1}} placeholder="enter your number"></TextInput>
      <Pressable style={{borderWidth:1,color:"yellow"}}></Pressable>
     </View>
    )
}
export default MyProfile







