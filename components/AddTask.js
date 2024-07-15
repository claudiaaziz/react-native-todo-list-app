import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    View,
    Keyboard,
} from 'react-native';

export default function AddTask({ setTaskListItems }) {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        Keyboard.dismiss()
        setTaskListItems((prev) => [...prev, task]);
        setTask('');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.addTask}
        >
            <TextInput
                style={styles.input}
                placeholder='todo'
                value={task}
                onChangeText={(text) => setTask(text)}
            />
            <TouchableOpacity onPress={handleAddTask}>
                <View style={styles.addWrapper}>
                    <Text style={styles.add}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    addTask: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    input: {
        padding: 15,
        width: 250,
        backgroundColor: 'white',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addWrapper: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    add: {
        fontSize: 22,
    },
});
