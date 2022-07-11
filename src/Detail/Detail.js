import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './Detail.style';
import useFetch
    from '../hooks/useFetch/useFetch';
import config from '../../config';
 

const Detail = ({ route, navigation }) => {
    const { meal } = route.params;
    const { data } = useFetch(`${config.API_DETAIL_URL}${meal}`);

     const renderCategory = ({ item }) =>
       <Text>{item.strMeal}</Text>



    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={(item, _index) => item.idMeal}
                data={data.meals}
                renderItem={renderCategory}
            />
        </SafeAreaView>
    );
};


export default Detail;