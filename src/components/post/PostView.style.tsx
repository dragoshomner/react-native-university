import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        paddingHorizontal: 20,
        width: '100%',
    },
    title: {
        marginVertical: 10,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderLeftColor: 'orange',
        borderLeftWidth: 3,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        lineHeight: 25,
    },
    content: {
        marginVertical: 10,
        marginTop: 20,
        lineHeight: 25,
    },
});

export default styles;
