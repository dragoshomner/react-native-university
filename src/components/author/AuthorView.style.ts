import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        width: '100%',
    },
    title: {
        marginVertical: 10,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderLeftColor: 'blue',
        borderLeftWidth: 2,
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
    authorDetail: {
        marginLeft: 10,
        fontStyle: 'italic',
    },
    authorIcon: {
        paddingRight: 10,
    },
    address: {
        marginTop: 20,
        padding: 10,
        borderRadius: 4,
        backgroundColor: 'white',
    },
    postsContainer: {
        marginTop: 20,
    },
    postTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default styles;
