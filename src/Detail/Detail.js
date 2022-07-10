import React, {useState} from 'react';
import { View, Text, SafeAreaView } from 'react-native';


const Detail = () => {
    const [text, setText] = useState("Koray");

    return (
        <SafeAreaView>
            <Text>Hello {text}</Text>
        </SafeAreaView>
    );
};


export default Detail;