import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="movies/index" options={{ title: 'Movies' }} />
        <Stack.Screen name="movies/[id]" options={{ title: 'Movie Details' }} />

        <Stack.Screen name="categories/index" options={{ title: 'Categories' }} />
        <Stack.Screen name="categories/[id]" options={{ title: 'Genre' }} />
      </Stack>
    </SafeAreaProvider>
  );
}
