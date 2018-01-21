
import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
interface Props {} // 1
interface State { // 2
    message: string
}
export default class App extends Component<Props, State> { // 3
    state = { message: 'World' } // 4

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Hello {this.state.message}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
