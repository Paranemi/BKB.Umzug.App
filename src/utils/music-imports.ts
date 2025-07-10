import {AudioSource} from "expo-audio";

export interface Track {
    source: AudioSource;
    name: string;
}

type SoundSource = {
    name: string;
    source: AudioSource;
}

export const tracks: Track[] = [
    {
        source: require('../../assets/music/01. Im Jahre 1862 - Der Schuh des Manitu.mp3'),
        name: "Im Jahre 1862"
    },
    {
        source: require('../../assets/music/02. Abahachi-Melodie - Der Schuh des Manitu.mp3'),
        name: "Abahachi-Melodie"
    },
    {
        source: require('../../assets/music/03. Sonntags im Schoschonendorf - Der Schuh des Manitu.mp3'),
        name: "Sonntags im Schoschonendorf"
    },
    {
        source: require('../../assets/music/04. Apachen-Pub - Der Schuh des Manitu.mp3'),
        name: "Apachen-Pub"
    },
    {
        source: require('../../assets/music/06. Die Rettende Idee - Der Schuh des Manitu.mp3'),
        name: "Die Rettende Idee"
    },
    {
        source: require('../../assets/music/08. Santa Marias Lager - Der Schuh des Manitu.mp3'),
        name: "Santa Marias Lager"
    },
    {
        source: require('../../assets/music/12. Der geheime Tunnel - Der Schuh des Manitu.mp3'),
        name: "Der geheime Tunnel"
    },
    {
        source: require('../../assets/music/13. Das Ablenkungsmanöver - Der Schuh des Manitu.mp3'),
        name: "Das Ablenkungsmanöver"
    },
    {
        source: require('../../assets/music/14. Das Auge des Gesetzes - Der Schuh des Manitu.mp3'),
        name: "Das Auge des Gesetzes"
    },
    {
        source: require('../../assets/music/15. Abahachi trifft Dimitri - Der Schuh des Manitu.mp3'),
        name: "Abahachi trifft Dimitri"
    },
    {
        source: require('../../assets/music/16. Wo ist die Schatzkarte - Der Schuh des Manitu.mp3'),
        name: "Wo ist die Schatzkarte"
    },
    {
        source: require('../../assets/music/18. Der Zug - Der Schuh des Manitu.mp3'),
        name: "Der Zug"
    },
    {
        source: require('../../assets/music/19. Eine Nacht in Santa Marias Lager - Der Schuh des Manitu.mp3'),
        name: "Eine Nacht in Santa Marias Lager"
    },
    {
        source: require('../../assets/music/20. Sie reiten wieder - Der Schuh des Manitu.mp3'),
        name: "Sie reiten wieder"
    },
    {
        source: require('../../assets/music/22. Flammendes Inferno - Der Schuh des Manitu.mp3'),
        name: "Flammendes Inferno"
    },
    {
        source: require('../../assets/music/23. Der Schuh des Manitu - Der Schuh des Manitu.mp3'),
        name: "Der Schuh des Manitu"
    },
    {
        source: require('../../assets/music/24. Jaqueline - Der Schuh des Manitu.mp3'),
        name: "Jaqueline"
    },
    {
        source: require('../../assets/music/25. Die Höhle - Der Schuh des Manitu.mp3'),
        name: "Die Höhle"
    },
    {
        source: require('../../assets/music/28. Rangers Erinnerungen - Der Schuh des Manitu.mp3'),
        name: "Rangers Erinnerungen"
    }
];

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
    {
        name: "Trinken",
        source: require('../../assets/sounds/AufDenSchreckTrinken.mp3')
    },
    {
        name: "Kratzt",
        source: require('../../assets/sounds/DesKraztJa.mp3')
    },
    {
        name: "Donga Ding",
        source: require('../../assets/sounds/DongaDingDongaDang.mp3')
    },
    {
        name: "Knaxx",
        source: require('../../assets/sounds/KnaxxKonto.mp3')
    },
    {
        name: "Rauchzeichen",
        source: require('../../assets/sounds/Rauchzeichen.mp3')
    },
    {
        name: "Reiten",
        source: require('../../assets/sounds/Reiten.mp3')
    },
    {
        name: "Teil Schatzkarte",
        source: require('../../assets/sounds/TeilDerSchatzkarte.mp3')
    },
    {
        name: "Ablenken",
        source: require('../../assets/sounds/Ablenken.mp3')
    },
    {
        name: "Buch Über",
        source: require('../../assets/sounds/BuchUeber.mp3')
    },
    {
        name: "Hasen",
        source: require('../../assets/sounds/Hasen.mp3')
    },
    {
        name: "Indianer",
        source: require('../../assets/sounds/Indianer.mp3')
    },
    {
        name: "Krasses Pferd",
        source: require('../../assets/sounds/KrassesPferd.mp3')
    },
    {
        name: "Promille",
        source: require('../../assets/sounds/Promille.mp3')
    },
    {
        name: "Schneller",
        source: require('../../assets/sounds/Schneller.mp3')
    },
    {
        name: "Spinnst Du",
        source: require('../../assets/sounds/SpinnstDu.mp3')
    }
];