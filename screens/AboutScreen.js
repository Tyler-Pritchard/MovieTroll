import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

function Mission() {
    return (
        <Card>
            <Card.Title>Our Mission</Card.Title>
            <Card.Divider />
            <Text style={{ margin: 10 }}>
                lorem ipsum
            </Text>
        </Card>
    );
}

const AboutScreen = () => {
    return (
        <ScrollView>
            <Animatable.View
                animation='fadeInDown'
                duration={2000}
                delay={1000}
            >
                <Mission />
            </Animatable.View>
        </ScrollView>
    );
};

export default AboutScreen;
