import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { useFonts, Koulen_400Regular } from '@expo-google-fonts/koulen';
import { useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo-app-loading';


const { height, width } = Dimensions.get('screen');

export default function Home() {  
    
    //navigation
    const navigation = useNavigation();
    
    //load fonts
    const [fonstLoaded] = useFonts({ Koulen_400Regular})
 

    if(!fonstLoaded){
        <AppLoading/>
    }


 return (
   <View style={styles.container}>
       <View>
            <Image source={require('../images/homePam.png')} style={styles.imgBG}/>
       </View>

       <View style={styles.dataPosition}>
        <Text style={styles.dataEvento}>30.05</Text>
        <Text style={styles.anoEvento}>2022</Text>
      </View>

      <View style={styles.painelBaixo}>
        <Text style={styles.Titulo}>Pamela & Gabriel</Text>
        <Text style={styles.CronoData}>30 : 05 : 45 : 22</Text>

        <TouchableOpacity style={styles.BtPresenca} >
            <Text style={{fontWeight:'bold'}}>CONFIRME SUA PRESENÇA</Text>
        </TouchableOpacity>

      </View>
      
       
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'

    },
    imgBG: {
        height:height,
        width:width,
    },
    dataPosition: {
        position:'absolute',
        left:20,
        top:30
      },
      dataEvento: {
        fontFamily:'Koulen_400Regular', 
        position:'absolute', 
        top:10, 
        fontSize:50,
        color:'#30302f'
        
      },
      anoEvento: {
        position:'absolute',
        top:70,
        fontFamily:'Koulen_400Regular',
        color:'#30302f',
        fontSize:30
      },
      painelBaixo: {
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        bottom:30
      },
      Titulo: {
        fontSize:40,
        fontWeight:'bold',
        paddingBottom:10,
        color:'#fff'
      },
      CronoData: {
        color:'#fff',
        fontSize:40,
        paddingBottom:20,
        fontFamily:'Koulen_400Regular'
      },
      BtPresenca: {
        width:300,
        height:40,
        borderRadius:5,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
      }
    });
