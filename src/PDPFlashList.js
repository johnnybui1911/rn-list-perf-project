import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import {FlashList} from '@shopify/flash-list';
import PDPItemLayoutData from './mock/PDPItemLayoutData.json';
import {PDPRowHeightMap} from './constants';
import Row from './Row';
import YmalPairRow from './components/YmalPairRow';

const rowTypeMap = {};

export default function PDPFlashList() {
  const renderItem = useCallback(({item, index}) => {
    if (item.uiType === 'ymal_row') {
      return <YmalPairRow item={item} index={index} />;
    }
    return <Row item={item} index={index} />;
  }, []);

  const data = PDPItemLayoutData;
  return (
    <FlashList
      data={data}
      renderItem={renderItem}
      initialNumToRender={10}
      // windowSize={10}
      // maxToRenderPerBatch={3}
      estimatedItemSize={270} // 270 size of ymal row,  88 average size of 1st load rows
      getItemType={item => {
        // ensure never recycle items of different types, making the re-render faster
        // FlastList doesn't recycle for dynamic height row with different uiType
        // FlastList only recycle for fixed height row with same uiType like ymal_row -> performance booster
        return item.uiType; 
      }}
    />
  );
}
