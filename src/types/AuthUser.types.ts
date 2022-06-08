export type AuthUserType = {
    email?: string | null;
    name?: string | null;
};

export type AuthContextType = {
    authUser: AuthUserType | null;
    setAuthUser: (user: AuthUserType | null) => void;
};
