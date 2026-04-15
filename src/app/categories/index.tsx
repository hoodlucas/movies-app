import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Link, Stack } from 'expo-router';

const GENRES = [
    "Action", 
    "Biography", 
    "Crime", 
    "Drama", 
    "History", 
    "Adventure"
];

function CategoriesScreen() {
        return (
        <View style={styles.container}>
        <Stack.Screen options={{ title: 'Categories' }} />
        <FlatList
            data={GENRES}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
            <Link href={`/categories/${item}`} asChild>
                <TouchableOpacity style={styles.categoryItem}>
                    <Text style={styles.categoryText}>{item}</Text>
                    <Text style={styles.arrow}>❯</Text>
                </TouchableOpacity>
            </Link>
            )}
        />
        </View>
        );
    }

    const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    categoryItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoryText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#333',
    },
    arrow: {
        fontSize: 18,
        color: '#ccc',
    }
    });


export default CategoriesScreen