import { func } from "prop-types";
import React, {useState} from "react";
import {TextInput, View, Text, Button, FlatList} from "react-native"
import ResultImc from "../Resultimc/";

export default function Form(){

const [endereço_1, set_endereço_1] = useState(null)
const [endereço_2, set_endereço_2] = useState(null)
const [endereço_3, set_endereço_3] = useState(null)
const [enderecos_juntos, set_enderecos_juntos] = [endereço_1, endereço_2,endereço_3]
const [message, setmessage]= useState("Calcule a rota")
const [imc, setImc]= useState(null)
const [TextButton, setTextButton]= useState('Calcular')

// function imcCalculator (){
//     return setImc((weight/(height*height)).toFixed(2))
// }

// function validationImc() {
//     if(weight != null && height != null){
//         imcCalculator()
//         setWeight(null)
//         setHeight(null)
//         setmessageImc("Seu imc é igual a: ")
//         setTextButton("Calcular Novamente")
//         return
//     }
//     setImc(null)
//     setTextButton("Calcular")
// }

    const dados = [
        {key: endereço_1},
        {key: endereço_2},
        {key : endereço_3}
    ]
    function retorna_enderecos (){
        setmessage ("Os endereços cadastrados foram: ")
        return(
                <FlatList
                    data = {dados}
                    renderItem = {({item}) => <Text> {item.key}</Text>}
                />
        )
    }

    return (
        <View> 
            <View> 
                <Text>Endereço 1</Text>
                <TextInput
                    onChangeText ={set_endereço_1}
                    value = {endereço_1}
                    placeholder = "Digite o Endereço 1"
                    KeyboardType = "numeric"
                />
               <Text>Endereço 2</Text>
                <TextInput
                    onChangeText ={set_endereço_2}
                    value = {endereço_2}
                    placeholder = "Digite o Endereço 2"
                    KeyboardType = "numeric"
                />
                <Text> Endereço 3</Text>
                <TextInput 
                onChangeText = {set_endereço_3}
                value = {endereço_3}
                placeholder = "Digite o Endereço 3"hh
                KeyboardType = "numeric"
                /> 

                <Button 
                onPress = {()=>retorna_enderecos() }
                title= "Retorna Endereços"
                />
            </View>
            <ResultImc messageResultImc = {message} ResultImc = {enderecos_juntos}/>
        </View>
    );
}