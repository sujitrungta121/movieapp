import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import {MovieProps} from "../../App"
// import AsyncStorage from "@react-native-async-storage/async-storage";

interface CardProps{
   movie:MovieProps
}

const Cards:React.FC<CardProps>=({movie})=>{


    const [favMovies,setFavMovies]=useState<MovieProps[] | undefined>()

    // I have tried setting up the async storage but its giving compatibility error thats why i have commented teh e functionality code which can you check and verify the functionality. 
    // i am pasign the error :  Could not determine the dependencies of task ':react-native-async-storage_async-storage:bundleLibCompileToJarDebug'.> Could not create task ':react-native-async-storage_async-storage:compileDebugJavaWithJavac'.> Failed to calculate the value of task ':react-native-async-storage_async-storage:compileDebugJavaWithJavac' property 'javaCompiler'.> Toolchain installation '/usr/lib/jvm/java-17-openjdk-amd64' does not provide the required capabilities: [JAVA_COMPILER]

    // useEffect(()=>{
    //     const fetchFavMovies=async()=>{
    //         const myMovies=await AsyncStorage.getItem("favMovies");
    //         const parsedData=JSON.parse(myMovies);
    //         setFavMovies(parsedData)
    //     }
    //     fetchFavMovies()
        
    // })

    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

//    const handleSave= async (item)=>{

    // code for the saving the fav movie in the asyncstorage
    // const exist=favMovies?.find(mov=>mov?.id===item?.id)
    // if(exist){
    //     Alert.alert("Movie already added to fav")
    // }
    // else {
    //     const newMovie=[{...favMovies,item}];
    //     await AsyncStorage.setItem("saved",newMovie)
    // Alert.alert("Movie Saved")
    // }

   


    
//    }

const handleSave=()=>{
    console.log("saved button clicked")
    Alert.alert("Movie Saved for")
}

    return (
    <View style={styles.card}>
        <Image source={{uri:posterUrl}} style={styles.img}/>
        <View style={styles.movieDetails}>
        <Text style={styles.title}>Title: <Text style={styles.value}>{movie?.title}</Text></Text>
        <Text style={styles.title}>Release Date : <Text style={styles.value}>{movie?.release_date}</Text></Text>
        <Pressable style={styles.save} onPress={handleSave}>
            <Text style={styles.saveText}>Save</Text>
        </Pressable>
        </View>
    </View>
    )
}
export default Cards;

const styles=StyleSheet.create({
    card:{
        display:"flex",
        borderWidth:1,
        borderColor:"#000",
        // padding:20
        // /marginTop:20
        
    },
    img:{
        width:"100%",
        height:200,
        objectFit:"cover"
    },
    save:{
        backgroundColor:"green",
        width:"50%",
        borderRadius:100,
        padding:10
    },
    saveText:{
        color:"#fff",
        textAlign:"center"
    },
    movieDetails:
    {
        display:'flex',
        rowGap:10,
        padding:10,
    },
    title:{
        fontSize:20,
        fontWeight:"600"
    },
    value:{
        fontSize:16,
        fontWeight:"500"
    }
})