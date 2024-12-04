import { StyleSheet, TextInput, View } from "react-native"



const Search=({search,setSearch}:{search:string,setSearch:(text:string)=>void})=>{
    return (
        <View style={styles.inputContainer} >
             <TextInput placeholder="Search Your Fav Movie" value={search} onChangeText={(text)=>setSearch(text)}/>   
        </View>
    )
}

export default Search;

const styles=StyleSheet.create({
    inputContainer:{
        borderColor:"#000",
        borderWidth:1,
        marginTop:20,
        marginHorizontal:20
    }
})