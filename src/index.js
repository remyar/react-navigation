import React, { createContext, useContext, useEffect } from 'react';
import { useNavigate } from "react-router";

const NavigationContext = createContext();

let pathHistory = [];

function NavigationProvider(props) {

    const navigate = useNavigate();

    function _push(_link, _state) {
        pathHistory.push({ link : _link , state : _state});
        navigate(_link, _state);
        window.history.pushState(_state, "state");
    }

    function _goBack() {
        pathHistory.pop();
        navigate(pathHistory[pathHistory.length - 1]?.link || "/" , pathHistory[pathHistory.length - 1]?.state);
        window.history.back();
    }

    function _getPath() {
        return ((pathHistory[pathHistory.length - 1]?.link > 0) ? pathHistory[pathHistory.length - 1]?.link.slice(-1) : "/");
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