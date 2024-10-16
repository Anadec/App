import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Link } from 'expo-router';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    textoT: {
        color: 'white',
        fontSize: 30,
    },
    texto: {
        color: 'white',
    },
});

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.textoT}>Selecione Seu Destino:</Text>
            </View>

            <Link href="/Signup">
                <Text style={styles.texto}>Cadastro</Text>
            </Link>

            <Link href="/Calculadora">
                <Text style={styles.texto}>Calculadora</Text>
            </Link>

            <Link href="/Splash-screen">
                <Text style={styles.texto}>Gradiente</Text>
            </Link>

            <Link href="/Lista">
                <Text style={styles.texto}>Lista</Text>
            </Link>

            <Link href="/Modal">
                <Text style={styles.texto}>Componentização</Text>
            </Link>

            <Link href="/Pokemon">
                <Text style={styles.texto}>Pokemon</Text>
            </Link>
            <Link href="./Pages/tela1/Sobre">
                <Text style={styles.texto}>Sobre mim</Text>
            </Link>
            <Link href="./Ifome/inicio">
                <Text style={styles.texto}>ifome</Text>
            </Link>
            <Link href="./Galeria">
            <Text style={styles.texto}>Galeria</Text>
            </Link>
            <Link href="./Camera">
                <Text style={styles.texto}>Camera</Text>
            </Link>
            <Link href="./Memories">
                <Text style={styles.texto}>Memories</Text>
            </Link>
        </View>
    );
}