import React from "react";
import { Text, View, Button } from 'react-native';
import { TextInput } from "react-native";
import {useState} from "react"

const style = function (){
    return({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 50,
    },
        row:{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
    },
        buttonWidth:{
            width: 5
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
          },
})
}

export default helloWorld = function(){
        const [text, onChangeText] = useState('Useless Text');
        const [number1, onChangeNumber1] = useState('');
        const [number2, onChangeNumber2] = useState('');
        const [resultado, setResultado] = useState('');
    
        const soma = function(){
             setResultado (Number(number1) + Number(number2))
             onChangeNumber1 ('')
             onChangeNumber2('')
             return true
        }
        const subtracao = function(){
             setResultado (Number(number1) - Number(number2))
             onChangeNumber1 ('')
             onChangeNumber2('')
             return true
        }
        const multiplicacao = function(){
             setResultado (Number(number1) * Number(number2))
             onChangeNumber1 ('')
             onChangeNumber2('')
             return true
        }
        const divisao = function(){
             setResultado (Number(number1) / Number(number2))
             onChangeNumber1 ('')
             onChangeNumber2('')
             return true
        }
        console.log(resultado)

    return(
        <View style={style().container}>
            <Text>CALCULADORA</Text>
            <Text>Digite 2 numeros</Text>
                <View style={style().row}>
                <TextInput style={style().input}
                onChangeText={onChangeNumber1}
                value={number1}
        placeholder="Primeiro numero"
        keyboardType="numeric"
      />
                <TextInput style={style().input}
                onChangeText={onChangeNumber2}
                value={number2}
        placeholder="Segundo numero"
        keyboardType="numeric"
      />
                    
            </View>
            <View style={style().row}>
                <Button style={style().buttonWidth}
              
                onPress={() => soma()}
                title="+"/>
                
                <Button
                onPress={() => subtracao()}
                title="-"/>
                <Button
                onPress={() => multiplicacao()}
                title="*"/>
                <Button
                onPress={() => divisao()}
                title="/"/>
            </View>
            <Text>Seu resultado é:{resultado}</Text>
        </View>
        
    )
    
}

