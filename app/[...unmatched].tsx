import { Colors } from "@/shared/tokens"
import { StyleSheet, Text, View } from "react-native"
import Button from "@/shared/Button"
import { router } from "expo-router"

export default function Unmatched() {
	return (
		<View style={styles.errorBody}>
			<Text style={styles.errorText}>Some Unmatched Route</Text>
			<Text style={styles.errorDescription}>Something went wrong</Text>
			<Button buttonText='Back to main page' onPress={() => router.replace('/')}/>
		</View>
	)
}

const styles = StyleSheet.create({
	errorText: {
		color: "white",
		fontFamily: "FiraSansSemiBold",
		fontSize: 25
	},

	errorBody: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},

	errorDescription: {
		color: Colors.gray,
		fontFamily: "FiraSansSemiBold",
		fontSize: 19
	}
})