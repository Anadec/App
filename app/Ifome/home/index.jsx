import React, { useContext,useState, useEffect } from "react";
import { View, Text, Pressable, Image, StyleSheet, FlatList } from "react-native-web";
import { AppContext, AppProvider } from "../../../scripts/appContext";
import { Link } from "expo-router";

const produtos = [
    {
        id: '1',
        nome: 'Big Mac',
        estabelecimento: 'McDonalds - Kobrasol',
        preco: 32.90,
        imagem: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQqeGVTRod0xg7SY_bvCxL4fF2GZc8pPws_LiEogJVrFF0YoP-J',
    },
    {
        id: '2',
        nome: 'Coxinha do Jefferson',
        estabelecimento: 'Jeff Lanchonete',
        preco: 3.99,
        imagem: 'data:image/jpeg;base64,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',
    },
    {
        id: '3',
        nome: 'Hot Dog',
        estabelecimento: 'Paulão Hot Dog',
        preco: 23.72,
        imagem: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLHngUkzilYqMRVMjubMuaOnVfy3m_gHJl8-v34CQqFWMYRGcU',
    },
];

export default function App() {
    const { cart, setCart } = useContext(AppContext)
    const [cartLenght, setCartLength] = useState(0)

    function pushCart(item) {
        setCart([...cart, item])
        console.log(cart)
    }

    const renderItem = ({ item }) => (
        <View style={styles.produtoContainer}>
            <Image source={{ uri: item.imagem }} style={styles.produtoImagem} />
            <View style={styles.produtoInfo}>
                <Text style={styles.produtoNome}>{item.nome}</Text>
                <Text style={styles.produtoEstabelecimento}>{item.estabelecimento}</Text>
                <Text style={styles.produtoPreco}>R${item.preco.toString().replace('.', ',')}</Text>
                <Pressable style={styles.comprarButton} onPress={() => pushCart(item)}>
                    <Text style={styles.comprarButtonText}>Comprar</Text>
                </Pressable>
            </View>
        </View>
    );

    useEffect(() => { if (cart.length) { setCartLength(cart.length); } console.log(cart.length) }, [cart])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>iFome</Text>
            </View>
            <View style={styles.carrinho}>
                <Link href={'../cart'}><Image
                    source={{ uri: '../../assets/images/cart.png' }}
                    style={styles.carrinhoImagem}
                /></Link>

                <Text style={styles.carrinhoTexto}>{`${cartLenght} produtos`}</Text>
            </View>
            <FlatList
                data={produtos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.flatList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff3131',
    },
    headerText: {
        fontSize: 24,
        color: '#fff',
    },
    carrinho: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#f0f0f0',
        justifyContent: 'flex-end'
    },
    carrinhoImagem: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    carrinhoTexto: {
        fontSize: 16,
    },
    flatList: {
        marginTop: 10,
    },
    produtoContainer: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    produtoImagem: {
        width: 100,
        height: 100,
        marginRight: 15,
    },
    produtoInfo: {
        flex: 1,
    },
    produtoNome: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    produtoEstabelecimento: {
        fontSize: 14,
        color: '#666',
    },
    produtoPreco: {
        fontSize: 16,
        color: '#000',
        marginVertical: 5,
    },
    comprarButton: {
        backgroundColor: '#ff3131',
        padding: 10,
        borderRadius: 5,
    },
    comprarButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
});