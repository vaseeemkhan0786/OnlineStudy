import { FlatList, Image, StyleSheet, Text, View, } from 'react-native'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentData = () => {

  const [data, setData] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const dard = {
    id: '10',
    userId: '10',
    image: require('./Image/srk1.webp'),
    description: "vasem is very intelligent boy",
    name: 'samir khan',
    email: 'samir123@gmail.com',
    mobile: 34522332,
    web: 'https:/www.inlined.com'

  }
  const AccessData = async () => {
    try {
      const response = await axios.get("https://thapatechnical.github.io/userapi/users.json");
      const dataRes = await response.data;
      setData(dataRes);
      setIsLoding(true)
      // console.log(dataRes);
    } catch (error) {
      console.log('error')
    }
  }

  useEffect(() => {
    AccessData();
    setIsLoding(false)
  }, []);

  useEffect(() => {
    const AccessData = async () => {
      try {
        const response = await axios.post("https://thapatechnical.github.io/userapi/users.json/{id}", {
          headers: {
            "contain-type": "application/json",
          },
          body: JSON.stringify(dard)
        });
        const dataRes = await response.data
        console.log(dataRes);
      } catch (error) {
        console.log('error')
      }
    }
    AccessData();
  }, []);


  const handleData = ({ item }) => {
    return (
      <View >
        <View style={styles.view}>
          <Image style={styles.image} source={{ uri: item.image }} />
        </View>

        <View style={styles.bioData}>
          <Text style={styles.user}>{
            item.userId < 10 ? `#0${item.userId}` : `#{item.userId}`
          }</Text>
          <Text style={styles.bio}>Bio data</Text>
        </View>
       <View style={styles.loding}>{isLoding}</View>
        <View style={styles.des}>
          <Text style={styles.descripatoin}>{item.descriptoin}</Text>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.mobile}>{item.mobile}</Text>
          <Text style={styles.email}>{item.email}</Text>
          <Text style={styles.web}>{item.website}</Text>
        </View>

      </View>
    )
  }

  return (
    <View >
      <Text style={styles.data}>  please go to our course website </Text>
      <View>
        <FlatList data={data}
          keyExtractor={(item) => item.id}
          renderItem={handleData}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  view: {
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 13,
    borderWidth: 1,
    borderColor: 'BLACK',
    borderRadius: 9,

  },
  image: {
    width: 340,
    height: 230,
    resizeMode: 'contain',
    borderRadius: 8,

  },
  data: {
    fontSize: 19,
    alignItems: 'center',
    textAlign: 'center',
    color:'black',
    fontWeight:'600'

  },
  bioData: {
    fontSize: 16,
    marginHorizontal: 13,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    opacity: 0.9,
    marginTop: 8,
    borderRadius: 7,
    padding: 2,
  },
  bio: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  user: {
    margin: 5,
    borderRadius: 2,
    fontSize: 16,
    color: 'white'
  },
  des: {
    fontSize: 16,
    marginTop: 1,
    marginHorizontal: 13,
    backgroundColor: 'grey',
    borderRadius: 8,
  },
  descripatoin: {
    fontSize: 16,
    marginLeft: 8,
    color: 'black',

  },
  name: {
    fontSize: 16,
    color: 'black',
    marginLeft: 12,
  },
  mobile: {
    fontSize: 16,
    color: 'black',
    marginLeft: 12,
  },
  email: {
    fontSize: 16,
    color: 'black',
    marginLeft: 12,
  },
  web: {
    fontSize: 16,
    color: 'black',
    marginLeft: 12,
    marginBottom: 10,
  },
  // loding:{
  //   height:40,
  //   borderRadius:70,
  //   borderColor:'black'
  // }
})

export default StudentData
