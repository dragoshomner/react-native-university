import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import RootNavigator from './src/navigator/RootNavigator';

const App = () => {
    // const isDarkMode = useColorScheme() === 'dark';

    // const backgroundStyle = {
    //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // };

    return (
        <Provider store={store}>
            <RootNavigator />
        </Provider>
    );
};

export default App;
