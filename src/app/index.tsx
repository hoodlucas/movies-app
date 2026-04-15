import React from 'react';
import { Button } from 'react-native';
import Screen from '@/components/ui/Screen';
import { useRouter } from "expo-router";

export default function Home() {

  const router = useRouter()

  return (
    <Screen>
      <Button title='Movies' onPress={()=>router.push("/movies")}/>
      <Button title='Categories' onPress={()=>router.push("/categories")}/>
    </Screen>
  );
}
