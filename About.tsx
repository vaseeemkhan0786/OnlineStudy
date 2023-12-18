import { StyleSheet, Text, View ,Linking,
  Image,TouchableOpacity} from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View>
      <Text style={styles.full}> i am a fullStack devloper and designer </Text>
      <View style={styles.VIEW} >
     < Image style={styles.image1} source={require('./Image/srk1.webp')} />
     </View>
      <View style={styles.view3}>
      <Text style={styles.aboutme}> about me </Text>
      <Text style={styles.vaseem}>During lesson planning, teachers
       work with curricular resources: they interpret them and
        transform them as they design instruction. This interpreta- 
        tion and design of resources continue in lesson enactment 
  </Text>
      </View>
     
        <Text style={styles.follow} > FOLLOW OUR SOCIAL MEDIA NETWORK</Text>
        <View style={styles.setup}>
        <TouchableOpacity
        onPress={()=>Linking.openURL('https://www.Instagram.com')} >
         <Image style={styles.image2} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Fdy40TOMD8yGbRm6Ruzhh1_8_ZKmb1WoUA&usqp=CAU'}}/>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>Linking.openURL('https://www.facebook.com/')}>
         <Image style={styles.image2} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHd5JsXO1V3oC1QSpXjNCcjF45EU3NSz5kdA&usqp=CAU'}}/>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=tnqasxOvBFI')}>
         <Image style={styles.image2} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDKQ0F2ia_-jaTtQZfFoIpEYhWI9VFLOuO5NH1auFIel_ye9PZI2LHwZIYOneBJY09d4k&usqp=CAU'}}/>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>Linking.openURL('https://telegram.org/https://telegram.org/')}>
         <Image style={styles.image2} source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAaVBMVEX////+/v45teQ0suIurt8qq949uOUmqNxAuubS5fG0zuT1+vzb7fZiw+jE6PZqxumy4fTq9PmBzeuK0u6jz+ae2fCY2vJty+zM7fip4PSm3fK35PRTvebi7vWv1uvA3e2Rzum91ehpu+EdcIbsAAAETklEQVR4nO3d61baQBSG4QSiJUFBwUOltLa9/4tskIIxmczsPfs0yZr3Z4mQxw/JguWyRZHL5XK5XC6Xy+VyuSTbrEayPjFEY4ROW+tzDAZATGAbjCJdC16RoiVWkZiFxkiF8kJnpEB55WGc+m7IeONjnDJz8DLMKPwME4oMo+1tJo6V6iiSjLbDTBwrrVFuFZoJo+11Jo5b6VH0HLISTYekRNchJ9F2CEk2+g4RiYlDQmLj4JdYObgldg5eiaWDU2Lr4JNYO7gk1oq2/VwgLJNYG87NxUGXWJ//tdlAiJJFQpH2sD75bnMZhCKxPvN+U4Hchw6YgqM8FzgqznFQEZx6LktJiIphcR0DAomSbDUQi4eylIZoMMp+wa/AO/biis2AIQKRZjgUEAheIqq4czMADjREkjGigEGwEjHF4zhDAiLF8CmAkHt7SEABhOAmMWHAHCiIhQIMwUhMGKlDoAoJiBKjruMgcMmSKe+3v677kAX0fpUh/qfR0FGC71nT4Vd8MPoOOOSHFiT4A+50wCHQSYiMkOLMGDrSgqyCjMcxx4obQmAEFZc5HA7EIMKQI5zhcmAgMEkcA6DwO5KAbFEMtyMBCEjx6Rh5w77lhmxwih2SUa9HDkA9KvsgQEXwaYWFQH7xHH5vL3jGuAMHgUwCvSuw4nIJ9DuMIG9wRmcOn2NvAUEougyfAzkIB8T12TPdoQ5BKb4w/A5dCOwCHuVQhVAYIceDIoTi8H50fQrp0IOg5kgXssY6EoXUaIcqBCq5i3DUqhDcu0CMAz2I/AWxz4A5DCCBT98iHSaQtnsoA+qwgrTtWR1rO8hy8J5kyPgJdeAHgUAqRJ/f8nX8HG2YxzzHDGlbj8yBcSQBaRtcArGOVCAV1YGHgP5kBx6y1HZABmGZBOdIF4J0JAT5RXIkBKlIDinIkQZpUnFQf0gatCQlSNWFNMHPTKYCQY6SMgQlkXIQJQ1Wgn8sVUgDfhlOFPLeXLOHxEh+9waBSwQdlEkatGQKkOYp7FhKQggX96+QpjIdhDJJz1EFJZOAfPw7MwT5h91YIJdbWCE4R/wkDodXgn7TgITETvLH5fBJpB2xELejqsY+95aHFDfojl3I4NYRCPIx8I4IyM0n5K/jVivIhgCpnDe7fnduJ+6ImeTpP2T0AItBoiRniOcAIiTOEQvxHmECiZEEHO1LGwES64h54QLUdRx0IPISJUfxLCO5vg67X6b5HVKTXEbBfQ0JIia52WEvuDSH1JMLH9EhOAkyMiQRCd2RhoTDURytFUyOFCZhgphLuBzWEj6HrYTTURTfzOJ12Em4HVYSfoeNRMJhIZFx6EukHNoSOYeuRNKhKZF1FMVuHoxTc3FoSHQc4hQ1hrBE0yFIUWaISfQdIhQTBj/FjMFLMWXwUawVH82EceqWolD7DylhTX6MTvNQnHuYA+LaLBDXDm7Cxvq8crlcLpfL5XK5XC430j8kmWjCDCKbKQAAAABJRU5ErkJggg=='}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  full:{
    fontSize:17,
    color:'black',
    textAlign:'center',
    marginTop:8,
    textTransform:'capitalize',

  },
  VIEW:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:16
  },
  image1:{
    width:200,
    height:200,
    borderRadius:100,
   
  },
  view3:{
      backgroundColor:'blue',
      opacity:0.9,
      marginHorizontal:16,
      borderRadius:7,
      marginTop:10,
  },
  aboutme:{
    fontSize:20,
    textAlign:'center',
    color:'black',
    fontWeight:'700'
  },
  vaseem:{
    fontSize:16,
    marginHorizontal:8,
    fontWeight:'500',
    color:'white',
    textAlign:'center',
    lineHeight:20
  },
  setup:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:15,
  },
  follow:{
    fontSize:17,
    textAlign:'center',
    marginTop:30,
  },
  image2:{
    width:50,
    height:50,
    resizeMode:'contain',

  }
})


export default About;
