import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './Detail.style';
import useFetch
    from '../hooks/useFetch/useFetch';
import config from '../../config';


const Detail = ({ route, navigation }) => {
    const { meal } = route.params;
    const { data } = useFetch(`${config.API_DETAIL_URL}${meal}`);

    const renderCategory = ({ item }) =>
        <View style={styles.flatContainer}>
            <Image style={styles.image} source={{ uri: item.strMealThumb }} />
            <View style={styles.textContainer}>
                <Text style={styles.mealTitle}>{item.strMeal}</Text>
                <Text style={styles.mealArea}>{item.strArea}</Text>
                <Text style={styles.mealInstructions}>{item.strInstructions}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
           <Text style={styles.buttonText}>Watch on Youtube</Text>
            </TouchableOpacity>
        </View>



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