import { StyleSheet, View, Text } from "react-native";
import { Ball } from "../components/Ball";
import { Base } from "./Base";

export function Screen() {
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
          padding: 100
        }
      });

    return(
        <View style={screenConfig.container}>
            <Text style={screenConfig.label}>1</Text>
            <Base/>
            <Ball/>
        </View>
    )
}