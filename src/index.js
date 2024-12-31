import React, { createContext, useContext } from 'react';
import { useNavigate } from "react-router-dom";

const NavigationContext = createContext();

function NavigationProvider(props) {

    const navigate = useNavigate();

    function _push(_link, _state) {
        pathHistory.push(_link);
        navigate(_link, _state);
        window.history.pushState(_state, "state");
    }

    function _goBack() {
        pathHistory.pop();
        navigate(-1);
    }

    function _getPath() {
        return window.history?.location?.pathname || ((pathHistory.length > 0) ? pathHistory.slice(-1) : "/");
    }
    
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