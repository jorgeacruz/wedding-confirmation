import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('screen');

export default function Home() {
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

        <TouchableOpacity style={styles.BtPresenca}>
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
        width:width
    },
    dataPosition: {
        position:'absolute',
        left:10,
        top:10
      },
      dataEvento: {
        color:'#A6A5A5',
        fontWeight:'bold',
        fontSize:50
      },
      anoEvento: {
        position:'absolute',
        top:60,
        fontWeight:'bold',
        color:'#A6A5A5',
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
        fontWeight:'700',
        paddingBottom:20,
      },
      BtPresenca: {
        width:300,
        height:40,
        borderRadius:5,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
      }
    });
