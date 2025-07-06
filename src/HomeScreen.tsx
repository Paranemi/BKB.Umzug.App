import {StyleSheet, ScrollView, View} from "react-native";
import {MusicPlayer} from "./components/MusicPlayer";
import {SoundBoard} from "./components/SoundBoard";
import {SuperPerforator} from "./components/SuperPerforator";

export function HomeScreen() {
    return (
        <View style={styles.container}>
            <MusicPlayer/>
            <SuperPerforator/>
            <SoundBoard/>
        </View>
           
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BB9582',
    },
    contentContainer: {
        alignItems: "center",
        paddingVertical: 20,
        gap: 30,
    }
});