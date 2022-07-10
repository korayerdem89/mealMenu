import { Dimensions, StyleSheet } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#eceef0",
        marginVertical: 5,
        marginHorizontal:4,
        borderWidth: 1,
        borderColor: "#c3c3c3",
        borderTopLeftRadius: 35,
        borderBottomLeftRadius: 35,
        alignItems:"center"
    },
    image: { width: 70, height: 60, resizeMode: "contain", marginLeft: 5 },
    categoryTitle: {marginLeft:10, fontSize:16}
});