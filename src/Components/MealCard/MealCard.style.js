import { Dimensions, StyleSheet } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    flatContainer: { alignItems: "center", marginVertical: 10 },
    image: {
        height: deviceSize.height / 5.2,
        resizeMode: "cover",
        width: deviceSize.width / 1.05,
        borderRadius: 10
    },
    textContainer: {
        position: "absolute",
        top: 86.3,
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: 5,
        width: deviceSize.width / 1.05,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems:"flex-end"
    },
    mealText: {
        color: "white",
        fontWeight: '500',
        fontSize: 20,
        marginRight:5
    }
});