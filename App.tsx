import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import RootNavigator from './src/navigator/RootNavigator';
import AuthProvider from './src/context/AuthContext';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

const App = () => {
    React.useEffect(() => {
        messaging().onMessage(async remoteMessage => {
            console.log(remoteMessage);
            let message_body = remoteMessage?.notification?.body;

            let message_title = remoteMessage.notification?.title;

            Alert.alert(message_title!, message_body);
        });
        messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log(remoteMessage);
            let message_body = remoteMessage?.notification?.body;

            let message_title = remoteMessage.notification?.title;

            Alert.alert(message_title!, message_body);
        });
    }, []);

    console.disableYellowBox = true;

    return (
        <AuthProvider>
            <Provider store={store}>
                <RootNavigator />
            </Provider>
        </AuthProvider>
    );
};

export default App;
