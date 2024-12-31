import React, { createContext, useContext } from 'react';
import { useNavigate } from "react-router-dom";

const NavigationContext = createContext();

function NavigationProvider(props) {

    const navigate = useNavigate();

    return <NavigationContext.Provider value={{
        push: _push.bind(this),
        goBack: _goBack.bind(this),
        getPath: _getPath.bind(this),
    }} >
        {props.children}
    </NavigationContext.Provider>;
};

function useNavigation() {
    return useContext(NavigationContext)
}

export { NavigationProvider, useNavigation };