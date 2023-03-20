import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './src/componentes/Logo/';
import Form from './src/componentes/Form/';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo></Logo>
        <Form></Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09c',
    paddingTop: 80,
    },
});
