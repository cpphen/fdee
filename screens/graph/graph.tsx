import React, { useEffect } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const Graph = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const platform = Platform.OS;
    console.log('Currnt OS: ', platform);
  }, [])

  return(
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: 'blue',
          }}>
            <Text style={styles.text}>Hiii React Native</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    height: 200
  }
}

export default Graph;
