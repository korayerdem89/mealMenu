import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import styles from './Meals.style';
import useFetch
    from '../hooks/useFetch/useFetch';
import config from '../../config';
const Meals = ({ route }) => {
    const { category } = route.params;
    const { data } = useFetch(`${config.API_MEALS_URL}${category}`);
    const renderCategory = ({ item }) =>
    <Text>{item.strMeal}</Text>

    return (
        <SafeAreaView style={styles.container}>
            <Text>hi</Text>
            <FlatList
                keyExtractor={(item, _index) => item.idMeal}
                data={data.meals}
                renderItem={renderCategory}
            />
        </SafeAreaView>
    );
};


export default Meals;