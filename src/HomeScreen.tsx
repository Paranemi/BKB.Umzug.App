import {Text, View, StyleSheet} from "react-native";

export function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Ein Buch über eine Indianer-Karte-Schatz</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
