import React,{
    StyleSheet,
    View,
    Text,
    PanResponder,
    Animated,
    Dimensions
} from 'react-native';
import { Component } from "react";

export default class Viewport extends Component{
    
    constructor(props: any){
        super(props);
    
        PanResponder.create({    //Step 2
            onStartShouldSetPanResponder : () => true,
            onPanResponderMove           : Animated.event([null,{ //Step 3
                dx : this.statePan().x,
                dy : this.statePan().y
            }]),
            onPanResponderRelease           : (e, gesture) => {
                if(this.isDropZone(gesture)){ //Step 1
                    this.setState({
                        showDraggable : false //Step 3
                    });
                }else{
                    Animated.spring(
                        this.statePan(),
                        {
                            toValue: { x: 0, y: 0 },
                            useNativeDriver: false
                        }
                    ).start();
                }
            } //Step 4
        });
    }

    state() {
        showDraggable   : true     //Step 1
        dropZoneValues  : null
        pan     : new Animated.ValueXY()   //Step 1
    }

    statePan(){
        let pan: any
        return pan = new Animated.ValueXY()
    }

    isDropZone(gesture: any){   //Step 2
        var dz = this.state.dropZoneValues;
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
    }

    setDropZoneValues(event: any){      //Step 1
        this.setState({
            dropZoneValues : event.nativeEvent.layout
        });
    }

    renderDraggable(){
        if(this.state.showDraggable){
            return (
                <View style={styles.draggableContainer}>
                    <Animated.View 
                        {...this.panResponder.panHandlers}                       //Step 1
                        style={[this.state.pan.getLayout(), styles.circle]}>     //Step 2
                        <Text style={styles.text}>Drag me!</Text>
                    </Animated.View>
                </View>
            );
        }
    }

    render(){
        return (
            <View style={styles.mainContainer}>
                <View 
                    onLayout={this.setDropZoneValues.bind(this)}     //Step 2
                    style={styles.dropZone}>
                    <Text style={styles.text}>Drop me here!</Text>
                </View>
    
                {this.renderDraggable()}
            </View>
        );
    }
}

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
let styles = StyleSheet.create({
    mainContainer: {
        flex    : 1
    },
    dropZone    : {
        height         : 100,
        backgroundColor:'#2c3e50'
    },
    text        : {
        marginTop   : 25,
        marginLeft  : 5,
        marginRight : 5,
        textAlign   : 'center',
        color       : '#fff'
    },
    draggableContainer: {
        position    : 'absolute',
        top         : Window.height/2 - CIRCLE_RADIUS,
        left        : Window.width/2 - CIRCLE_RADIUS,
    },
    circle      : {
        backgroundColor     : '#1abc9c',
        width               : CIRCLE_RADIUS*2,
        height              : CIRCLE_RADIUS*2,
        borderRadius        : CIRCLE_RADIUS
    }
});