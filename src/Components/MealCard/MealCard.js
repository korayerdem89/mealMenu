import React from 'react';
import { TouchableWithoutFeedback, Text, Image, View } from 'react-native';
import styles from './MealCard.style';

const MealCard = ({ data, onSelect }) => {
return (
        <TouchableWithoutFeedback  onPress={onSelect}>
            <View style={styles.flatContainer}>
            <Image style={styles.image} source={{ uri: data.strMealThumb }} />
    <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.mealText}>{data.strMeal}</Text>
    </View>
            </View>
 
        </TouchableWithoutFeedback>
    )
};


export default MealCard;


 