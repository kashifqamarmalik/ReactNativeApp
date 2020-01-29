import React, {useContext} from 'react';
import { View, FlatList } from 'react-native';
import ListItem from './ListItem';
import {MediaContext, MediaProvider} from '../contexts/MediaContext';
import {getAllMedia} from "../hooks/APIHooks.js"

const List = () => {
  const [media, setMedia] = useContext(MediaContext);
  const [ data, loading] = getAllMedia ('https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json');
  console.log('List', data, loading);
  setMedia(data);
    return (
        <View style={{marginTop: 36}}>
            <FlatList
                data={media}
                keyExtractor = {(item, index) => index.toString()}
                renderItem= {({item}) => {
                    return (
                        <ListItem item={item} />
                    );
                }}
            />
        </View>
    );
};

export default List;
