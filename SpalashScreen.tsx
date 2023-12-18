import { StyleSheet, Text, View,Image ,Dimensions} from 'react-native'
import React from 'react'

const SpalashScreen = () => {
  return (
      <Image style={styles.back}
        source={require('./Image/study3.webp')}/>
  )
  
}
const {width,height}=Dimensions.get('window')
const styles = StyleSheet.create({
   
    back:{
        width:width,
        height: height, 
        resizeMode:'contain',
        borderRadius:8
    },
})

export default SpalashScreen;
