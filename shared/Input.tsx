import { Pressable, StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { Colors } from "./tokens";
import { useState } from "react";
import TrueVisibility from "@/assets/icons/password-visibility/TrueVisibility";
import FalseVisibility from "@/assets/icons/password-visibility/FalseVisibility";

export default function Input(props: TextInputProps & { isPassword?: boolean }) {
	const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

	return (
		<View style={{width: '100%'}}>
			<TextInput 
				{...props} 
				style={styles.input} 
				secureTextEntry={props.isPassword && !isPasswordVisible}
				placeholderTextColor={Colors.gray}/>

			{props.isPassword && 
				<Pressable onPress={() => setIsPasswordVisible(state => !state)} style={styles.eyeIcon}>{isPasswordVisible ? <TrueVisibility/> : <FalseVisibility/>}</Pressable>
			}
		</View>
	);

}

const styles = StyleSheet.create({
	input: {
		color: '#E0E0E0',
		paddingHorizontal: 24,
		height: 58,
		width: '100%',
		backgroundColor: Colors.violetDark,
		fontSize: 16,
		lineHeight: 1.2,
		borderRadius: 10
	},

	eyeIcon: {
		position: 'absolute',
		right: 0,
		paddingHorizontal: 20,
		paddingVertical: 18
	}
})