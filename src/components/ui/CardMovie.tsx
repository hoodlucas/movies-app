import React from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";


function CardMovie({ item }: { item: any }) {
    const router = useRouter();

    return (
        <View style={styles.card}>
            <Image 
                source={{ uri: item.poster }} 
                style={styles.image} 
                resizeMode="cover"
            />

            <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.year}>{item.year}</Text>
                <Text style={styles.genre}>{item.genre}</Text>
            </View>

            <Ionicons 
                name="chevron-forward" 
                size={20} 
                color="#999" 
                onPress={() => router.push(`/movies/${item.id}`)}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    card: {
        flexDirection: "row",          // 🔑 horizontal
        alignItems: "center",          // centra verticalmente
        padding: 12,
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 10,


        // sombra (Android)
        elevation: 2,
    },

    image: {
        width: 60,
        height: 90,
        borderRadius: 8,
        marginRight: 12,
    },

    info: {
        flex: 1, // 🔑 ocupa todo el espacio disponible
    },

    title: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 4,
    },

    year: {
        fontSize: 14,
        color: "#666",
    },

    genre: {
        fontSize: 14,
        color: "#999",
    },
});

export default CardMovie