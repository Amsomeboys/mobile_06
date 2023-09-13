import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native'

import yelp from "../api/yelp";

import { AntDesign } from '@expo/vector-icons';
import ResultsList from "../components/ResultsList";

const HomeScreen= ({navigation}) =>{
    const [term,setTerm] = useState('')
    const [result, setResult] = useState([]);
    const searchApi = async(SearchTerm) => {
        try {
            const response = await yelp.get('/search',{
                params:{
                    limit:50,
                    term : SearchTerm,
                    location:"san jose",
                },
            });
            setResult(response.data.businesses);
            console.log(result);
        } catch (error) {
            console.log("Something went wrong!!");
        }
        
    };

    const filterResultByPrice = (price) =>{
        return result.filter((result)=>{
            return result.price === price;
        })
    }

    useEffect(()=>{
        searchApi("pasta");
    },[]);

    return(
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <AntDesign name="search1" color="black" style={styles.icon}/>
        <TextInput
            style={styles.input}
            placeholder="Search by name i.e. Pizza or Ramen"
            onChangeText={((newTerm) => {setTerm(newTerm)})}
            value={term}
            onEndEditing={searchApi}
        >   
        </TextInput>
        </View>
        <Text>SearchTerm : {term}, Found {result.length} results </Text>
        {/* <FlatList 
            data={result}
            keyExtractor={(item) => item.id}
            renderItem={({item})=>(
                <Text>{item.name}</Text>
            )}
        /> */}
        <ResultsList title="Cheap" results={filterResultByPrice('$')} navigation={navigation}/>
        <ResultsList title="Morderate" results={filterResultByPrice('$$')} navigation={navigation}/>
        <ResultsList title="Expensive" results={filterResultByPrice('$$$')} navigation={navigation}/>
      </View>  

    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d9b4be',
      padding:10,
      paddingHorizontal:15,
    },
    icon:{
        fontSize:35,
        marginHorizontal:15,
        alignSelf:"center",
    },
    input:{
        flex:1,
        fontSize:18, 
    },
    inputContainer:{
        flexDirection:"row",
        backgroundColor:"#f8eeee",
        borderRadius:8,
        height:50,
        marginTop:10,
    },
    serchText:{
        textAlign:"right",
        marginVertical:5,
    },

  });

  export default HomeScreen;