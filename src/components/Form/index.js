import { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import styles from './style';
import Result from './Result';

export default function Form() {
    const [peso, setPeso] = useState(null)
    const [altura, setAltura] = useState(null)
    const [msgCalculo, setMsgCalculo] = useState(null)
    const [msgResultado, setMsgResultado] = useState(null)
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [colorStatus, setColorStatus] = useState (null)

    function calcularImc(pesoFormat, alturaFormat) {
        // let imcFinal = (Number.parseFloat(pesoFormat) / (Number.parseFloat(alturaFormat) * Number.parseFloat(alturaFormat)))
        alturaFormat = Number.parseFloat(alturaFormat) / 100
        let imcFinal = Number.parseFloat(pesoFormat) / (alturaFormat * alturaFormat)
        setImc(imcFinal)
        resultado(imcFinal)
    }

    function resultado(imc) { 
        if (imc < 18.5) {
            setMsgResultado("Magreza")
            setColorStatus(styles.corMagreza)
        } else if (imc >= 18.5 && imc < 25) {
            setMsgResultado("Normal")
            setColorStatus(styles.corNormal)
        } else if (imc >= 25 && imc < 30) {
            setMsgResultado("Sobrepeso")
            setColorStatus(styles.corAcima)
        } else if (imc >= 30 && imc < 35) {
            setMsgResultado("Obesidade grau I")
            setColorStatus(styles.corObesidade)
        } else if (imc >= 35 && imc < 40) {
            setMsgResultado("Obesidade grau I")
            setColorStatus(styles.corObesidade)
        } else if (imc > 40) {
            setMsgResultado("Obesidade grau III")
            setColorStatus(styles.corObesidade)
        }
    }

    function validacaoImc() {
        if (peso != null && altura != null) {
            let pesoFormat = peso.replace(",", ".")
            let alturaFormat = altura.replace(",", ".")
                calcularImc(pesoFormat, alturaFormat)
                setPeso(null)
                setAltura(null)
                setTextButton("Calcular novamente")
                setMsgCalculo(null)
        } else {
            setMsgCalculo("Preencha a Altura e Peso")
            setImc(null)
        }
    }

    return (
        <View style={styles.form}>
            {imc == null ?
                <View>
                    {/* Condição que verifica se há mensagem de erro */}
                    {msgCalculo != null && (
                        <Text style={styles.alerta}>{msgCalculo}</Text>
                    )}
                    <Text style={styles.label}>Altura (cm)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="ex: 165"
                        keyboardType="numeric"
                        value={altura}
                        onChangeText={setAltura}
                    />

                    <Text style={styles.label}>Peso (kg)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="ex: 62,0"
                        keyboardType="numeric"
                        value={peso}
                        onChangeText={setPeso}
                    />

                    <TouchableOpacity onPress={() => validacaoImc()}>
                        <Text style={styles.button}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
                :
                <View>
                    <Result imc={imc} colorStatus={colorStatus} msgResultado={msgResultado} />
                    <TouchableOpacity onPress={() => validacaoImc()}>
                        <Text style={styles.button}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}