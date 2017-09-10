import React, { Component } from 'react'
import {
    View, 
    Text,
    StyleSheet,
    FlatList,
    Image
} from 'react-native'

const shows_first = [
    {
        key: 1,
        name: 'Suits',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg'
    },
    {
        key: 2,
        name: 'Suits',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg'
    },
    {
        key: 3,
        name: 'Suits',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg'
    },
    {
        key: 4,
        name: 'Suits',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg'
    }
]

const shows_second = [
    {
        key: 1,
        name: 'Suits',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg'
    },
    {
        key: 2,
        name: 'Suits',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg'
    },
    {
        key: 3,
        name: 'Suits',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg'
    },
    {
        key: 4,
        name: 'Suits',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg'
    }
]

class List extends Component {

    _renderItem(item){
        return (
            <Image style={styles.image} source={{uri: item.image}} />
        )
    }

    render(){
        return (
            <View >
                <View >
                    <Text style={styles.text} >My List</Text>
                    <FlatList
                        horizontal
                        data={shows_first}
                        renderItem={({item}) => this._renderItem(item)}
                    />
                </View>
                <View >
                    <Text style={styles.text}>Top Picks For You</Text>
                    <FlatList
                        horizontal
                        data={shows_second}
                        renderItem={({item}) => this._renderItem(item)}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    },
    image: {
        width: 120, 
        height: 180, 
        marginLeft: 5
    }
})
export default List;