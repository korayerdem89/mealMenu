import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';
import config from '../../config';
import CategoryCard from '../Components/CategoryCard';
import styles from './Categories.style';
const Categories = () => {
    const [text, setText] = useState("Koray");
    const [data, setData] = useState([]);

    const fetchApi = async () => {
        try {
            const { data: responseData } = await axios.get(config.API_MAIN_URL);
            setData(responseData.categories)
        } catch (error) {
            console.log(error.message);
        }
    }

    const renderCategories = ({ item }) =>
        <CategoryCard data={item} />


    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={(item, _index) => item.idCategory}
                data={data}
                renderItem={renderCategories}
            />
        </SafeAreaView>
    );
};


export default Categories;