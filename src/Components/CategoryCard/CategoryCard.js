import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({ data }) => {
    const [text, setText] = useState("Koray");


    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: data.strCategoryThumb }} />
            <Text style={styles.categoryTitle}>{data.strCategory}</Text>
      </View>
    )
};


export default CategoryCard;