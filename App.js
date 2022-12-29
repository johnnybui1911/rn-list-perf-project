import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import PDPFlatList from './src/PDPFlatList';
import PDPFlashList from './src/PDPFlashList';

export default function App() {
  const [useFlashList, setUseFlashList] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      {useFlashList ? (
        <TouchableOpacity onPress={() => setUseFlashList(false)}>
          <View style={{backgroundColor: 'green', padding: 12}}>
            <Text>Flash - PDP</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setUseFlashList(true)}>
          <View style={{backgroundColor: 'yellow', padding: 12}}>
            <Text>FlatList - PDP</Text>
          </View>
        </TouchableOpacity>
      )}
      {useFlashList ? <PDPFlashList /> : <PDPFlatList />}
    </View>
  );
}
