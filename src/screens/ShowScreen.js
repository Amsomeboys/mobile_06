import React, {useEffect, useState} from "react";
import { FlatList } from "react-native";
import {View, Text, StyleSheet,Image} from 'react-native'

import yelp from "../api/yelp";


const ShowScreen = ({route}) => {
    const [result, setResult] = useState(null)
    const {id} = route.params;


    const getDetails = async(id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    };

    useEffect(()=>{
        getDetails(id);
    },[]);

    if(!result){
        return null;
    }

    return(
        <View style={style.container}>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                    return <Image style={style.img} source={{uri:item}}/>
                }}
            />
            {/* <Image style={style.img} source={{uri: result.image_url}}/> */}
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d9b4be',
        padding:10,
        paddingHorizontal:15,
      },
    img: {
        width:230,
        height:120,
        borderRadius:5,
        marginRight:10,
    },  
});

export default ShowScreen;