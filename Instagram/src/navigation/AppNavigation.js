import {React} from "react"
import MyTabs from "./BottomNavigation"
import MessageScreen from "../screen/MessageScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatUser from "../screen/ChatUser";

const AppNavigation=()=>{
    const Stack = createNativeStackNavigator();
    return(
     <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="ChatUser" component={ChatUser} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}
export default AppNavigation 