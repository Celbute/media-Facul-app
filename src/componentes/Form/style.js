import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    form: {
        backgroundColor: '#FFF',
        padding: 30,
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    
    alerta:{
        backgroundColor: '#F00',
        fontSize: 18,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20,
        padding: 10,
        borderRadius: 5
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
        marginBottom: 10,
    },

    button: {
        backgroundColor: '#F90',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 18,
        color: '#FFF',


    },

});

export default style