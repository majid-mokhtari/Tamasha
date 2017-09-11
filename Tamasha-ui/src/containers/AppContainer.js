import React, { Component } from 'react'
import {
    View, 
    Text,
    StyleSheet
} from 'react-native'
import List from './../components/List'
import Slider from './../components/Slider'
import Header from './../components/Header'
import SideMenu from 'react-native-side-menu'
import Menu from './../components/Menu'

class AppContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    updateMenu(isOpen){
        this.setState({isOpen})
    }

    render(){
        return (
            <View style={styles.conntainer} >
                <SideMenu
                    menu={<Menu />}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                >
                    <Header toggle={this.toggle.bind(this)} />
                    <Slider />
                    <List />
                </SideMenu>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conntainer: {
        height: '100%',
        backgroundColor: 'black'
    }
})
export default AppContainer;