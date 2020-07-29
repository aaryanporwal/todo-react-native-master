import React from 'react';
import {Text, FlatList, View, StyleSheet } from 'react-native';


const NotesScreenComponent = () => {

    var data = [
        {"date" : "27-07-2020", "text":"🚀I started learning react", 'key': '1'},
        {"date" : "28-07-2020", "text":"Second day of learning react", 'key': '2'},
        {"date" : "29-07-2020", "text":"Third day of learning react", 'key': '3'},
        {"date" : "30-07-2020", "text":"Fourth day of learning react", 'key': '4'},
        {"date" : "01-08-2020", "text":"Fifth day of learning react", 'key': '5'},
        {"date" : "02-08-2020", "text":"Sixth day of learning react", 'key': '6'},
        {"date" : "03-08-2020", "text":"Seventh day of learning react", 'key': '7'},
        {"date" : "04-08-2020", "text":"Eigth day of learning react", 'key': '8'},
        {"date" : "05-08-2020", "text":"Ninth day of learning react", 'key': '8'},

    ]

    //To write js code inside jsx, we need to enclose js code in {}
    //View is like div 
    return <View style={styles.viewProperties}> 
            <FlatList       
                showsVerticalScrollIndicator = {false}
                data = {data}
                keyExtractor={(item) => {
                        return item.date

                    }
                }
                numColumns = {2}
                renderItem = {({item}) => {
                    return (
                    <View backgroundColor = {randomBackground()} style = {styles.textViewStyle}> 
                        <Text style={styles.dateViewStyle}>{item.date}</Text>  
                        <Text style={styles.textProperties}>{item.text}</Text>                  
                    </View>
                    );
                 
                }
                 
                 } 

                />
            </View>
            
         
     
}

const styles = StyleSheet.create({
    //quotes are not mandatory below

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

const randomBackground = () => {
    //Variables below will return int 
    var red = Math.floor(Math.random(0.4) * 255) 
    var green = Math.floor(Math.random(0.6) * 255)
    var blue = Math.floor(Math.random(0.4) * 255)

    //The above ints need to be put inside strings thats why we use backticks ` ` for string and ${} for other data type

    return ` rgb(${red}, ${green}, ${blue}) `
}

export default NotesScreenComponent;

//If we have to write js code in jsx we enclose it in curly braces