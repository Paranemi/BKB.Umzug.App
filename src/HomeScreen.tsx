import {Text, View, StyleSheet} from "react-native";
import {Button} from "react-native-paper";
import {useState} from "react";
import {useAudioPlayer} from "expo-audio";
import {audioSource} from "./utils/music-imports";


export function HomeScreen() {
    const [isPlaying, setIsPlaying] = useState(false);
    const sounds = useAudioPlayer(audioSource[0]);

    const handlePlayerPress = async () => {
        if(!isPlaying) {
            sounds.play();
            setIsPlaying(true);
        }
        else{
            sounds.pause();
            setIsPlaying(false);
        }
    }
    
    return (
        <View style={styles.container}>
            <Text>Ein Buch über eine Indianer-Karte-Schatz</Text>
            <Button icon={isPlaying ? "pause" : "play"} mode="contained" onPress={handlePlayerPress}>
                Musik Abspielen
            </Button>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        top: 60,
        gap: 10
    },
});
