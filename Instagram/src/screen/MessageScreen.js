import {React,useEffect,useState} from "react"
import {Text,TextInput,View,ScrollView} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderMessage from "../component/HeaderMessage";
import StoryDisplay from "../component/StoryDisplay";
import NoteDisplay from "../component/NoteDisplay";
import ChatDisplay from "../component/Chat";

const MessageScreen=()=>{
    const [data,setData]=useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/users')
          .then(response => response.json())
          .then(res => {
            setData(res.users);
          });
      }, []);
    return(
        <View style={{backgroundColor:"#FFFFFF",flex:1,padding:10}}>
          <HeaderMessage/>
          <View style={{backgroundColor:"rgba(239,239,239,255)",borderRadius:8,flexDirection:"row",alignItems:"center"}}><Icon name="search" style={{fontSize:20,paddingLeft:5}}></Icon><TextInput placeholder="search" style={{width:"100%",height:40}}/></View>
          <ScrollView showsVerticalScrollIndicator={false}>
           <NoteDisplay data={data}/>
           <View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>
           <Text style={{fontWeight:"bold",color:"black"}}>Messages</Text>
           <Text style={{color:"blue"}}>Requests</Text>
           </View>
           <ChatDisplay data={data}/>
           </ScrollView>
       
       
        </View>
    )
}
export default MessageScreen