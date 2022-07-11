import { Dimensions, StyleSheet } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    flatContainer: { alignItems: "center", marginVertical: 10,   width: deviceSize.width,  },
    image: {
        resizeMode: "cover",
        width: deviceSize.width,
        height:deviceSize.height / 3,
    },
    textContainer: {
        padding: 5,
        width: deviceSize.width, 
    },
    mealTitle: {
        fontWeight: 'bold',
        fontSize: 23,
        color:"darkred",
    },
    mealArea:{
        color:"darkred",
        fontSize:17,
        borderBottomWidth:1,
        borderColor:"#c5c5c5",
        paddingBottom:5
    },
    mealInstructions:{
        paddingVertical:5
    },
    button:{
        width:deviceSize.width / 1.05,
        alignItems:"center",
        paddingVertical:5,
        marginBottom:20,
        backgroundColor:"#ff0000",
        borderRadius:5
    },
    buttonText:{
        color:"white"
    }
});