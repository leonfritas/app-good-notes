import {StyleSheet, Text, View, TextInput, Pressable,} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import  React, { useState, useContext } from 'react';
import './login.css'
import {LoginContext} from '../../context/LoginContext'




export default function Login( ) {

    const [ usuario, setUsuario] = useState('')
    const [ senha, setSenha] = useState('')
    const { isLogged, setIsLogged } = useContext(LoginContext)


    function logar(){
      if (usuario == 'adm' && senha =='123'){
         setIsLogged(true)
      }else{
        alert('Usuário ou senha inválidos.')
        setSenha('')
      }
    }


    /* CONTAINER PRINCIPAL */ 
    return (
    <View style={stylesLogin.container}>
    <StatusBar />
      <div className='loginLogo'>
        {/* <img src="" alt="" /> */}
        <p>LOGO</p>
      </div>
      <div className='loginForm'>
        <TextInput id='loginInput' placeholder = "Usuário" placeholderTextColor={'#fefefe'} style={stylesLogin.textInput} value={usuario}  onChange={(e) => setUsuario(e.target.value)}/>
        <TextInput id='loginInput' secureTextEntry={true} placeholder = "Senha" placeholderTextColor={'#fefefe'} style={stylesLogin.textInput} value={senha} onChange={(e) => setSenha(e.target.value)}/>
        
        <Pressable style={stylesLogin.btnAcesso} onPress={logar}>
            <Text style={stylesLogin.textBtnAcesso}>
              Acessar
            </Text>
        </Pressable>
      </div>    
    </View>
    );
}

const stylesLogin = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#F0FFFF',
    padding: 20
    },
    textInput:{
    width: '80%',
    height: 40,
    backgroundColor: '#4169E1',
    borderRadius:10,
    paddingLeft: 10,
    marginVertical: 5 ,
    color: '#fff'
    },
    btnAcesso:{
    width: '80%',
    height: 40,
    backgroundColor: '#191970',
    justifyContent:'center',
    borderRadius: 10,
    marginVertical:10
    },
    textBtnAcesso:{
    textAlign:'center',
    color: '#fefefe',
    fontSize:16,
    fontWeight:'600',
    letterSpacing: 1,
    }
    });
      


