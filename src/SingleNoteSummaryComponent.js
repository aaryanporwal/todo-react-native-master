import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SingleNoteSummaryComponent = (props) => {
    return (
        <View backgroundColor = {randomBackground()} style = {styles.textViewStyle}> 
            <Text style={styles.textProperties}>{props.MyNoteText}</Text>                  
        </View>
    );
}

const randomBackground = () => {
    //Variables below will return int 
    var red = Math.floor(Math.random(0.4) * 255) 
    var green = Math.floor(Math.random(0.6) * 255)
    var blue = Math.floor(Math.random(0.4) * 255)

    //The above ints need to be put inside strings thats why we use backticks ` ` for string and ${} for other data type

    return ` rgb(${red}, ${green}, ${blue}) `
}

const styles = StyleSheet.create({

    viewProperties : { //example here
        marginTop: 80
        },
    
    textProperties: {
        fontSize: 20
        },
    textViewStyle : {
        height: 150,
        width: 150,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },   
    dateViewStyle :{

    }
});

export default SingleNoteSummaryComponent;