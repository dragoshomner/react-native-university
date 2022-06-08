import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import RootNavigator from './src/navigator/RootNavigator';
import AuthProvider from './src/context/AuthContext';

const App = () => {
    // const isDarkMode = useColorScheme() === 'dark';

    // const backgroundStyle = {
    //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // };
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
