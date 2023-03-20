import { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import style from "./style";
import Result from "./Result"

export default function Form() {

    const [mediaEtapa1, setMediaEtapa1] = useState(null)
    const [mediaEtapa2, setMediaEtapa2] = useState(null)
    const [msgCalculo, setMsgCalculo] = useState(null)
    const [msgResultado, setmsgResultado] = useState(null)
    const [media, setMedia] = useState(null)
    const [textButtom, setTextButtom] = useState("Calcular")

    function calcularMedia(mediaEtapa1Format, mediaEtapa2Format) {
        let mediaFinal = (Number.parseFloat(mediaEtapa1Format) + Number.parseFloat(mediaEtapa2Format)) / 2
        setMedia(mediaFinal)
        resultado(mediaFinal)
    }

    function resultado(media) {
        if (media >= 7) {
            setmsgResultado("Aprovado!")

        } else if (media >= 3 && media < 7) {
            setmsgResultado("Prova Final")
        } else {
            setmsgResultado("Reprovado")
        }
    }

    function validacaoMedia() {
        if (mediaEtapa1 != null && mediaEtapa2 != null) {
            let mediaEtapa1Format = mediaEtapa1.replace(",", ".")
            let mediaEtapa2Format = mediaEtapa2.replace(",", ".")
            if (mediaEtapa1Format >= 0 && mediaEtapa1Format <= 10 && mediaEtapa2Format >= 0 &&
                mediaEtapa2Format <= 10) {
                calcularMedia(mediaEtapa1Format, mediaEtapa2Format)
            } else {
                setMsgCalculo("Valor Inválido")
            }
        } else {
            setMsgCalculo("Preencha as médias das etapas!")
        }
    }

    return (
        <View style={style.form}>
            <Text>{msgCalculo}</Text>

            <Text style={style.label}>MÉDIA ETAPA 1</Text>
            <TextInput
                style={style.input}
                keyboardType="numeric"
                value={mediaEtapa1}
                onChangeText={setMediaEtapa1}

            >

            </TextInput>
            <Text style={style.label}>MÉDIA ETAPA 2</Text>
            <TextInput
                style={style.input}
                keyboardType="numeric"
                value={mediaEtapa2}
                onChangeText={setMediaEtapa2}

            ></TextInput>
            <TouchableOpacity onPress={() => validacaoMedia()}>
                <Text style={style.button}>{textButtom}</Text>

            </TouchableOpacity>

            <Result media={media} msgResultado={msgResultado} />
        </View>
    );
}