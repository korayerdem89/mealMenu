import React from 'react';
import { TouchableWithoutFeedback, Text, Image, View } from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({ data, onSelect }) => {
return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
            <Image style={styles.image} source={{ uri: data.strCategoryThumb }} />
            <Text style={styles.categoryTitle}>{data.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
};


export default CategoryCard;