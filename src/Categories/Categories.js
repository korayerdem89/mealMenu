import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';
import config from '../../config';


const Categories = () => {
    const [text, setText] = useState("Koray");
    const [data, setData] = useState([]);
    console.log(data.map(item => item["idCategory"]));

    const fetchApi = async () => {
        try {
            const { data: responseData } = await axios.get(config.API_MAIN_URL);
            setData(responseData.categories)
        } catch (error) {
            console.log(error.message);
        }
    }

    const renderCategories = ({ item }) =>
        <Text style={{ color: "black", backgroundColor: "#e0e0e0" }}>{item["strCategory"]}</Text>


    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                keyExtractor={(item, _index) => item.idCategory}
                data={data}
                renderItem={renderCategories}
            />
        </SafeAreaView>
    );
};


export default Categories;