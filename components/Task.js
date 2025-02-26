import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Task({ text }) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'pink',
        opacity: 0.3,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circle: {
        width: 12,
        height: 12,
        borderColor: '#FF69B4',
        borderRadius: 5,
        borderWidth: 2,
    },
});
