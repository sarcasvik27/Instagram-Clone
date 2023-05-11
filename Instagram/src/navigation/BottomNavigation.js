import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import AddPost from '../screen/AddPost';
import MyProfile from '../screen/MyProfile';
import Reels from '../screen/Reels';
import SearchPost from '../screen/SearchPost';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (

    <Tab.Navigator screenOptions={{ headerShown: false }} >
       <Tab.Screen name="Home" component={Home}/> 
       <Tab.Screen name="AddPost" component={AddPost}/>
       <Tab.Screen name="SearchPost" component={SearchPost}/>  
       <Tab.Screen name="Reels" component={Reels}/>
       <Tab.Screen name="MyProfile" component={MyProfile}/>
    
    </Tab.Navigator>
  
  );
}
export default MyTabs