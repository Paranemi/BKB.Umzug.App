import {View, StyleSheet, FlatList, Text} from "react-native";
import {SoundCard} from "./SoundCard";
import {soundSource} from "../utils/music-imports";

export function SoundBoard() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sound-Board</Text>
            <FlatList
                data={soundSource}
                renderItem={({ item }) => (
                    <SoundCard
                        text={item.name}
                        audioSource={item.source}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                contentContainerStyle={styles.gridContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        color: '#333'
    },
    gridContainer: {
        alignItems: 'center',
        paddingBottom: 20,
    }
});