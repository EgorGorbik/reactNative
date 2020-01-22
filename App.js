import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './src/components/uikit/Header.js'


const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
         <View style={styles.resultContainer}>
            <Text style={styles.resultText}>0</Text>
         </View>

         <View style={styles.inputContainer}>

         </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    resultContainer: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: '#1E1240'
    },
    inputContainer: {
        flex: 8,
        backgroundColor: '#3D0075'
    },
    resultText: {
        color: 'white',
        fontSize: 80,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'right'
    }
})




export default App;
