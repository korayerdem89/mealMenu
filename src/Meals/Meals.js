import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, View, Image } from 'react-native';
import styles from './Meals.style';
import useFetch
    from '../hooks/useFetch/useFetch';
import config from '../../config';
import MealCard from '../Components/MealCard/MealCard';
const Meals = ({ route, navigation }) => {
    const { category } = route.params;
    const { data } = useFetch(`${config.API_MEALS_URL}${category}`);

    const handleClick = meal => {
        navigation.navigate("Detail", {meal});
    };

    const renderCategory = ({ item }) =>
        <MealCard  data={item} onSelect={() => handleClick(item.idMeal)} />



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