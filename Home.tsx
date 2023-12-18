import { StyleSheet, Text, View ,Image,Dimensions} from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.containers} source={require('./Image/aman.jpg')}/>
      
      <View  style={styles.containerImage}>
      <Text style={styles.containerText} >Welcome to vaseem</Text>
      <Text style={styles.containerText}>technical online class</Text>
      </View>

      <View style={styles.containerLoem}>
        <Text style={styles.containerTextLoem}> Lorem Ipsum is simply dummy text
           of the printing and typesetting industry.
           Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s,
           </Text>
      </View>
      <Text style={styles.containerWarning} >
      <Text style={styles.containerNote}> NOTE:</Text>Generally study notes are
       notes made progres- -sively throughout a 
      topic, term or even year. 
      </Text>
    </View>
  )
}
const width=Dimensions.get('window').width;
const styles = StyleSheet.create({
  container:{
     display:'flex',
     marginTop:15,
    // marginHorizontal:7,
  },
  containers:{
     width:370,
     height:260,
     resizeMode:'contain',
     borderRadius:8,
     marginHorizontal:13,
  },
  containerImage:{
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:20,
    marginTop:13,
  },
containerText:{
     fontSize:24,
     textTransform:'uppercase',
},
containerTextLoem:{
    fontSize:18,
    textAlign:'center',
    color:'white',
    lineHeight:24
},
containerLoem:{
   backgroundColor:'blue',
   alignItems:'center',
   marginHorizontal:15,
   borderRadius:8,
   marginTop:8,
},
containerWarning:{
   fontSize:15,
   marginLeft:7,
   color:'black',
   marginTop:15,
   textAlign:'center'
},
containerNote:{
    marginTop:15,
    fontSize:15,
    color:'red',

}
})

export default Home;
