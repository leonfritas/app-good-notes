import { StyleSheet } from 'react-native';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { LoginContext } from "../../context/LoginContext";
import { useContext } from 'react';


export default function HomeScreen({ navigation }) {

  const { isLogged, setIsLogged } = useContext(LoginContext)
  //
  return (
    <View style={styles.Home}>

    <TouchableOpacity style={[styles.btn, styles.BoxShadowProp]} title='Boletim' onPress={() => { navigation.navigate('Boletim', {AssimPassoParametros: 'Através de objetos.'}) }}>
        <Ionicons style={styles.icon} name='document-text-outline' size={80} color='white'/>
        <Text style={styles.txtBtn}>TELA 1</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.btn, styles.BoxShadowProp]} title='Horário' onPress={() => { navigation.navigate('Horario',  {AssimPassoParametros: 'Através de objetos.'}) }}>
        <Ionicons style={styles.icon} name='md-time-outline' size={80} color='white'/>
   
        <Text style={styles.txtBtn}>TELA 2</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.btn, styles.BoxShadowProp]} title='Agenda' onPress={() => { navigation.navigate('Agenda',  {AssimPassoParametros: 'Através de objetos.'} )}}>
        <Ionicons style={styles.icon} name='book-outline' marginLeft={3} size={70} color='white'/>
        <Text style={styles.txtBtn}>TELA 3</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.btn, styles.BoxShadowProp]} title='Financeiro' onPress={() => { navigation.navigate('Financeiro', {AssimPassoParametros: 'Através de objetos.'}) }}>
        <Ionicons style={styles.icon} name='cash-outline' size={70} color='white'/>
    
        <Text style={styles.txtBtn}>TELA 4</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.btn, styles.BoxShadowProp]} onPress={()=>setIsLogged(false)} >

        <Ionicons style={styles.icon} name='exit-outline' marginLeft={4} size={70} color='white'/>
    
        <Text style={styles.txtBtn}>SAIR</Text>
    </TouchableOpacity>

</View>
  );
}

const styles = StyleSheet.create({
  Home: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      gap:50,
      flexWrap: 'wrap',
      marginVertical:50

  },
  Text: {
      fontSize: 20,
      color: 'black'
  },
  btn:{
      width:130,
      height:130,
      color:'green',
      backgroundColor: '#1E90FF',
      paddingHorizontal:30,
      BoxShadowColor: 'black',
      borderRadius:4,
      alignItems:'center',    
  },
  BoxShadowProp: {
      BoxShadowColor: '#171717',
      BoxShadowOffset: {width: -2, height: 4},
      BoxShadowOpacity: 0.2,
      BoxShadowRadius: 3,
      elevation:10
    },
  txtBtn:{
      color:'white',
      fontWeight:600,
      textAlign: 'center',
      position:'absolute',
      bottom:10,
      margin: 'auto',
      left:0,
      right:0
  },
  icon:{
      marginTop: 10

  }
})
