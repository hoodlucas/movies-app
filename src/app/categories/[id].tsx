import { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useLocalSearchParams, Stack, Link } from 'expo-router';
import CardMovie from '@/components/ui/CardMovie';

function CategoryDetail() {
    const { id } = useLocalSearchParams(); 
    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://fooapi.com/api/movies')
        .then(res => res.json())
        .then(res => {
            // Filtramos las que tengan el género que llegó por la URL
            const filtradas = res.data.filter((m: any) => 
            // Pasamos los géneros a minúsculas, e incluye solo a aquellas que tengan el id (género)
            m.genre.toLowerCase().includes(id.toString().toLowerCase())
            );
            // Actualiza la lista
            setMovies(filtradas);
        });
    }, [id]);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Stack.Screen options={{ title: `Genre: ${id}` }} />
        
        <FlatList
            data={movies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
            <Link href={`/movies/${item.id}`} style={{ padding: 10 }}>
                <CardMovie item={item} />
            </Link>
            )}
        />
        </View>
    );
    }

export default CategoryDetail;