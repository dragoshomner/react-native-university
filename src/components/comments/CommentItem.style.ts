import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    user: {
        marginLeft: 10,
        fontStyle: 'italic',
    },
    userIcon: {
        paddingRight: 10,
    },
    body: {
        marginTop: 10,
    },
});

export default styles;
