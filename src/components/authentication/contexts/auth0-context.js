import React, {createContext, useContext, useEffect, useState} from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';
import css from "../Authentication.module.css"
import Spinner from '../img/Spinner.svg'

export const Auth0Context = createContext('');
export const useAuth0 = () => useContext(Auth0Context);

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
                // redirect_uri: window.location.origin,       // to "https://antonrufus.github.io"
                redirect_uri: window.location.href = 'https://antonrufus.github.io/multi-apps-project/#/authentication/home',   // to auth app's homepage
                // redirect_uri: window.location.href = 'https://antonrufus.github.io/multi-apps-project/',   // to main homepage
            });

            setAuth0Client(auth0);

            // handle redirect when user comes back
            if (
                window.location.search.includes('code=') &&
                window.location.search.includes('state=')
            ) {
                try {
                    await auth0.handleRedirectCallback();
                } catch (err) {
                    alert(err);
                }

                window.location.replace(window.location.pathname + '#/authentication/home');         //!!!!!!
            }

            // is a user authenticated
            const isAuthenticated = await auth0.isAuthenticated();
            setIsAuthenticated(isAuthenticated);                                            //!!!!!! line #52

            // go grab the user
            if (isAuthenticated) {
                const user = await auth0.getUser();
                setUser(user);
                // setIsAuthenticated(isAuthenticated);                                     //!!!!!! line #45
            }

            setIsLoading(false);
        }
    }, []);

    if (isLoading) return <div className={css.spinner}><img src={Spinner} alt=""/>{/*<p>Loading...</p>*/}</div>;

    return (
        <Auth0Context.Provider
            value={{
                isAuthenticated, user, isLoading,
                login: (...p) => auth0Client.loginWithRedirect(...p),
                logout: (...p) => auth0Client.logout(...p),
                getToken: (...p) => auth0Client.getTokenSilently(...p),
            }}
        >
            {children}
        </Auth0Context.Provider>
    );
}
