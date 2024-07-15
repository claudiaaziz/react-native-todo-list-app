import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Task from './Task';

export default function TaskList({ taskListItems, setTaskListItems }) {
    const completeTask = (idx) => {
        let itemsCopy = [...taskListItems];
        itemsCopy.splice(idx, 1);
        setTaskListItems(itemsCopy);
    };

    return (
        <>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's Tasks</Text>
            </View>

            <View style={styles.items}>
                {taskListItems.map((text, idx) => (
                    <TouchableOpacity
                        onPress={() => completeTask(idx)}
                        key={idx}
                    >
                        <Task
                            text={text}
                            taskListItems={taskListItems}
                            setTaskListItems={setTaskListItems}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    tasksWrapper: {
        paddingHorizontal: 15,
        paddingTop: 80,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30,
        paddingHorizontal: 15,
    },
});
