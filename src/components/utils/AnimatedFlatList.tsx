import * as React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

export default function AnimatedFlatList({
    data,
    ChildComponent,
}: {
    data: any;
    ChildComponent: any;
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
                maxToRenderPerBatch={5}
                renderItem={({ item, index }) => (
                    <AnimatedItem
                        item={item}
                        index={index}
                        ChildComponent={ChildComponent}
                        scrollY={scrollY}
                    />
                )}
            />
        </View>
    );
}

const AnimatedItem = ({ item, index, ChildComponent, scrollY }: any) => {
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
            <ChildComponent data={item} />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
