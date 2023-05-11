import React, {useState, useEffect} from 'react';
import {FlatList, ScrollView} from 'react-native';
import HeaderHome from '../component/HeaderHome';
import PostDisplay from '../component/PostDisplay';
import {useDispatch} from 'react-redux';
import {storeData} from '../Redux/actions/Action';
import StoryDisplay from '../component/StoryDisplay';
const Home = () => {
  let dispatch = useDispatch();
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://dummyjson.com/users')
  //     .then(response => response.json())
  //     .then(res => {dispatch(storeData(res));
  //     });
  // }, []);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(res => {
        setData(res.users);
      });
  }, []);

  return (
    <>
      <HeaderHome></HeaderHome>
      <ScrollView>
        <StoryDisplay data={data}></StoryDisplay>
        <PostDisplay Data={data}></PostDisplay>
      </ScrollView>
    </>
  );
};

export default Home;
