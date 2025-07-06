import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';

interface AudioContextType {
    musicVolume: number;
    isSoundEffectPlaying: boolean;
    setMusicVolume: (volume: number) => void;
    setSoundEffectPlaying: (isPlaying: boolean) => void;
    duckMusic: () => void;
    restoreMusic: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

interface AudioProviderProps {
    children: ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
    const [musicVolume, setMusicVolume] = useState(1.0); // Normal volume
    const [isSoundEffectPlaying, setIsSoundEffectPlaying] = useState(false);
    const [originalVolume, setOriginalVolume] = useState(1.0);

    const setSoundEffectPlaying = (isPlaying: boolean) => {
        setIsSoundEffectPlaying(isPlaying);
        if (isPlaying) {
            duckMusic();
        } else {
            restoreMusic();
        }
    };
    
    const duckMusic = () => {
        setOriginalVolume(musicVolume);
        setMusicVolume(0.15);
    };

    const restoreMusic = () => {
        setMusicVolume(originalVolume);
    };

    return (
        <AudioContext.Provider
            value={{
                musicVolume,
                isSoundEffectPlaying,
                setMusicVolume,
                setSoundEffectPlaying,
                duckMusic,
                restoreMusic,
            }}
        >
            {children}
        </AudioContext.Provider>
    );
};

export const useAudioContext = () => {
    const context = useContext(AudioContext);
    if (context === undefined) {
        throw new Error('useAudioContext must be used within an AudioProvider');
    }
    return context;
};