import {View, Text, useWindowDimensions, Image} from 'react-native';
import React, { memo, useCallback, useEffect } from 'react';
import { PDPRowHeightMap } from './constants';

function Row({item, index}) {
  useEffect(() => {
    console.log(`Row::${index} mount`);
    return () => {
      console.log(`Row::${index} unmount`);
    }
  }, []);

  const windowWidth = useWindowDimensions().width;
  const imageStyle = {width: windowWidth, height: windowWidth};

  const renderItem = useCallback(({item, index}) => {
    const key = [item.id, item.uiType].join('::');
    const height = PDPRowHeightMap[key]
      ? Math.floor(PDPRowHeightMap[key])
      : 270;

    if (item.uiType === 'product_images_carousel') {
      const imageSource =
        'https://img.sp.mms.shopee.co.id/8a4f375d3f8c78401a232dc20aa9f8ff';
      return (
        <View style={[imageStyle, {backgroundColor: 'red'}]}>
          <Image
            source={{
              uri: imageSource,
            }}
            style={imageStyle}
          />
        </View>
      );
    }

    return (
      <View
        style={{
          marginVertical: 2,
          backgroundColor: 'white',
          padding: 12,
          height: height,
        }}>
        <Text>{item.key}::{item.type}</Text>
      </View>
    );
  }, []);

  return renderItem({item, index});
}

export default memo(Row);