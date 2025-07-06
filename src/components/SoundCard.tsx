import {TouchableOpacity, Text, StyleSheet} from "react-native";
import {AudioSource, useAudioPlayer} from "expo-audio";

type SoundCardProps = {
    text: string,
    audioSource: AudioSource,
}

export function SoundCard({ text, audioSource }: SoundCardProps) {
    const sound = useAudioPlayer(audioSource);
    
    const playSound = () => {
        sound.seekTo(0);
        sound.play();
    }
    
    return (
        <TouchableOpacity style={styles.card} onPress={playSound}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#560807',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        margin: 6,
        minHeight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    }
});