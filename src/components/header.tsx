import { StyleSheet, Text, View } from "react-native";



const Header=()=>{
    return (
    <View style={styles.header}>
    
    <Text style={styles.headerText}>Your Favourite Movies</Text>
    </View>
    )
}
export default Header;

const styles=StyleSheet.create({
    header:{
        backgroundColor:"#000",
        padding:10
    },
    headerText:{
        color:"#fff",
        textAlign:"center",
        fontSize:16
    }
})