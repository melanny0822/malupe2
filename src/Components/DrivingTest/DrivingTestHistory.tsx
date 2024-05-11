import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import firebase from '../../../database/firebase';
import { stylesHome } from "../styles";

const DrivingTestHistory = () => {
    const [historial, setHistorial] = useState([]);

    useEffect(() => {
        const fetchHistorial = async () => {
            try {
                const historialSnapshot = await firebase.db.collection('drivingtest').get();
                const historyData = historialSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setHistorial(historyData);
            } catch (error) {
                console.error('Error fetching historial:', error);
            }
        };
        fetchHistorial();

        return () => {};
    }, []);

    return (
        <View style={stylesHome.container}>
            <Text style={stylesHome.title}>HISTORY DRIVING TEST</Text>
            <FlatList
                data={historial}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={stylesHome.itemContainer}>
                        <Text style={stylesHome.itemText}>Car: {item.car}</Text>
                        <Text style={stylesHome.itemText}>Date: {item.date}</Text>
                        <Text style={stylesHome.itemText}>Name: {item.name}</Text>
                        <Text style={stylesHome.itemText}>Surname: {item.surname}</Text>
                        <Text style={stylesHome.itemText}>DNI: {item.dni}</Text>
                        <Text style={stylesHome.itemText}>Cellphone: {item.cellphone}</Text>
                        
                    </View>
                )}
            />
           
        </View>
    );
};



export default DrivingTestHistory;
