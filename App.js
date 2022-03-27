import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Shopping from './src/ShoppingApp';
import store from './src/store/index';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Shopping/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
