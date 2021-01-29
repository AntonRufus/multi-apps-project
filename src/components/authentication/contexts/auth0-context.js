import React, {createContext, useEffect, useState} from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

export const Auth0Context = createContext('');

export function Auth0Provider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [auth0Client, setAuth0Client] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        initAuth0();

        async function initAuth0() {
            const auth0 = await createAuth0Client({
                domain: 'antonrufus.eu.auth0.com',
                client_id: 'GDDE7o0r59yoAoX9nufbSWDr63hNEotG',
            });

            setAuth0Client(auth0);

            // is a user authenticated
            const isAuthenticated = await auth0.isAuthenticated();

            // go grab the user
            if (isAuthenticated) {
                const user = await auth0.getUser();
                setUser(user);
                console.log(user);
            }

            setIsLoading(false);
        }
    }, []);

    return (
        <Auth0Context.Provider value={{isAuthenticated, user, isLoading,}}>
            {children}
        </Auth0Context.Provider>
    );
}
