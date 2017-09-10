import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper'

class Slider extends Component {
    constructor(props){
        super(props)
        this.state = {
            imagesSlider: [
                require('./../images/1.jpg'),
                require('./../images/2.jpg'),
                require('./../images/3.jpg')
            ]
        }
    }

    _renderSlider(){
        const {imagesSlider} = this.state;
        return imagesSlider.map((item, i) => (
            <View key={i}>
                <Image style={styles.image} source={item}/>
            </View>
            )
        );
    }

    render(){
        return (
            <Swiper style={styles.wrapper} showsButtons={true}>
                {this._renderSlider()}
            </Swiper>
        )
    }
}

const {width} = Dimensions.get('window');

var styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    image: {
        width: width,
        height: '100%', 
        marginLeft: 5
    }
  })

  export default Slider;