import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet,Image,Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const HeaderHome = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.outerView}>
      {/* <Icon name="instagram" style={styles.icon}></Icon> */}
      <Image source={require('../Assets/images/png-transparent-logo-brand-instagram-social-media-graphy-instagram-text-photography-logo.png')} style={styles.image}></Image>
      <View style={styles.innerView}>
        <Icon name="heart-o" style={styles.icon}></Icon>
       <Pressable onPress={()=>{navigation.navigate("Message")}}><Icon name="envelope-o" style={styles.icon}></Icon></Pressable> 
      </View>
    </View>
  );
};
export default HeaderHome;

const styles = StyleSheet.create({
  outerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
    paddingBottom:10
  },
  icon: {fontSize: 25,paddingHorizontal:10 },
  innerView: {
    flexDirection: 'row',
  },
  image:{height:70,
    width:140}
});
