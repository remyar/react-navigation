# react-navigation
Navigation provider for react

## Installation
This library was built with React >=18 and react-router-dom >=6.26.2 in mind. It *might* work on lower versions
as well, but the lib is developed for and tested on those versions.
```
npm install react-navigation --save
```

## Usage
The lib exposes the following methods:

### NavigationProvider
```javascript
import NavigationProvider from 'react-navigation';
...

 root.render(
        <React.Fragment>
            <NavigationProvider>
                 <App /> --> Your Application
            </NavigationProvider>
        </React.Fragment>
    );
``` 

### withNavigation
``` javascript
import { withNavigation } from 'react-navigation';
...

function YourReactComponent(props) {
    return <div>
        <MenuItem onClick={() => {
                props.navigation.push("/index.html");
            }}>
        </MenuItem>
        <MenuItem onClick={() => {
                props.navigation.goBack();
            }}>
        </MenuItem>
        <MenuItem onClick={() => {
                let actualPath = props.navigation.getPath();
            }}>
        </MenuItem>
        </div>
}

export default withNavigation(YourReactComponent);
``` 