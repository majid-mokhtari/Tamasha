import React, {Component} from 'react'
import {
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
                require('./../images/dorehami.jpg'),
                require('./../images/Gashte-ershad-2.jpg'),
                require('./../images/abado-yekrooz.jpg')
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
            <Swiper 
                autoplay
                height={240}
                style={styles.wrapper} 
                showsButtons={true}
            >
                {this._renderSliderItems()}
            </Swiper>
        )
    }
}

const {width} = Dimensions.get('window');
var styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'black'
    },
    image: {
        width: width,
        height: "100%",
        marginLeft: 5
    }
  })

  export default Slider;