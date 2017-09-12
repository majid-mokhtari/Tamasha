import React, {Component} from 'react'
import {
    Navigator
} from 'react-native'

import AppContainer from './containers/AppContainer'
import Search from './components/Search'

class IndexApp extends Component {

    _renderScene(route, navigator){
        var navigator = {navigator};
        switch(route.ident){
            case 'App':
                return (
                    <AppContainer />
                )
            case 'Search':
                return (
                    <Search />
                )
        }
    }

    render(){
        return (
            <Navigator
                initialRoute={{indent: 'Search'}}
                renderScene={this._renderScene}
            />
        )
    }

}

export default IndexApp