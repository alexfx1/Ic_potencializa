import { StyleSheet, View, Text, useWindowDimensions, Dimensions } from "react-native";
import { Ball } from "../components/Ball";
import { BallPan } from "../components/BallPan";
import { Base } from "./Base";


export function Screen() {
    const window = useWindowDimensions()

    const screenConfig = StyleSheet.create({
        label: {
          textAlign: "center",
          justifyContent: "center",
          marginBottom: 10,
          fontSize: 60,
        },
        container: {
          flex: 1,
          width: 50,
          height: 50,
          padding: 100,
          maxWidth: '95%',
          minWidth: 300
        },
        imageContainer: {
          flex: 1,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').width,
          maxWidth: '95%',
          minWidth: 300,
          overflow: 'hidden',
          borderRadius: Dimensions.get('window').width * 0.5 / 2,
        },
      });

    return(
        <View style={screenConfig.imageContainer}>
            <Text style={screenConfig.label}>1</Text>
            <View></View>
            <Base/>
            <BallPan/>
        </View>
    )
}