import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";



const Model = () => {
  return (
    <View>
      <View style={styles.sheet}>
        <Modal style={styles.modal}>

        </Modal>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    sheet:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        width:'100%',
        height:'30%',
        backgroundColor:'#fff'
    }
})

export default Model

