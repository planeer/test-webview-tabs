import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WebViewScreen} from "./WebViewScreen";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home">
        {(props) => (
          <WebViewScreen
            {...props}
            test={"Home"}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Settings">
        {(props) => (
          <WebViewScreen
            {...props}
            test={"Settings"}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
