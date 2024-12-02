import Input from '@/shared/Input';
import { Colors } from '@/shared/tokens';
import {Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import Button from '@/shared/Button';
import AlertError from '@/shared/AlertError/AlertError';
import { useEffect, useState } from 'react';
import { Link, router } from 'expo-router';
import { useAtom } from 'jotai';
import { loginAtom } from '@/entities/auth/model/auth.state';

export default function Login() {
	const [isAlertActive, setIsAlertActive] = useState<string | undefined>();
	const [inputData, setInputData] = useState({
		username: '',
		password: ''
	});
	const [{ access_token, isLoading, error }, login] = useAtom(loginAtom);

	const showAndHideAlert = (text: string) => {
		setIsAlertActive(text)
		setTimeout(() => {
			setIsAlertActive(undefined)
		}, 2000);
	}

	// const alert = () => {
	// 	if (Platform.OS === 'android') {
	// 		ToastAndroid.showWithGravity('Ошибочка', ToastAndroid.SHORT, ToastAndroid.CENTER)
	// 	} else if (Platform.OS === 'ios') {
	// 		Alert.alert('Ошибка', 'Неверный логин или пароль')
	// 	}
	// }

	const submit = () => {
		if (!inputData.password) {
			showAndHideAlert('Не введен пароль')
		} 

		if (!inputData.username) {
			showAndHideAlert('Не введен email')
		}

		login(inputData)
	}

	useEffect(() => {
		if (access_token) {
			router.replace('/')
		}
	}, [access_token])

	return (
		<View style={styles.container}>
			<AlertError isActive={isAlertActive}/>
			<View style={styles.content}>
				<View style={styles.header}>
					<Image source={require('./../assets/images/gamepad.png')} style={styles.logo} resizeMode='contain'/>
					<Text style={styles.headerText}>My Library</Text>
				</View>
				<Input value={inputData.username} placeholder='Email' isPassword={false} onChangeText={(e) => setInputData(prev => {
					return {...prev, username: e}
				})}/>
				<Input value={inputData.password} placeholder='Пароль' isPassword={true} onChangeText={(e) => setInputData(prev => {
					return {...prev, password: e}
				})}/>

				<Button buttonText='Войти' onPress={submit} isLoading={isLoading}/>
				<Link href={'/hjgkjhg'} style={styles.reset}><Text>Восстановить пароль</Text></Link>
			</View>
		</View>
	);
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},

	content: {
		width: (width / 1.5),
		rowGap: 10,
		alignItems: 'stretch'
	},

	header: {
		marginBottom: 30,
		flexDirection: 'row',
		columnGap: 10,
		alignItems: 'center',
		alignSelf: 'center',
	},

	headerText: {
		color: '#fff',
		fontSize: 27,
		fontFamily: 'FiraSansSemiBold'
	},

	logo: {
		width: 50
	},

	reset: {
		marginTop: 10,
		color: Colors.link,
		alignSelf: 'center'
	}
})