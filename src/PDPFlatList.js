import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useCallback} from 'react';
import PDPItemLayoutData from './mock/PDPItemLayoutData.json';
import {PDPRowHeightMap} from './constants';
import Row from './Row';
import YmalPairRow from './components/YmalPairRow';

export const cellHeightCache = [];

// const CellWrapper = (props: {
//   [key: string]: unknown;
//   item: any;
//   onLayout?: any;
// }) => {
//   const onLayout = (e: LayoutChangeEvent) => {
//     try {
//       const data = props.item;
//       cellHeightCache.push(e.nativeEvent.layout.height);
//       if (cellHeightCache.length === 10) {
//         return;
//       }
//       console.log(cellHeightCache)
//       // cellHeightCache.set(key, e.nativeEvent.layout.height);
//     } catch (err) {
//       console.error(err);
//     }
//     props.onLayout?.(e);
//   };
//   return <View {...props} onLayout={onLayout} />;
// };

export default function PDPFlatList() {
  const renderItem = useCallback(({item, index}) => {
    if (item.uiType === 'ymal_row') {
      return <YmalPairRow item={item} index={index} />;
    }
    return <Row item={item} index={index} />;
  }, []);

  // Average item size from the first render: 88
  // const heightFirstRender = [360, 114, 52, 28, 52, 52, 52, 28, 54];
  // const average = heightFirstRender.reduce((a, b) => a + b, 0) / heightFirstRender.length;
  // console.log({
  //   average
  // })

  const data = PDPItemLayoutData;
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      initialNumToRender={10}
      // windowSize={10} // current PDP config
      // maxToRenderPerBatch={3} // current PDP config
      style={{flex: 1}}
      // CellRendererComponent={CellWrapper}
    />
  );
}

export const styles = StyleSheet.create({
  image: {
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
});
