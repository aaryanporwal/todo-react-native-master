import React from 'react';
import {Text, FlatList, View } from 'react-native';


const NotesScreenComponent = () => {

    var data = [
        {"date" : "27 July 2020", "text":"I started learning React"},
        {"date" : "28 July 2020", "text":"Second day of learning React"},
        {"date" : "29 Jul"}

    ]

    //To write js code inside jsx, we need to enclose js code in {}

    return <View>
                 <FlatList 
                 data = {data}
                 renderItem = {({item}) => <Text>{item.text}</Text>}
                          />
            </View>
            
         
     
}

export default NotesScreenComponent;