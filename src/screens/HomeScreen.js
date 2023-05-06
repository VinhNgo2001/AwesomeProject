import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ScrollView} from 'react-native';
import Colors from '../constants/Colors';
import SearchFilter from '../components/SearchFilter';
import SearchBar from '../components/SearchBar';



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