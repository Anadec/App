import React from 'react';
import { Image, Modal, StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import Button from './button';
import { useState } from 'react';
import Input from './text';

function Index() {
    const [conta, setConta] = useState(7320.92)
    const [valor, setValor] = useState('0')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const [type, setType] = useState('')

    const handleButton = (tipo) => {
        const Valor = parseFloat(valor.replace(',', '.'))
        if (Valor > conta && tipo === 'saque') {
            alert('saldo indisponível')
        }
        else {
            setIsModalOpen(true)
            setType(tipo)
            return
        }
    }
    const handleConfirm = () => {
        setConfirm(true)
        Transacao(type)
    }
    const Transacao = (tipo) => {
        const Valor = parseFloat(valor.replace(',', '.'))
        switch (tipo) {
            case 'saque':
                const multa = (conta - Valor) * 0.025
                setConta(conta - Valor - multa)
                break;

            case 'deposito':
                const bonus = Valor * 0.01
                setConta(conta + Valor + bonus)
                break;

            default:
                break;
        }
        setValor('0')
        setIsModalOpen(!isModalOpen)
    }

    const valorFinal = () => {
        const Valor = parseFloat(valor.replace(',', '.'));
        if (type === 'saque') {
            let imposto = valor * 0.025
            return conta - Valor - imposto;
        }
        if (type === 'deposito') {
            let bonus = Valor * 0.01
            return conta + Valor + bonus;
        }
        return conta;
    };


    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={('https://logosmarcas.net/wp-content/uploads/2020/11/Santander-Logo.png')}
            />
            <Text style={styles.titulo}>Saldo atual na conta</Text>
            <Text style={styles.conta}>R${conta.toFixed(2).replace('.', ',')}</Text>
            <Text style={styles.p}>Digite o valor abaixo e escolha uma das operações bancárias:</Text>
            <Input
                value={valor}
                onChangeNumber={setValor}
                keyboardType = "numeric"
                placeholder='Digite um numero'
            />
            <Button
                title={'Sacar'}
                onPress={() => { handleButton('saque') }}
            />
            <Button
                title={'Depositar'}
                onPress={() => { handleButton('deposito') }}
            />
            <Modal
                animationType='slide'
                transparent={true}
                visible={isModalOpen}
                onRequestClose={() => {
                    setIsModalOpen(!isModalOpen)
                }}
            >
                <View style={styles.center}>
                    <View style={styles.modalBody}>
                        <View style={styles.end}>
                            <Pressable
                                style={styles.closeBtn}
                                onPress={() => setIsModalOpen(!isModalOpen)}
                            ><Text>✖</Text></Pressable>
                        </View>
                        <View style={styles.center}>
                            <Text style={styles.p}>
                                Tem certeza que deseja realizar essa operação?
                            </Text>
                            <View style={styles.column}>
                                <Text>Valor Atual: R${conta.toFixed(2).replace('.', ',')}</Text>
                                <Text>Valor Final: R${valorFinal().toFixed(2).replace('.', ',')}</Text>
                            </View>
                            <View style={styles.confirm}>
                                <Pressable
                                    style={styles.confirmBnt}
                                    onPress={() => handleConfirm()}
                                ><Text>Confirmar</Text></Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        gap: 14,

    },
    logo: {
        width:300,
        height: 150
    },
    titulo: {
        color: '#919191',
        fontSize: 18,
        fontWeight: 'bold'
    },
    conta: {
        fontWeight: 'bold',
        fontSize: 36,
    },
    p: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#919191'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalBody: {
        backgroundColor: 'white',
        width: '84%',
        minHeight: 200,
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 8,
    },
    end: {
        alignItems: 'flex-end',
        marginBottom: 8,
    },
    closeBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        height: 25,
        fontWeight: 'bold'
    },
    column: {
        flexDirection: 'column',
        paddingVertical: 14
    },
    confirm: {
        alignItems: 'center',
        backgroundColor: '#EBEBEB',
        width: '100%',
        paddingVertical: 6,
        borderRadius: 4,
    },
    confirmBnt: {
        width: '100%',
        alignItems: 'center'
    }
})
export default Index;
