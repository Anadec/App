import React from "react";
import { Text, View, Image, TextInput, Button, StyleSheet } from "react-native";
import { Link } from 'expo-router';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Image: {
        margin: 30,
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    navbar: {
        backgroundColor: '#ffaff9',
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold'
    },
    desc: {
        margin: 20,
        textAlign: 'justify',
        fontSize: 20
    },
    botao: {
        marginTop:50,
        textAlign:'center',
        borderRadius:10,
        padding:20,
        width:150,
        backgroundColor: '#ffaff9',
        fontWeight: 'bold'
    },
    box2:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'

    }


})

export default Sobre = function () {
    return (
        <View>
            <View style={style.navbar}>
                <Text style={style.title}>Meu app</Text>
            </View>
            <View style={style.box}>
                <Image
                    style={style.Image}
                    source={require('../../../assets/images/eu.png')}
                />
                <Text style={style.desc}>
                Me chamo Ana Luiza, tenho 17 anos, moro em São José ( Santa Catarina ) 
                e estou no terceiro ano do ensino médio na Escola S ( Sesi Senai ), 
                estou cursando desenvolvimento de sistemas, porque é uma área que tenho interesse. 
                Nesta página compartilho alguns lugares que já visitei e os meus filmes favoritos.

                </Text>
            </View>
            <View style={style.box2}>
                <Link href="../tela2/Viagens" style={style.botao}>
                    <Text>Viagens</Text>
                </Link>
                <Link href="../tela3/Filmes" style={style.botao}>
                    <Text >Filmes</Text>
                </Link>
            </View>
        </View>
    );
};