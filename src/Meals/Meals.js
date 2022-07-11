import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './Meals.style';
import useFetch
    from '../hooks/useFetch/useFetch';
import config from '../../config';
const Meals = ({ route }) => {
    const { category } = route.params;
    const { data } = useFetch(`${config.API_MEALS_URL}${category}`);

    const renderCategory = ({ item }) =>
        <View style={styles.flatContainer}>
            <Image style={styles.image} source={{ uri: item.strMealThumb }} />
            <View style={styles.textContainer}>
                <Text numberOfLines={1} style={styles.mealText}>{item.strMeal}</Text>
            </View>
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


export default Meals;