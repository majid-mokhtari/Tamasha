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

    _renderSliderItems(){
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
                {this._renderSliderItems()}
            </Swiper>
        )
    }
}

const {width} = Dimensions.get('window');
var styles = StyleSheet.create({
    image: {
        width: width,
        height: '100%', 
        marginLeft: 5
    }
  })

  export default Slider;