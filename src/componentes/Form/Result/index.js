import { Text,View } from "react-native";
import Style  from "./style";

export default function Result(props){
    return(
        <View style= {Style.resultadoMedia}>
            <Text style = {Style.info}>Sua média Foi:</Text>
            <Text style = {Style.media} >{props.media}</Text>
            <Text style={[Style.msgResultado, Style.corReprovado]}>{props.msgResultado}</Text>
        </View>
    );
}