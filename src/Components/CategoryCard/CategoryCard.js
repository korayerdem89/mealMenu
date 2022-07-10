import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({ data }) => {
    const [text, setText] = useState("Koray");


    return (
        <View style={styles.container}>
            <Text style={styles.categoryTitle}>{data.strCategory}</Text>
            <Image style={styles.image} source={{ uri: data.strCategoryThumb }} />
      </View>
    )
};


export default CategoryCard;