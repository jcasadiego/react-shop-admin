import React, { useState, useContext, createContext } from "react";
import Cookies from "js-cookie";
import endPoints from '@services/api/index';
import axios from "axios";

const AuthContext = createContext();

export function ProviderAuth({ children }){
    const auth = useProvideAuth();
    return (
        <>
            <AuthContext.Provider value={auth}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
}

function useProvideAuth() {
    const [ user, setUser ] = useState(null);

    const signIn = async (email, password) => {
        const options = {
            headers: {
                method: 'post',
                accept: '*/*',
                'Content-type': 'application/json',
            },
        };
        const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);

        if(access_token){
            const token = access_token.access_token;
            Cookies.set('token', access_token.access_token, { expires: 5 });
            const { data: user } = await axios.get(endPoints.auth.profile, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            setUser(user);
        };
    };

    return {
        user,
        signIn
    };
};