import { View, Text, useWindowDimensions, Image } from 'react-native'
import React, { memo, useEffect } from 'react'

function YmalPairRow({ item, index }) {
  useEffect(() => {
    console.log(`YmalPairRow::${index} mount`);
    return () => {
      console.log(`YmalPairRow::${index} unmount`);
    }
  }, []);

  const windowWidth = useWindowDimensions().width;
  const size = Math.floor(windowWidth / 2) - 6;
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 4,
        height: 270,
        maxHeight: 270,
        justifyContent: 'space-around',
      }}>
      {item.props.pair.map((ymalItem, ymalIndex) => {
        const imageSource = `https://img.sp.mms.shopee.co.id/${ymalItem.image}`;
        return (
          <View
            key={ymalIndex} // needed for FlashList
            // key={ymalItem.itemid}
            style={{
              backgroundColor: 'white',
              width: size,
            }}>
            <Image
              resizeMode="center"
              source={{uri: imageSource}}
              style={{width: size, height: size, backgroundColor: 'grey'}}
            />
            <View style={{flex: 1, padding: 12}}>
              <Text numberOfLines={2}>{ymalItem.name}</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 16}}>
                  Rp{String(ymalItem.price).substring(0, 5)}
                </Text>
                <Text style={{fontSize: 12}}>{ymalItem.sold} terjual</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

export default memo(YmalPairRow);