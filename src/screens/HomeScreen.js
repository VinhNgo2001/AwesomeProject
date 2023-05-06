import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import Colors from '../constants/Colors';
import SearchFilter from '../components/SearchFilter';
import SearchBar from '../components/SearchBar';
import HScrollView from '../components/HScrollView';



const HomeScreen =() => {
    return ( <
        ScrollView style = { styles.container } >
            <StatusBar 
                style = "auto" 
                translucent = {false}
                backgroundColor={Colors.WHITE}
            / >            
            <SearchBar />          
            <View style = {styles.header}>               
                <Text style ={styles.headerTitle}>
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
                        imageUri={require('../../assets/images/one-punch-man-chap-223-3-1021.webp')}
                        name="One Puch Man"
                    />
                    <HScrollView 
                        imageUri={require('../../assets/images/one-punch-man-chap-223-3-1021.webp')}
                        name="One Puch Man"
                    />
                    <HScrollView 
                        imageUri={require('../../assets/images/one-punch-man-chap-223-3-1021.webp')}
                        name="One Puch Man"
                    />
                </ScrollView>


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

    },
    headerTitle:{
        fontSize:28
    }


});
export default HomeScreen;