import React from 'react';
import auth from '@react-native-firebase/auth';
import { AuthContextType, AuthUserType } from '../types/AuthUser.types';

export const AuthContext = React.createContext<AuthContextType | null>(null);

export const useAuthContext = () =>
    React.useContext(AuthContext) as AuthContextType;

type AuthProviderProps = {
    children?: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = props => {
    const [authUser, setAuthUser] = React.useState<AuthUserType | null>(null);

    React.useEffect(() => {
        auth().onAuthStateChanged(user => {
            setAuthUser({
                email: user?.email,
                name: user?.displayName,
                profilePhotoUrl: user?.photoURL,
            });
        });
    }, []);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
