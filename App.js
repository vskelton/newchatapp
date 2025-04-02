import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './components/Start';
import Chat from './components/Chat';

const Stack = createNativeStackNavigator();

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAhHigLeCbnJQTh_HBREjpY0SecUlArlj0",
    authDomain: "newchatapp-af94f.firebaseapp.com",
    projectId: "newchatapp-af94f",
    storageBucket: "newchatapp-af94f.firebasestorage.app",
    messagingSenderId: "976826037634",
    appId: "1:976826037634:web:811929dd6ab838b1f98b9b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
      >
        <Stack.Screen
          name="Start"
          component={Start}
        />
        <Stack.Screen
          name="Chat">
          {props => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
