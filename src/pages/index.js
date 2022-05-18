import { StyleSheet, Text, View, Image , Dimensions, StatusBar, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

export default function Home() {
  
  const { height, width } = Dimensions.get('window');
  
  
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.Back}>
        <Image source={require('../images/homePam.png')} style={{height:height, width:width}}/>
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
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    
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
