import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [showSenha, setShowSenha] = useState(false);
    const [mensagem, setMensagem] = useState('');

    const handleChange = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.password) {
            Alert.alert("Todos os campos devem ser preenchidos");
            return;
        }
        try {
            const response = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro na solicitação: ' + response.statusText);
            }

            const data = await response.json();
            setMensagem("Cadastro realizado com sucesso!");
            setFormData({
                name: '',
                email: '',
                password: '',
            });
        } catch (error) {
            console.error(error);
            setMensagem("Houve um erro ao realizar o cadastro.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.saldoContainer}>
                <Text style={styles.label}>Sign up</Text>
            </View>
            <View style={styles.saldoContainer}>
            <p className='texto'>Name</p>
                <View style={styles.inputContainer}>
                   
                    <TextInput
                        style={styles.input}
                        value={formData.name}
                        onChangeText={(text) => handleChange('name', text)}
                    />
                   
                </View>
            </View>
            <View style={styles.saldoContainer}>
            <p className='texto'>Email</p>
                <View style={styles.inputContainer}>
                
                    <TextInput
                        style={styles.input}
                        keyboardType="email-address"
                        
                        value={formData.email}
                        onChangeText={(text) => handleChange('email', text)}
                    />
                    
                </View>
            </View>
            <View style={styles.saldoContainer}>
            <p className='texto'>Password</p>
                <View style={styles.inputContainer}>
               
                    <TextInput
                        style={styles.input}
                        
                        value={formData.password}
                        onChangeText={(text) => handleChange('password', text)}
                        secureTextEntry={showSenha}
                    />
                    <TouchableOpacity style={styles.icon} onPress={() => setShowSenha(!showSenha)}>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.formButton}>
                <Pressable style={styles.buttoncadastro} onPress={handleSubmit}>
                    <Text style={styles.cadastro}>Sign Up</Text>
                </Pressable>
                <Pressable style={styles.buttongoogle}>
                    <Text style={styles.google}>Continue with Google</Text>
                </Pressable>
            </View>
            {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    }, 
    label: {
        alignItems: 'center',
        fontSize: 30,
        margin: 30,
    },
    formButton: {
        marginTop: 110,
        flexDirection: 'column',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        backgroundColor: '#C9C9C9',
        marginBottom:10
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 10,
        
    },
    buttoncadastro: {
        width: 300,
        height: 50,
        backgroundColor: '#67d6ff',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginTop:-70
    },
    buttonText: {
        fontSize: 30,
        textAlign: 'center',
    },
    cadastro: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    buttongoogle: {
        width: 300,
        height: 50,
        backgroundColor: '#67d6ff',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        elevation: 3,
    },
    google: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    mensagem: {
        fontSize: 16,
        color: 'red',
        marginTop: 10,
    },
    texto:{
        
    }
});