import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's Tasks</Text>
            </View>

            <View style={styles.items}>
                <Task text='🦋' />
                <Task text='🧚🏻‍♀️' />
                <Task text='😇' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E9EAED',
        paddingLeft: 15,
        paddingRight: 15,
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 5,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30,
    },
});
