import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import axios from 'axios';
import config from '../../config';

const Categories = () => {
    const [text, setText] = useState("Koray");
    
    const fetchApi = async () => {
        try {
         const {data: responseData} = await axios.get(config.API_MAIN_URL);
         console.log(responseData);
        }catch(error) {
            console.log(error.message);
        }
    }
    
    useEffect(() => {
        fetchApi();
      }, []);
    
    return (
        <SafeAreaView>
            <Text>Hello {text}</Text>
        </SafeAreaView>
    );
};


export default Categories;