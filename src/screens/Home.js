import { StyleSheet, Text, View,FlatList,handlerKeyword } from 'react-native'

import Categories from '../components/Categories'


const Home = ({navigation}) => {
    
  return (
    <>
        
        
        <Categories navigation={navigation} />
    </>
  )
}
export default Home
const styles = StyleSheet.create({
  
})