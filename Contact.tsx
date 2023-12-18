import { StyleSheet, Text, View,TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react';
//import Fontisto from 'react-native-vector-icons/Fontisto';
import CheckBox from 'react-native-check-box'


const Contact = () => {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[address,setAddress]=useState('');
  const[mobile,setMobile]=useState('');
  const[isChecked,setIsChecked]=useState(false);
  const submit=()=> {
    if(name.length>=3 && email.length>=7 && password.length>=6 && mobile.length==10 &&address.length>=30){
      Alert.alert('Confirm form', 'your form is successfull ')
  }else{
    Alert.alert('Confirm form', 'your form is not  successfull ')
  }
  };
 
  
  return (
    <View>
      <Text style={styles.temp}>Contact</Text>
      <Text style={styles.inputText}> Full Name</Text>
      <TextInput style={styles.input}  value={name} onChangeText={(name)=>setName(name)}/>

      <Text style={styles.inputText}> Email </Text>
      <TextInput style={styles.input}  value={email} onChangeText={(email)=>setEmail(email)}/>
      

      <Text style={styles.inputText}> Password </Text>
      <TextInput style={styles.input}  value={password} onChangeText={(password)=>setPassword(password)}/>

      <Text style={styles.inputText}> Phone </Text>
      <TextInput style={styles.input} value={mobile} onChangeText={(mobile)=>setMobile(mobile)}/>
      
      <Text style={styles.inputText}> Address </Text>
      <TextInput style={styles.input}  value={address} onChangeText={(address)=>setAddress(address)}/>

    <CheckBox
    style={{ padding: 10,marginTop:12,marginLeft:15}}
     onClick={()=> setIsChecked(!isChecked) }
    isChecked={isChecked}
    isCheckedStyle={{color:'blue'}}
    rightText={"I have read and agreed with the TC"}
    rightTextStyle={{fontSize:16,color:'black',fontWeight:'600',marginLeft:10,}}/>
       <TouchableOpacity style={[styles.touchable,{backgroundColor:!isChecked?'grey':'blue'}]}
        onPress={submit}
        disabled={!isChecked?true:false}
       >
        <Text style={styles.touchableOpacity}>Contact Us</Text>
       </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  input:{
    fontSize:22,
    fontWeight:'400',
    color:'black',
    borderBottomWidth:2,
    borderColor:'black',
    marginHorizontal:25,
    marginVertical:2,
  },
  inputText:{
    marginTop:7,
    fontSize:18,
    marginLeft:25,
    color:'black',
    fontWeight:'500'
  },
  touchable:{
    padding:12,
    marginHorizontal:25,
    borderRadius:8,
    marginTop:7
  },
  touchableOpacity:{
    color:'white',
    fontSize:18,
    textAlign:'center',
  },
  temp:{
    textAlign:'center',
    fontSize:20,
    color:'black',
    fontWeight:'500'
  }
})

export default Contact

