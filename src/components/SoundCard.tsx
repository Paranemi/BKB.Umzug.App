import {TouchableOpacity, Text} from "react-native";

type SoundCardProps = {
    text: string,
    onPress: () => void,
}

export function SoundCard({ text, onPress }: SoundCardProps) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}