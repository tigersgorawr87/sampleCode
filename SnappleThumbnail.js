import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const SnappleThumbnail = ( {presnappleThumbnailPath, onPress, index, width, height} ) => {
  //console.log(index)
  if (onPress) {
    return (
      <View style = {{
        position: 'relative',
        flex: .6,
        justifyContent: 'center',
        width: (width-30),
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#071947',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#191919',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 1,
        elevation: 1,
        minHeight: (height-80)
      }}>
        <TouchableOpacity onPress={() => onPress(index)}>
          <Image
            style={{height: height+60, width: width-16, borderRadius: 15}}
            source={{uri: presnappleThumbnailPath}}
          />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View>
        <Image
          style={{height: (height+60), width: (width-16), borderRadius: 15}}
          source={{uri: presnappleThumbnailPath}}
        />
      </View>
    )
  }
}

export default SnappleThumbnail;
