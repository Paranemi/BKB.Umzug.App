import {Text, View, StyleSheet} from "react-native";
import {Button, ProgressBar, IconButton} from "react-native-paper";
import {useState, useEffect} from "react";
import {useAudioPlayer} from "expo-audio";
import {tracks} from "../utils/music-imports";
import {useAudioContext} from "../context/AudioContext";

export function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const sounds = useAudioPlayer(tracks[currentTrackIndex].source);
    const { musicVolume } = useAudioContext();

    useEffect(() => {
        // Update the audio player volume when musicVolume changes
        if (sounds) {
            sounds.volume = musicVolume;
        }
    }, [musicVolume, sounds]);

    useEffect(() => {
        // Update progress every second when playing
        const interval = setInterval(() => {
            if (sounds && isPlaying) {
                const newCurrentTime = sounds.currentTime || 0;
                const newDuration = sounds.duration || 0;
                
                setCurrentTime(newCurrentTime);
                setDuration(newDuration);
                
                // Check if track has ended (with small buffer for timing issues)
                if (newDuration > 0 && newCurrentTime >= newDuration - 0.1) {
                    handleTrackEnd();
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [sounds, isPlaying, currentTrackIndex]);

    useEffect(() => {
        // Set initial duration when audio loads
        if (sounds) {
            const updateDuration = () => {
                setDuration(sounds.duration || 0);
            };
            
            // Try to get duration immediately
            updateDuration();
            
            // Set up listener for when duration becomes available
            const timeout = setTimeout(updateDuration, 1000);
            return () => clearTimeout(timeout);
        }
    }, [sounds]);

    useEffect(() => {
        // Reset time when track changes and auto-play if was playing
        setCurrentTime(0);
        setDuration(0);
        
        // Auto-play the new track if player was in playing state
        if (isPlaying && sounds) {
            // Small delay to ensure audio is loaded
            const playTimeout = setTimeout(() => {
                sounds.volume = musicVolume; // Set volume before playing
                sounds.play();
            }, 100);
            return () => clearTimeout(playTimeout);
        }
    }, [currentTrackIndex, sounds, isPlaying, musicVolume]);

    const handlePlayerPress = async () => {
        if(!isPlaying) {
            sounds.volume = musicVolume;
            sounds.play();
            setIsPlaying(true);
        }
        else{
            sounds.pause();
            setIsPlaying(false);
        }
    }

    const handleTrackEnd = () => {
        // Auto-advance to next track when current track ends
        if (currentTrackIndex < tracks.length - 1) {
            setCurrentTrackIndex(currentTrackIndex + 1);
        } else {
            // Loop back to first track
            setCurrentTrackIndex(0);
        }
        // isPlaying state remains true, so the new track will auto-play
    };

    const handleNextTrack = () => {
        if (currentTrackIndex < tracks.length - 1) {
            setCurrentTrackIndex(currentTrackIndex + 1);
        } else {
            // Loop back to first track
            setCurrentTrackIndex(0);
        }
        // Keep playing state - the new track will auto-play if currently playing
    };

    const handlePreviousTrack = () => {
        if (currentTrackIndex > 0) {
            setCurrentTrackIndex(currentTrackIndex - 1);
        } else {
            // Loop to last track
            setCurrentTrackIndex(tracks.length - 1);
        }
        // Keep playing state - the new track will auto-play if currently playing
    };

    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const getCurrentTrackName = (): string => {
        return tracks[currentTrackIndex].name;
    };

    const progress = duration > 0 ? currentTime / duration : 0;
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ein Buch über eine Indianer-Karte-Schatz</Text>
            
            <View style={styles.playerContainer}>
                <Text style={styles.trackName}>{getCurrentTrackName()}</Text>
                <Text style={styles.trackInfo}>
                    {currentTrackIndex + 1} von {tracks.length}
                </Text>
                
                <View style={styles.controlsContainer}>
                    <IconButton
                        icon="skip-previous"
                        size={30}
                        onPress={handlePreviousTrack}
                        style={styles.controlButton}
                    />
                    
                    <Button 
                        icon={isPlaying ? "pause" : "play"} 
                        mode="contained" 
                        onPress={handlePlayerPress}
                        style={styles.playButton}
                    >
                        {isPlaying ? "Pause" : "Play"}
                    </Button>
                    
                    <IconButton
                        icon="skip-next"
                        size={30}
                        onPress={handleNextTrack}
                        style={styles.controlButton}
                    />
                </View>
                
                <View style={styles.progressContainer}>
                    <ProgressBar 
                        progress={progress} 
                        color="#560807" 
                        style={styles.progressBar}
                    />
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
                        <Text style={styles.timeText}>{formatTime(duration)}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        top: 60,
        gap: 20,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    playerContainer: {
        width: '100%',
        alignItems: 'center',
        gap: 15
    },
    trackName: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center'
    },
    trackInfo: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center'
    },
    controlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    },
    controlButton: {
        backgroundColor: '#f0f0f0'
    },
    playButton: {
        backgroundColor: '#560807',
        marginHorizontal: 10
    },
    progressContainer: {
        width: '100%',
        gap: 8
    },
    progressBar: {
        height: 6,
        borderRadius: 3
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 4
    },
    timeText: {
        fontSize: 16,
        color: '#666'
    }
});