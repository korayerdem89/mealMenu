import React, {useSate} from 'react';
import { View, Text, SafeAreaView } from 'react-native';


const Categories = () => {
    const [text, setText] = useState("Koray");

    return (
        <SafeAreaView>
            <Text>Hello {text}</Text>
        </SafeAreaView>
    );
};


export default Categories;