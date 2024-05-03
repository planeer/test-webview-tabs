import {StyleSheet} from 'react-native';
import {MyTabs} from "./src/MyTabs";
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}
