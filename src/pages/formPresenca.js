import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ConfirmePresenca() {
    const navigation = useNavigation();
 return (
   <View style={styles.container}>
       <StatusBar hidden={true} />
       <View style={{flex:1}}>
        <Image source={require('../images/pam1.png')} style={{width:430, height:360}}/>
       </View>
       <View style={{flex:1}}>
           <Text style={styles.TitleConfirma}>Confirme sua presença!</Text>
           <View>
               <Text></Text>
           </View>
       </View>
       
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#084F17',
        justifyContent:'center',
        alignItems:'center'
    },
    TitleConfirma: {
        color:'#fff',
        fontSize:30
    }
});