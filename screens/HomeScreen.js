import { useEffect, useRef } from 'react';
import { Text, Animated } from 'react-native';

const HomeScreen = () => {
    const scaleValue = useRef(new Animated.Value(0)).current;
    const scaleAnimation = Animated.timing(scaleValue, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true
    });

    useEffect(() => {
        scaleAnimation.start();
    }, []);

    return (
        <Animated.ScrollView style={{ transform: [{ scale: scaleValue }] }}>
            <Text>Content goes here</Text>
        </Animated.ScrollView>
    );
};

export default HomeScreen;
