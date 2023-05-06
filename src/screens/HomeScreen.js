import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView,onPress, Pressable} from 'react-native';
import Colors from '../constants/Colors';
import SearchFilter from '../components/SearchFilter';
import SearchBar from '../components/SearchBar';
import HScrollView from '../components/HScrollView';



const HomeScreen =({navigation}) => {
    return ( <
        ScrollView style = { styles.container } >
            <StatusBar 
                style = "auto" 
                translucent = {false}
                backgroundColor={Colors.WHITE}
            / >            
            <View style={{marginTop:20,marginLeft:10}}>
                <SearchBar /> 
            </View>         
            <View style = {styles.header}>               
                <Text style ={styles.headerTitle}
                    onPress={()=>navigation.navigate("movies")}
                >
                    POPULAR MOVIES
                </Text>
                <ScrollView 
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                >
                    <HScrollView 
                        
                        imageUri={require('../../assets/images/one-punch-man-chap-223-3-1021.webp')}
                        name="One Puch Man"
                        
                    
                    />
                    <HScrollView 
                        imageUri={require('../../assets/images/shadow_bia.jpg')}
                        name="Shadow "
                    />
                    <HScrollView 
                        imageUri={require('../../assets/images/doremon_bia.jpg')}
                        name="Doraemon"
                    />
                    <HScrollView 
                        imageUri={require('../../assets/images/naruto_bia.png')}
                        name="Naruto"
                    />
                    <HScrollView 
                        imageUri={require('../../assets/images/demoslayder_bia.png')}
                        name="Demon slayder"
                    />
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
                    <HScrollView 
                        imageUri={require('../../assets/images/one-punch-man-chap-223-3-1021.webp')}
                        name="One Puch Man"
                    />
                    <HScrollView 
                        imageUri={require('../../assets/images/shadow_bia.jpg')}
                        name="Shadow "
                    />
                    <HScrollView 
                        imageUri={require('../../assets/images/doremon_bia.jpg')}
                        name="Doraemon"
                    />
                    <HScrollView 
                        imageUri={require('../../assets/images/naruto_bia.png')}
                        name="Naruto"
                    />
                    <HScrollView 
                        imageUri={require('../../assets/images/demoslayder_bia.png')}
                        name="Demon slayder"
                    />
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
                    <HScrollView 
                        imageUri={require('../../assets/images/one-punch-man-chap-223-3-1021.webp')}
                        name="One Puch Man"
                    />
                    <HScrollView 
                        imageUri={require('../../assets/images/shadow_bia.jpg')}
                        name="Shadow "
                    />
                    <HScrollView 
                        imageUri={require('../../assets/images/doremon_bia.jpg')}
                        name="Doraemon"
                    />
                    <HScrollView 
                        imageUri={require('../../assets/images/naruto_bia.png')}
                        name="Naruto"
                    />
                    <HScrollView 
                        imageUri={require('../../assets/images/demoslayder_bia.png')}
                        name="Demon slayder"
                    />
                </ScrollView>


            </View>

            <View style ={styles.navContainer}>
                <View style ={styles.navBar}>
                    <Pressable onPress={()=> this.changeText('Favourites')}>
                      
                    </Pressable>
                </View>
            
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.BASIC_BACKGROUND,        
    },
    header: {
        marginTop:20,
        marginLeft:10

    },
    headerTitle:{
        fontSize:28,
        marginBottom:10

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
        borderRadius:40,

    }


});
export default HomeScreen;