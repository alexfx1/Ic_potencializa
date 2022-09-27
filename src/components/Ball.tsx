import React, {useState} from 'react'
import {View, Animated, PanResponder, StyleSheet} from 'react-native'


export function Ball() {
    const pan = useState(new Animated.ValueXY())[0]
    const translateX = Animated.diffClamp(pan.x, 0, -5);
    const translateY = Animated.diffClamp(pan.y, 0, -5);

    const panResponder = useState(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gestureState) => {
                pan.setValue({x: gestureState.dx, y: gestureState.dy});
              },
            onPanResponderGrant: () => {
                pan.setOffset({
                  x: pan.x._value,
                  y: pan.y._value
                });
            },
            onPanResponderRelease: () => {
                pan.flattenOffset()
            }
        })
    )[0]

    const styles = StyleSheet.create({
        circle: {
          height: 55,
          width: 55,
          backgroundColor: "red",
          borderRadius: 50
        }
      });

    return ( 
        <View pointerEvents='auto' style= {{flex:1,justifyContent: 'center',alignItems: 'center', top: -350, left: 10}}>
            <Animated.View
                style={[styles.circle,{
                    transform:[{translateX},{translateY}]
                },pan.getLayout()]}
                {...panResponder.panHandlers}
            />
        </View>
    )
}
