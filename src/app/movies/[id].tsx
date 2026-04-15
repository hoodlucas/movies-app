import { useLocalSearchParams, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

function MovieDetails() {
    const { id } = useLocalSearchParams();
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        fetch(`https://fooapi.com/api/movies/${id}`)
        .then(res => res.json())
        .then(res => setMovie(res.data));
        }, [id]);

    
    // Esto es para que no colapse la página porque  si es muy ráida, nos da error
    if (!movie) return <Text>Cargando...</Text>;

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Image 
            source={{ uri: movie?.poster }} 
            style={{ width: '100%', height: 450 }} 
            />
            
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 28, fontWeight: 'bold' }}>{movie?.title}</Text>
                
                <View style={{ flexDirection: 'row', gap: 10, marginVertical: 5 }}>
                    <Text style={{ color: 'gray' }}>{movie?.year}</Text>
                    <Text style={{ color: 'gray' }}>•</Text>
                    <Text style={{ color: 'gray' }}>{movie?.runtime}</Text>
                    <Text style={{ color: 'gold', fontWeight: 'bold' }}>⭐ {movie?.imdbRating}</Text>
                </View>

                <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 15 }}>Director</Text>
                <Text style={{ color: '#444' }}>{movie?.director}</Text>

                <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 10 }}>Actores</Text>
                <Text style={{ color: '#444' }}>{movie?.actors}</Text>

                <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 15 }}>Sinopsis</Text>
                <Text style={{ color: '#666', lineHeight: 22, marginTop: 5 }}>
                    {movie?.plot}
                </Text>
            </View>
        </View>
    );
    }

export default MovieDetails;