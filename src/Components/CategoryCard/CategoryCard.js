import React, { useState } from 'react';
import { TouchableWithoutFeedback, Text, Image, View } from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({ data }) => {
    const [text, setText] = useState("Koray");


    return (
        <TouchableWithoutFeedback >
            <View style={styles.container}>
            <Image style={styles.image} source={{ uri: data.strCategoryThumb }} />
            <Text style={styles.categoryTitle}>{data.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
};


export default CategoryCard;