import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const MoviesScreen =() => {
    return ( <
        View style = { styles.container } >
        
            <Image source={require('../../assets/images/naruto_bia.png')}
                style={{width:"90%",height:"50%",marginTop:30}}
            ></Image>
            <Text style={styles.textND}>Theo chân một tên trộm quyến rũ và một nhóm những kẻ bịp bợm nghiệp dư thực hiện vụ trộm sử thi nhằm lấy lại một di vật đã mất, nhưng mọi thứ trở nên nguy hiểm khó lường hơn bao giờ hết khi họ đã chạm trán nhầm người. Ngục Tối Và Rồng: Danh Dự Của Kẻ Trộm mang thế giới huyền ảo của trò chơi nhập vai huyền thoại lên màn ảnh rộng bằng một cuộc phiêu lưu tràn ngập các màn hành động đã mắt cùng màu sắc hài hước, vui nhộn</Text>
        
        <StatusBar style = "auto" / >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    textND:{
        fontSize:18,
        marginVertical:10
    }
});
export default MoviesScreen;