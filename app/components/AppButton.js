import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import colors from "../config/colors";

function Button({title}) {
    return (
       <View style={styles.button}>
           <Text style={styles.text}>{title}</Text>
       </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.orange,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
    },
    title:{
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
    }
})