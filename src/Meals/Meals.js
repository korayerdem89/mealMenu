import React, {useSate} from 'react';
import { View, Text, SafeAreaView } from 'react-native';


const Meals = () => {
    const [text, setText] = useState("Koray");

    return (
        <SafeAreaView>
            <Text>Hello {text}</Text>
        </SafeAreaView>
    );
};


export default Meals;