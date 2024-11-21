import { Pressable, View, Text, StyleSheet, PressableProps, Animated, GestureResponderEvent } from "react-native";
import { Colors } from "./tokens";

export default function Button(props: PressableProps & { buttonText: string }) {
	const AnimatedValue = new Animated.Value(1000);
	const color = AnimatedValue.interpolate({
		inputRange: [0, 1000],
		outputRange: [Colors.primaryHover, Colors.primary]
	})

	const fadeIn = (e: GestureResponderEvent) => {
		Animated.timing(AnimatedValue, {
			toValue: 0,
			duration: 200,
			useNativeDriver: true
		}).start();
		props.onPressIn && props.onPressIn(e)
	}

	const fadeOut = (e: GestureResponderEvent) => {
		Animated.timing(AnimatedValue, {
			toValue: 1000,
			duration: 200,
			useNativeDriver: true
		}).start();
		props.onPressIn && props.onPressIn(e)
	}

	

	return ( <Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
					<Animated.View 
						style={{...styles.button, backgroundColor: color}}>
						<Text style={styles.buttonText}>{props.buttonText}</Text>
			  		</Animated.View>
				</Pressable>
			 )
}

const styles = StyleSheet.create({
	button: {
		width: '100%',
		borderRadius: 10,
		padding: 15,
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
		marginTop: 15
	},

	buttonText: {
		fontSize: 16,
		color: '#fff'
	},
})