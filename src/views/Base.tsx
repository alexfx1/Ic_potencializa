import { Animated, PanResponder, StyleSheet, View } from "react-native";


interface CircleProps {
    top?: number,
    left?: number,
    height?: number,
    width?: number,
    backgroundColor?: "#fff",
    borderColor?: "black",
    borderWidth?: number,
    borderRadius?: number
  }


const CircleBase = (props: CircleProps) =>{

    const base = StyleSheet.create({
        circle: {
            top: props.top,
            left: props.left,
            height: props.height,
            width: props.width,
            backgroundColor: "#fff",
            borderColor: "black",
            borderWidth: props.borderWidth,
            borderRadius: props.borderRadius
        },
    })
    
    const array = [base]
    
    console.log(array)
    return(<>{array.map(base => {base.circle})}</>)
}

export function Circle(){
    return(
    <View>
        <CircleBase top={10} left={10} height={60} width={60} backgroundColor={"#fff"} borderColor={"black"} borderWidth={5} borderRadius={50}/>
        <CircleBase top={10} left={10} height={60} width={60} backgroundColor={"#fff"} borderColor={"black"} borderWidth={5} borderRadius={50}/>
        <CircleBase top={10} left={10} height={60} width={60} backgroundColor={"#fff"} borderColor={"black"} borderWidth={5} borderRadius={50}/>
        <CircleBase top={10} left={10} height={60} width={60} backgroundColor={"#fff"} borderColor={"black"} borderWidth={5} borderRadius={50}/>
        <CircleBase top={10} left={10} height={60} width={60} backgroundColor={"#fff"} borderColor={"black"} borderWidth={5} borderRadius={50}/>
        <CircleBase top={10} left={10} height={60} width={60} backgroundColor={"#fff"} borderColor={"black"} borderWidth={5} borderRadius={50}/>
        <CircleBase top={10} left={10} height={60} width={60} backgroundColor={"#fff"} borderColor={"black"} borderWidth={5} borderRadius={50}/>
        <CircleBase top={10} left={10} height={60} width={60} backgroundColor={"#fff"} borderColor={"black"} borderWidth={5} borderRadius={50}/>
        <CircleBase top={10} left={10} height={60} width={60} backgroundColor={"#fff"} borderColor={"black"} borderWidth={5} borderRadius={50}/>
        <CircleBase top={10} left={10} height={60} width={60} backgroundColor={"#fff"} borderColor={"black"} borderWidth={5} borderRadius={50}/>
    </View>
    )
}




export function Base(){
    const base = StyleSheet.create({
        container: {
          flex: 0.5,
          padding: 6,
          marginHorizontal: -90,
          alignContent: "center"
        },
        circle1: {
            top: 10,
            left: 10,
            height: 60,
            width: 60,
            backgroundColor: "#fff",
            borderColor: "black",
            borderWidth: 5,
            borderRadius: 50
        },
        circle2: {
            top: 16,
            left: 10,
            height: 60,
            width: 60,
            backgroundColor: "#fff",
            borderColor: "black",
            borderWidth: 5,
            borderRadius: 50
        },
        circle3: {
            top: -110,
            left: 80,
            height: 60,
            width: 60,
            backgroundColor: "#fff",
            borderColor: "black",
            borderWidth: 5,
            borderRadius: 50
        },
        circle4: {
            top: -103,
            left: 80,
            height: 60,
            width: 60,
            backgroundColor: "#fff",
            borderColor: "black",
            borderWidth: 5,
            borderRadius: 50
        },
        circle5: {
            top: -230,
            left: 150,
            height: 60,
            width: 60,
            backgroundColor: "#fff",
            borderColor: "black",
            borderWidth: 5,
            borderRadius: 50
        },
        circle6: {
            top: -223,
            left: 150,
            height: 60,
            width: 60,
            backgroundColor: "#fff",
            borderColor: "black",
            borderWidth: 5,
            borderRadius: 50
        },
        circle7: {
            top: -350,
            left: 219,
            height: 60,
            width: 60,
            backgroundColor: "#fff",
            borderColor: "black",
            borderWidth: 5,
            borderRadius: 50
        },
        circle8: {
            top: -343,
            left: 219,
            height: 60,
            width: 60,
            backgroundColor: "#fff",
            borderColor: "black",
            borderWidth: 5,
            borderRadius: 50
        },
        circle9: {
            top: -470,
            left: 288,
            height: 60,
            width: 60,
            backgroundColor: "#fff",
            borderColor: "black",
            borderWidth: 5,
            borderRadius: 50
        },
        circle10: {
            top: -463,
            left: 288,
            height: 60,
            width: 60,
            backgroundColor: "#fff",
            borderColor: "black",
            borderWidth: 5,
            borderRadius: 50
        },
    });

    return (
        <View style={[base.container,{flexDirection: "column", top: 280, justifyContent: "center"}]}>
            <View style={{ flex: 3.5, backgroundColor: "#F2F2F2", borderColor: "AFABAB", borderWidth: 2}} >
                <CircleBase top={10} left={10} height={60} width={60} backgroundColor={"#fff"} borderColor={"black"} borderWidth={5} borderRadius={50}/>
                <View style={[base.circle2]}/>
                <View style={[base.circle3]}/>
                <View style={[base.circle4]}/>
                <View style={[base.circle5]}/>
                <View style={[base.circle6]}/>
                <View style={[base.circle7]}/>
                <View style={[base.circle8]}/>
                <View style={[base.circle9]}/>
                <View style={[base.circle10]}/>
            </View>
        </View>
    )
}