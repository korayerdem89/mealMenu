import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import styles from './Detail.style';
import useFetch
    from '../hooks/useFetch/useFetch';
import config from '../../config';
import DetailCard from '../Components/DetailCard';
import * as Linking from 'expo-linking';
const Detail = ({ route, navigation }) => {
    const { meal } = route.params;
    const { data } = useFetch(`${config.API_DETAIL_URL}${meal}`);
   
    function handleLinking(url) {
        console.log(url);
        Linking.openURL(url);
    }
    const renderCategory = ({ item }) =>
        <DetailCard data={item} onLink={() => handleLinking(item.strYoutube)} />



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