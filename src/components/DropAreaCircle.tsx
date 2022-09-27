import React, {useState} from 'react'
import {Animated, PanResponder, StyleSheet} from 'react-native'


export function DropAreaFunction() {
    const opacity = useState(new Animated.Value(1))[0]
    const pan = useState(new Animated.ValueXY())[0]

    function isDropArea(gesture: any){
        return gesture.moveY < styles.dropCircle
    }

    const panResponder = PanResponder.create({
        onPanResponderRelease: (gesture) => {
            if(isDropArea(gesture)) {
                Animated.timing(opacity,{
                    toValue: 0, duration: 1000,
                    useNativeDriver: false
                }).start();
            } else {
                Animated.spring(pan,{
                    toValue: {x:0,y:0},
                    friction:5,
                    useNativeDriver: false,
                }).start()
            }
        }
    });

    const styles = StyleSheet.create({
        dropCircle: {
            height: 55,
            width: 55,
            borderRadius: 50
        }
    });

    return (
        <Animated.View
            style={[styles.dropCircle,pan.getLayout()]}
            {...panResponder.panHandlers}
        />
    );
}
