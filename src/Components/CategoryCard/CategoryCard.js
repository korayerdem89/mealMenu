import React, {useState} from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({data}) => {
    const [text, setText] = useState("Koray");

    return (
      <View style={styles.container}>
        <Text style={styles.categoryTitle}>{data["strCategory"]}</Text>
      </View>
    )
};


export default CategoryCard;