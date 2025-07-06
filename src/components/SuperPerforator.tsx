import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useAudioPlayer } from 'expo-audio';
import { useAudioContext } from '../context/AudioContext';

const superPerforatorAudio = require('../../assets/main-song/SuperPerforator.mp3');

export function SuperPerforator() {
    const [isPlaying, setIsPlaying] = useState(false);
    const sound = useAudioPlayer(superPerforatorAudio);
    const { setSuperPerforatorPlaying } = useAudioContext();
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

    const handlePress = () => {
        if (!isPlaying) {
            // Start playing
            setIsPlaying(true);
            isPlayingRef.current = true;
            setSuperPerforatorPlaying(true);
            
            sound.seekTo(0);
            sound.play();
            
            // Start monitoring the sound's playback status
            intervalRef.current = setInterval(() => {
                if (sound && isPlayingRef.current) {
                    const currentTime = sound.currentTime || 0;
                    const duration = sound.duration || 0;
                    
                    // Check if sound has finished playing
                    if (duration > 0 && currentTime >= duration - 0.1) {
                        // Sound has ended, stop playing
                        setIsPlaying(false);
                        isPlayingRef.current = false;
                        setSuperPerforatorPlaying(false);
                        
                        if (intervalRef.current) {
                            clearInterval(intervalRef.current);
                            intervalRef.current = null;
                        }
                    }
                }
            }, 100);
        } else {
            // Stop playing
            setIsPlaying(false);
            isPlayingRef.current = false;
            setSuperPerforatorPlaying(false);
            sound.pause();
            
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
    };

    return (
        <View style={styles.container}>
            <Button
                mode="contained"
                onPress={handlePress}
                style={[
                    styles.button,
                    isPlaying && styles.buttonPlaying
                ]}
                labelStyle={styles.buttonLabel}
                icon={isPlaying ? "stop" : "play"}
            >
                {isPlaying ? "Stop SuperPerforator" : "SuperPerforator"}
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    button: {
        backgroundColor: '#8B0000',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 25,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonPlaying: {
        backgroundColor: '#DC143C',
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});