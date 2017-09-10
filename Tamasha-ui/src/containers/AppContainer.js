import React, { Component } from 'react'
import {
    View, 
    Text,
    StyleSheet
} from 'react-native'
import List from './../components/List'
import Slider from './../components/Slider'

class AppContainer extends Component {

    render(){
        return (
            <View style={styles.conntainer} >
                <Slider />
                <List />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conntainer: {
        backgroundColor: 'black',
        height: '100%'
    }
})
export default AppContainer;