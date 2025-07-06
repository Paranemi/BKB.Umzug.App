import {TouchableOpacity, Text, StyleSheet, Dimensions} from "react-native";
import {AudioSource, useAudioPlayer} from "expo-audio";
import {useAudioContext} from "../context/AudioContext";
import {useEffect, useRef} from "react";

type SoundCardProps = {
    text: string,
    audioSource: AudioSource,
}

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 60) / 2; // 60 = padding and margins

export function SoundCard({ text, audioSource }: SoundCardProps) {
    const sound = useAudioPlayer(audioSource);
    const { setSoundEffectPlaying, isSoundEffectPlaying } = useAudioContext();
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const isPlayingRef = useRef(false);
    
    useEffect(() => {
        // Clean up interval on unmount
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);
    
    const playSound = () => {
        // Duck the music when sound effect starts
        setSoundEffectPlaying(true);
        isPlayingRef.current = true;
        
        // Play the sound effect
        sound.seekTo(0);
        sound.play();
        
        // Start monitoring the sound's playback status
        intervalRef.current = setInterval(() => {
            if (sound && isPlayingRef.current) {
                const currentTime = sound.currentTime || 0;
                const duration = sound.duration || 0;
                
                // Check if sound has finished playing
                if (duration > 0 && currentTime >= duration - 0.1) {
                    // Sound has ended, restore music volume
                    setSoundEffectPlaying(false);
                    isPlayingRef.current = false;
                    
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                }
            }
        }, 100); // Check every 100ms for more responsive detection
    }
    
    return (
        <TouchableOpacity 
            disabled={isSoundEffectPlaying} 
            style={[
                styles.card, 
                { width: cardWidth },
                isSoundEffectPlaying && styles.disabledCard
            ]} 
            onPress={playSound}
        >
            <Text style={[
                styles.text,
                isSoundEffectPlaying && styles.disabledText
            ]}>
                {text}
            </Text>
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
    disabledCard: {
        opacity: 0.6,
        shadowOpacity: 0.1,
        elevation: 2,
    },
    text: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
    disabledText: {
        color: '#ccc',
    }
});