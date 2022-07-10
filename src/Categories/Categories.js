import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';
import config from '../../config';
import CategoryCard from '../Components/CategoryCard';
import styles from './Categories.style';
import useFetch from '../hooks/useFetch/useFetch';
const Categories = ({ navigation }) => {
 const {data} = useFetch(config.API_MAIN_URL);

    const handleClick = category => {
        console.log("hello");
        navigation.navigate("Meals", {category});
    };

    const renderCategories = ({ item }) =>
        <CategoryCard onSelect={() => handleClick(item.strCategory)} data={item} />

 

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={(item, _index) => item.idCategory}
                data={data.categories}
                renderItem={renderCategories}
            />
        </SafeAreaView>
    );
};


export default Categories;