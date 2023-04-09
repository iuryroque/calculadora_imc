import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#FFF',
        padding: 30,
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    alerta: {
        backgroundColor: '#F00',
        fontSize: 20,
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
    },
    label: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10,
    },
    input: {
        fontSize: 20,
        borderRadius: 10,
        backgroundColor: '#DDD',
        padding: 10,
        marginBottom: 20,
    },
    button: {
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center',
        backgroundColor: '#008000',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
});

export default styles