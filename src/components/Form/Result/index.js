import {Text, View} from 'react-native';
import styles from './style';

export default function Result(props) {
    let colorStatus
    if (props.imc < 18.5) {
        colorStatus = (styles.corMagreza)
    } else if (props.imc >= 18.5 && props.imc < 25) {
        colorStatus = (styles.corNormal)
    } else if (props.imc >= 25 && props.imc < 30) {
        colorStatus = (styles.corAcima)
    } else if (props.imc >= 30 && props.imc < 35) {
        colorStatus = (styles.corObesidade)
    } else if (props.imc >= 35 && props.imc < 40) {
        colorStatus = (styles.corObesidade)
    } else if (props.imc > 40) {
        colorStatus = (styles.corObesidade)
    }

    return(
        <View style={styles.resultadoImc}>
            <Text style={styles.info}>Seu IMC é:</Text>
            <Text style={styles.imc}>{parseFloat(props.imc.toFixed(2))}</Text>
            <Text style={[styles.msgResultado, colorStatus]}>{props.msgResultado}</Text>
        </View>
    );
}