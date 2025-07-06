import {AudioSource} from "expo-audio";

type SoundSource = {
    name: string;
    source: AudioSource;
}

export const audioSource: AudioSource[] = [
    require('../../assets/music/01. Im Jahre 1862 - Der Schuh des Manitu.mp3'),
    require('../../assets/music/02. Abahachi-Melodie - Der Schuh des Manitu.mp3'),
    require('../../assets/music/04. Apachen-Pub - Der Schuh des Manitu.mp3'),
    require('../../assets/music/08. Santa Marias Lager - Der Schuh des Manitu.mp3'),
    require('../../assets/music/15. Abahachi trifft Dimitri - Der Schuh des Manitu.mp3')
]

export const soundSource: SoundSource[] = [
    {
        name: "Austausch Bandit",
        source: require('../../assets/sounds/AustauschBandit.mp3')
    },
    {
        name: "Das ist der Schuh",
        source: require('../../assets/sounds/DasIstDerSchuhDesManitu.mp3')
    },
    {
        name: "Ouzo",
        source: require('../../assets/sounds/DimitriOuzo.mp3')
    },
    {
        name: "Geschnappt über",
        source: require('../../assets/sounds/GeschnapptÜber.mp3')
    },
    {
        name: "Tempo Schnecke",
        source: require('../../assets/sounds/TempoSchnecke.mp3')
    },
]