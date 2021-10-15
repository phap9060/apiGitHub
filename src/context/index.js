import React,{useState,createContext} from 'react'

export const context = createContext();

export const ContextProvider = props => {
    const [search,SetSearch] = useState()
    const [userData,SetUserData] = useState({});
    const [repos,SetRepos] = useState({});
    const [followers,SetFollowers] = useState({});
    const [following,SetFollowing] = useState({});
    const [loggedUser, setLoggedUser ] = useState(true);
    const [hasError, setHasError] = useState(false);
    return(
        <context.Provider value={{
            search,
            userData,
            repos,
            followers,
            following,
            loggedUser,
            hasError,
            SetSearch,
            SetUserData,
            SetRepos,
            SetFollowers,
            SetFollowing,
            setLoggedUser,
            setHasError
        }} >
            {props.children}

        </context.Provider>

    )
}