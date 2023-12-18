import { StyleSheet, Text, View ,FlatList,Image,
TouchableOpacity,Linking} from 'react-native'
import React,{useState} from 'react';
import axios from 'axios';
import Data from './ApiData';

const Course = () => {
  const [data, setData] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
   const renderItem=({item})=> {
     return(
      <View>
        <View style={styles.imageView}>
        <Image style={styles.image} source={item.image} />
        </View>
        <Text style={styles.text}> {item.description}</Text>
        <Text style={styles.text}> {item.course1}</Text>
        <Text style={styles.text}> {item.course2}</Text>
        <Text style={styles.text}> {item.course3}</Text>
        <Text style={styles.text}> {item.fee}</Text>
        <View style={styles.center}>
        <TouchableOpacity style={styles.touch}
        onPress={()=>Linking.openURL('https://www.indeed.com/career-advice/career-development/types-of-programming-languages')}>
        <Text style={styles.read}> more read </Text>
        </TouchableOpacity>
        </View>

        <View style={styles.centers}>
        <TouchableOpacity style={styles.touchs}
        onPress={()=>Linking.openURL('https://www.w3schools.com/')}>
        <Text style={styles.read}> go to course </Text>
        </TouchableOpacity>
        </View>
      </View>
     )
   }
  return (
    <View>
      <Text style={styles.container}> student of Course</Text>
      <FlatList data={Data} 
        keyExtractor={(item)=>item.id}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
       
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
        fontSize:21,
        color:'black',
        fontWeight:'600',
        textAlign:'center',
        marginTop:5,
  },
  imageView:{
    marginTop:8,
   justifyContent:'center',
   alignItems:'center'
  },

  image:{
    width:370,
    height:270,
    resizeMode:'contain',
    borderRadius:13,
  },
  text:{
    fontSize:16,
    marginHorizontal:10,
    fontWeight:'600',
    marginTop:8,
    textAlign:'center'
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
  touch:{
    backgroundColor:'blue',
    borderRadius:10,
    padding:8,
    width:150, 

  },
  centers:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:8,
  },
  touchs:{
    backgroundColor:'black',
    borderRadius:10,
    padding:8,
    width:150, 

  },
  read:{
    fontSize:18,
    textAlign:'center',
    color:'white',
  }
})

export default Course
