import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WebViewScreen} from "./WebViewScreen";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Test1">
        {(props) => (
          <WebViewScreen
            {...props}
            url={"https://google.com/"}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Test2">
        {(props) => (
          <WebViewScreen
            {...props}
            url={"https://google.com/"}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Test3">
        {(props) => (
          <WebViewScreen
            {...props}
            url={"https://google.com/"}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Test4">
        {(props) => (
          <WebViewScreen
            {...props}
            url={"https://google.com/"}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
