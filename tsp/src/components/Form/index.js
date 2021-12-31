import { func } from "prop-types";
import React, {useState} from "react";
import {TextInput, View, Text, Button} from "react-native"
import ResultImc from "../Resultimc/";

export default function Form(){

const [endereço_1, set_endereço_1] = useState(null)
const [endereço_2, set_endereço_2] = useState(null)
const [endereço_3, set_endereço_3] = useState(null)
const [messageImc, setmessageImc]= useState("preencha o peso e altura")
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
                onPress = {()=>PrintaEnds() }
                title= "Calcular Rota"
                />
            </View>
            <ResultImc messageResultImc = {messageImc} ResultImc = {imc}/>
        </View>
    );
}