import React from 'react';
import { TouchableWithoutFeedback, Text, Image, View, TouchableOpacity } from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({ data, onLink }) => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.flatContainer}>
                <Image style={styles.image} source={{ uri: data.strMealThumb }} />
                <View style={styles.textContainer}>
                    <Text style={styles.mealTitle}>{data.strMeal}</Text>
                    <Text style={styles.mealArea}>{data.strArea}</Text>
                    <Text style={styles.mealInstructions}>{data.strInstructions}</Text>
                </View>
                <TouchableOpacity onPress={onLink} style={styles.button}>
                    <Text style={styles.buttonText}>Watch on Youtube</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback >
    )
};


export default DetailCard;


