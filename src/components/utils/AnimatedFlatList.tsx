import * as React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { AuthorItem } from '../author/AuthorItem';
import { PostItem } from '../post/PostItem';

export default function AnimatedFlatList({
    data,
    childComponentType,
}: {
    data: any;
    childComponentType: any;
}) {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
            <Animated.FlatList
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true },
                )}
                data={data}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <AnimatedItem
                        item={item}
                        index={index}
                        childComponentType={childComponentType}
                        scrollY={scrollY}
                    />
                )}
            />
        </View>
    );
}

const AnimatedItem = ({ item, index, childComponentType, scrollY }: any) => {
    const inputRange = [-1, 0, 140 * index, 140 * (index + 3)];
    const scale = 1;
    const opacity = scrollY.interpolate({
        inputRange,
        outputRange: [1, 1, 1, 0],
    });
    const Offset = scrollY.interpolate({
        inputRange,
        outputRange: [0, 0, 0, 500],
    });

    return (
        <Animated.View
            style={{
                transform: [{ scale: scale }, { translateX: Offset }],
                opacity: opacity,
            }}>
            {childComponentType === 'post' ? (
                <PostItem data={item} />
            ) : (
                <AuthorItem data={item} />
            )}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
