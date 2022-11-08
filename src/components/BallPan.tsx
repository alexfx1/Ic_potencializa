import {useState} from 'react'
import {View, Animated, PanResponder, StyleSheet, Dimensions} from 'react-native'


export function BallPan() {
    const pan = new Animated.ValueXY()
    const translateX = Animated.diffClamp(pan.x, 0, Dimensions.get('window').height - 55);
    const translateY = Animated.diffClamp(pan.y, 0, Dimensions.get('window').width - 55);
 
    const panResponder = PanResponder.create({    //Step 2
        onStartShouldSetPanResponder : () => true,
        onPanResponderMove           : Animated.event([null,{ //Step 3
            dx : pan.x,
            dy : pan.y
        }]),
        onPanResponderRelease           : (e, gesture) => {
            if(isDropZone(gesture)){ //Step 1
                useState({
                    showDraggable : false //Step 3
                });
            }else{
                Animated.spring(
                    pan,
                    {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false
                    }
                ).start();
            }
        } //Step 4
    });

    function isDropZone(gesture: any) {
        var dz: any = null;
        return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
    }

    function setDropZoneValues(event: any){    
        useState({
            dropZoneValues : event.nativeEvent.layout
        });
    }

    function renderDraggable(){                     // ---> CIRCULO
        var showDraggable: boolean = true
        if(showDraggable){
            return (
                <View style={styles.draggableContainer}>
                    <Animated.View 
                        {...panResponder.panHandlers}                       
                        style={[pan.getLayout(), styles.circle]}>     
                    </Animated.View>
                </View>
            );
        }
    }


    function render(){
        return (
            <View style={styles.mainContainer}>
                <View 
                    onLayout={setDropZoneValues.bind(Event.AT_TARGET)}     //pan??? 
                    style={styles.dropZone}>
                </View>
    
                {renderDraggable()}
            </View>
        );
    }


    let CIRCLE_RADIUS = 36;
    let Window = Dimensions.get('window');
    const styles = StyleSheet.create({
        circle: {
          height: 55,
          width: 55,
          backgroundColor: "red",
          borderRadius: 50,
        },
        draggableContainer: {
            position    : 'absolute',
            top         : Window.height/2 - CIRCLE_RADIUS,
            left        : Window.width/2 - CIRCLE_RADIUS,
        },
        mainContainer: {
            flex    : 1
        },
        dropZone    : {
            height         : 100,
            backgroundColor:'#2c3e50'
        },
      });

    //return ( 
    //    <View pointerEvents='auto' style= {{flex:1,justifyContent: 'center',alignItems: 'center', top: -350, left: 10}}>
    // </View>       <Animated.View
    //           style={[styles.circle,{
    //                transform:[{translateX},{translateY}]
    //            },pan.getLayout()]}
    //            {...panResponder.panHandlers}
    //        />
    //    </View>
    //)

    return(render())
}
