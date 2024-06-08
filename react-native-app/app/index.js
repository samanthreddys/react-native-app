import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";

export default function Home(){
    return(
        <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
            <Stack.Screen options={{title:"Home"}} />
            <Link href="/details"> Go to Details</Link>
        
        </View>
    );
}