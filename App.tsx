import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import RootNavigator from './src/navigator/RootNavigator';
import AuthProvider from './src/context/AuthContext';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import { errorHandler } from './src/utils/errorHandler';

const App = () => {
    React.useEffect(() => {
        messaging().onMessage(async remoteMessage => {
            Alert.alert(
                remoteMessage?.notification?.body!,
                remoteMessage.notification?.title,
            );
        });
        messaging().setBackgroundMessageHandler(async remoteMessage => {
            Alert.alert(
                remoteMessage?.notification?.body!,
                remoteMessage.notification?.title,
            );
        });
    }, []);

    setJSExceptionHandler(errorHandler, true);

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
