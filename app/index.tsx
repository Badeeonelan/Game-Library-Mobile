import Input from '@/shared/Input';
import { Colors } from '@/shared/tokens';
import {Dimensions, StyleSheet, Text, View, Pressable, Image, Alert, Platform, ToastAndroid } from 'react-native';
import Button from '@/shared/Button';
import AlertError from '@/shared/AlertError/AlertError';
import { useState } from 'react';
import { Link } from 'expo-router';

export default function AppMain() {
	const [isAlertActive, setIsAlertActive] = useState(false);

	const showAndHideAlert = () => {
		setIsAlertActive(val => !val)
		setTimeout(() => {
			setIsAlertActive(val => !val)
		}, 3000);
	}

	const alert = () => {
		if (Platform.OS === 'android') {
			ToastAndroid.showWithGravity('Ошибочка', ToastAndroid.SHORT, ToastAndroid.CENTER)
		} else if (Platform.OS === 'ios') {
			Alert.alert('Ошибка', 'Неверный логин или пароль')
		}
	}

	return (
		<View style={styles.container}>
			<AlertError isActive={isAlertActive}/>
			<View style={styles.content}>
				<View style={styles.header}>
					<Image source={require('./../assets/images/gamepad.png')} style={styles.logo} resizeMode='contain'/>
					<Text style={styles.headerText}>My Library</Text>
				</View>
				<Input placeholder='Email' isPassword={false}/>
				<Input placeholder='Пароль' isPassword={true}/>

				<Button buttonText='Войти' onPress={showAndHideAlert}/>
				<Link href={'/restore'}><Text style={styles.reset}>Восстановить пароль</Text></Link>
			</View>
		</View>
	);
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.black,
		// color: '#E0E0E0',
		flex: 1
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
		alignSelf: 'center'
	},

	headerText: {
		color: '#fff',
		fontSize: 28,
		fontWeight: 'bold',
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