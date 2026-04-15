import React from "react";
import {Text,View, FlatList, TouchableOpacity, ScrollView} from "react-native"
import CardMovie from "@/components/ui/CardMovie";
import { useState, useEffect } from "react";
import { Link, Stack, router } from 'expo-router';

function MoviesScreen() {

    // Con ayuda de IA
    // 1. Definís dónde vas a guardar la info cuando llegue
    const [movies, setMovies] = useState([]);

    interface Movie {
    id: string;
    title: string;
    year: string;
    genre: string;
    poster: string;
    }

    useEffect(() => {
        fetch('https://fooapi.com/api/movies?limit=10')
            .then(response => response.json())
            .then(res => {
                // 4. Guardás la info en el estado
                console.log("Lo que llega de la API:", res);
                setMovies(res.data); 
            })
            .catch(error => console.error("Error:", error));

    }, []); // <-- Esos corchetes vacíos son la clave: significan "hacelo solo al principio"

    return (
        <FlatList
            data={movies} 
            keyExtractor={(item: Movie) => item.id.toString()}
            renderItem={({ item }: { item: Movie }) => (
                <Link href={`/movies/${item.id}`} asChild> 
                    <TouchableOpacity>
                    <CardMovie item={item} />
                    </TouchableOpacity>
                </Link>
            )}
        />
    )
}

export default MoviesScreen;