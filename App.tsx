import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableOpacity, Pressable, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const onButtonPress = () => Alert.alert("You pressed the button")


export default function App() {
  return (
    <SafeAreaProvider >
      <SafeAreaView >
        <Pressable onPress={onButtonPress}>

          <Text>Touch the button</Text>
        </Pressable>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

