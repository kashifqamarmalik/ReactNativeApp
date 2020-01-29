import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import List from './components/List';
import {MediaContext, MediaProvider} from './contexts/MediaContext';

const mediaArray = [

];

const App = () => {
  return (
    <MediaProvider>
    <List mediaArray={mediaArray} />
    </MediaProvider>
  );
};
export default App;
