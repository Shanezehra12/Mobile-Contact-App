import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import { Icon } from 'react-native-elements';
import Header from '../Component/Header';


const HomeScreen = () => {

  return (
  <View style = {styles.container}>
      <Header />

      <ScrollView>
       
      </ScrollView>
     
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
    },

    alphabet : {
      color : 'black', 
      fontSize : 12 , 
      fontWeight: "bold",
      marginTop: 14 
      
    },

    contactText : {

    },
})