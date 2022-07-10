import React, {useState} from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import styles from './Meals.style';

const Meals = ({route}) => {
    const {category} = route.params; 
   


    return (
        <SafeAreaView style={styles.container}>
            <Text>hi</Text>
            {/* <FlatList
                keyExtractor={(item, _index) => item.idCategory}
                data={data}
                renderItem={renderCategories}
            /> */}
        </SafeAreaView>
    );
};


export default Meals;