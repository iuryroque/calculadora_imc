import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    resultadoImc: {
        marginBottom: 20,
    },
    info: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
    },
    imc: {
        backgroundColor: '#DDD',
        fontSize: 38,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    msgResultado: {
        fontSize: 22,
        color: '#FFF',
        textAlign: 'center',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    corMagreza: {
        backgroundColor: '#FF0000',
    },
    corNormal: {
        backgroundColor: '#008000',
    },
    corAcima: {
        backgroundColor: '#FF6961',
    },
    corObesidade: {
        backgroundColor: '#FF0000',
    }
});

export default styles