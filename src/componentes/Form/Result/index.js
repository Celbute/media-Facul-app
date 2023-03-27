import { Text,View } from "react-native";
import Style  from "./style";

export default function Result(props){
    let color 
    if(props.media < 3 ){
        color = Style.corReprovado
    } else if (props.media >=3  && props.media< 7){
        color = Style.corProvaFinal
    }else{
        color = Style.corAprovado
    }
    return(
        <View style= {Style.resultadoMedia}>
            <Text style = {Style.info}>Sua média Foi:</Text>
            <Text style = {Style.media} >{props.media}</Text>
            <Text style={[Style.msgResultado, color]}>{props.msgResultado}</Text>
        </View>
    );
}