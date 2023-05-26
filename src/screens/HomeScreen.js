import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView,onPress, Pressable,TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import SearchFilter from '../components/SearchFilter';
import SearchBar from '../components/SearchBar';
import HScrollView from '../components/HScrollView';




const HomeScreen =({navigation}) => {
    const images=[
        require('../../assets/images/gifs/kimetsu_no_yaiba.webp'),
        require('../../assets/images/gifs/OPM.webp'),
        require('../../assets/images/gifs/nezuko.webp'),
        require('../../assets/images/gifs/7vienbirong.webp'),

    ]
    return ( <
        ScrollView style = { styles.container } >
                      
            <View style={{marginTop:20,width:"90%",alignSelf:"center"}}>
                <SearchBar /> 
            </View>     
            <View>
                

            </View>    
            <View style = {styles.header}>               
                <Text style ={styles.headerTitle}
                >
                    POPULAR MOVIES
                </Text>
                <ScrollView 
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    stickyHeaderHiddenOnScroll={false}
                    
                >   
                <TouchableOpacity  onPress={()=>navigation.navigate("movies")}>
                    <HScrollView      
                        imageUri={require('../../assets/images/demoslayder_bia.png')}
                        name="One Puch Man"
                    />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>navigation.navigate("movies")}>
                    <HScrollView 
                        imageUri={require('../../assets/images/shadow_bia.jpg')}
                        name="Shadow "
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("movies")}>
                    <HScrollView 
                        imageUri={require('../../assets/images/doremon_bia.jpg')}
                        name="Doraemon"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("movies")}>
                    <HScrollView 
                        imageUri={require('../../assets/images/naruto_bia.png')}
                        name="Naruto"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("movies")}>
                    <HScrollView 
                        imageUri={require('../../assets/images/demoslayder_bia.png')}
                        name="Demon slayder"
                    />
                </TouchableOpacity>
                
                
                
                </ScrollView>


            </View>
            <View style = {styles.header}>               
                <Text style ={styles.headerTitle}>
                    NEW MOVIES
                </Text>
                <ScrollView 
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                >   
                <TouchableOpacity  onPress={()=>navigation.navigate("movies")}>
                    <HScrollView      
                        imageUri={require('../../assets/images/one-punch-man-chap-223-3-1021.webp')}
                        name="One Puch Man"
                    />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>navigation.navigate("movies")}>
                    <HScrollView 
                        imageUri={require('../../assets/images/shadow_bia.jpg')}
                        name="Shadow "
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("movies")}>
                    <HScrollView 
                        imageUri={require('../../assets/images/doremon_bia.jpg')}
                        name="Doraemon"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("movies")}>
                    <HScrollView 
                        imageUri={require('../../assets/images/naruto_bia.png')}
                        name="Naruto"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("movies")}>
                    <HScrollView 
                        imageUri={require('../../assets/images/demoslayder_bia.png')}
                        name="Demon slayder"
                    />
                </TouchableOpacity>
                
                
                
                </ScrollView>


            </View>
            <View style = {styles.header}>               
                <Text style ={styles.headerTitle}>
                    YOU MAY LIKE
                </Text>
                <ScrollView 
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                >   
                <TouchableOpacity  onPress={()=>navigation.navigate("movies")}>
                    <HScrollView      
                        imageUri={require('../../assets/images/one-punch-man-chap-223-3-1021.webp')}
                        name="One Puch Man"
                    />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>navigation.navigate("movies")}>
                    <HScrollView 
                        imageUri={require('../../assets/images/shadow_bia.jpg')}
                        name="Shadow "
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("movies")}>
                    <HScrollView 
                        imageUri={require('../../assets/images/doremon_bia.jpg')}
                        name="Doraemon"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("movies")}>
                    <HScrollView 
                        imageUri={require('../../assets/images/naruto_bia.png')}
                        name="Naruto"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("movies")}>
                    <HScrollView 
                        imageUri={require('../../assets/images/demoslayder_bia.png')}
                        name="Demon slayder"
                    />
                </TouchableOpacity>
                
                
                
                </ScrollView>


            </View>

            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.BASIC_BACKGROUND, 
        paddingTop:20,       
    },
    header: {
        marginTop:20,
        marginLeft:10,
        paddingBottom:10,

    },
    headerTitle:{
        fontSize:24,
        marginBottom:10,
        fontWeight:"bold"

    },
    navContainer:{
        position:"absolute",
        alignItems:"center",
        bottom:50
    },
    navBar:{
        flexDirection:"row",
        backgroundColor:Colors.SILVER,
        width:"90%",
        justifyContent:"space-evenly",
        

    }


});
export default HomeScreen;