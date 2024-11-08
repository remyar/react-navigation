import React from 'react';
import ReactNavigationContext from './context';
import withNavigation from './withNavigation';
import { useNavigate } from "react-router-dom";

let pathHistory = [];

function NavigationProvider(props) {

    let navigate = useNavigate();

    window.onpopstate = () => {
        _goBack()
    }

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

    return <ReactNavigationContext.Provider value={{
        navigation: {
            push: _push.bind(this),
            goBack: _goBack.bind(this),
            getPath: _getPath.bind(this),
        }
    }}>
        {props.children}
    </ReactNavigationContext.Provider >;
}

export { NavigationProvider, withNavigation }
