import { StyleSheet, ScrollView} from "react-native";
import {MusicPlayer} from "./components/MusicPlayer";
import {SoundBoard} from "./components/SoundBoard";

export function HomeScreen() {
    return (
        // <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <>
            <MusicPlayer/>
            <SoundBoard/>
        </>
           
        // </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        alignItems: "center",
        paddingVertical: 20,
        gap: 30,
    }
});