import {View, TextInput} from 'react-native';
import React, {FC, useState} from 'react';
import {getHeight} from '../../Theme/Constants';
interface TextInputBoxInterFace {
  placeHolder?: string;
}
const TextInputBox: FC<TextInputBoxInterFace> = ({
  placeHolder = 'Enter value',
}) => {
  const [value, setValue] = useState<any>('');
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: '98%',
        alignSelf: 'center',
        height: getHeight(15),
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        borderColor: '#DCDCDC',
        paddingLeft: '5%',
        paddingRight: '5%',
        marginBottom: 10,
      }}>
      <TextInput
        value={value}
        style={{fontSize: getHeight(60)}}
        onChange={text => setValue(text)}
        placeholder={placeHolder}
      />
    </View>
  );
};

export default TextInputBox;
