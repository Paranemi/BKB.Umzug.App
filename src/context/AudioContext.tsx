import React, {createContext, useContext, useState, ReactNode, useEffect} from 'react';

interface AudioContextType {
    musicVolume: number;
    isSoundEffectPlaying: boolean;
    isSuperPerforatorPlaying: boolean;
    setMusicVolume: (volume: number) => void;
    setSoundEffectPlaying: (isPlaying: boolean) => void;
    setSuperPerforatorPlaying: (isPlaying: boolean) => void;
    duckMusic: () => void;
    restoreMusic: () => void;
    pauseMusic: () => void;
    resumeMusic: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

interface AudioProviderProps {
    children: ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
    const [musicVolume, setMusicVolume] = useState(1.0); // Normal volume
    const [isSoundEffectPlaying, setIsSoundEffectPlaying] = useState(false);
    const [isSuperPerforatorPlaying, setIsSuperPerforatorPlaying] = useState(false);
    const [originalVolume, setOriginalVolume] = useState(1.0);
    const [musicPausedByExternal, setMusicPausedByExternal] = useState(false);

    const setSoundEffectPlaying = (isPlaying: boolean) => {
        setIsSoundEffectPlaying(isPlaying);
        if (isPlaying) {
            duckMusic();
        } else {
            restoreMusic();
        }
    };

    const setSuperPerforatorPlaying = (isPlaying: boolean) => {
        setIsSuperPerforatorPlaying(isPlaying);
        if (isPlaying) {
            pauseMusic();
        } else {
            resumeMusic();
        }
    };
    
    const duckMusic = () => {
        setOriginalVolume(musicVolume);
        setMusicVolume(0.1);
    };

    const restoreMusic = () => {
        setMusicVolume(originalVolume);
    };

    const pauseMusic = () => {
        setMusicPausedByExternal(true);
    };

    const resumeMusic = () => {
        setMusicPausedByExternal(false);
    };

    return (
        <AudioContext.Provider
            value={{
                musicVolume,
                isSoundEffectPlaying,
                isSuperPerforatorPlaying,
                setMusicVolume,
                setSoundEffectPlaying,
                setSuperPerforatorPlaying,
                duckMusic,
                restoreMusic,
                pauseMusic,
                resumeMusic,
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