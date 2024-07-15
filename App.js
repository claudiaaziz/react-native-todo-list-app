import { StyleSheet, View } from 'react-native';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { useState } from 'react';

export default function App() {
    const [taskListItems, setTaskListItems] = useState([]);

    return (
        <View style={styles.app}>
            <TaskList
                taskListItems={taskListItems}
                setTaskListItems={setTaskListItems}
            />
            <AddTask setTaskListItems={setTaskListItems} />
        </View>
    );
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#E9EAED',
    },
});
