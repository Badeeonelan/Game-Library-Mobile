import { Colors } from "@/shared/tokens";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
	return (<View style={styles.container}>
				<Text style={styles.text}>ПРООООФИЛЬ</Text>
			</View>)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.black
	},

	text: {
		fontSize: 16,
		fontFamily: 'FiraSans',
		color: '#FFF'
	}
})