import { View, Text, Image} from "react-native";
import style from "./style";

export default function logo(){
    return(
        <View style = {style.boxlogo}>
          <Image style = {style.logo} source = {require('../../../assets/logo.png')} ></Image>
        </View>
    );
}