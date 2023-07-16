/* eslint-disable react-native/no-inline-styles */
import {View, Text, Modal, TextInput, TouchableOpacity} from 'react-native';
import React, {FC, useState} from 'react';
import Colors from '../../../Theme/Colors';
import {getHeight} from '../../../Theme/Constants';
interface QuantityInterface {
  isOpen: boolean;
  onClose(): void;
  onSubmit: any;
  value: string;
}
const QuantityModal: FC<QuantityInterface> = ({
  isOpen = false,
  onClose,
  onSubmit,
  value = '1',
}) => {
  const [count, setCount] = useState<any>(value);
  return (
    <Modal visible={isOpen} onRequestClose={() => onClose()} transparent>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.transparentBlack,
        }}>
        <View
          style={{
            flex: 0.25,
            width: '80%',
            borderRadius: 30,
            backgroundColor: Colors.white,
          }}>
          <View
            style={{
              height: '20%',
              backgroundColor: Colors.white,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: Colors.black,
                fontSize: getHeight(45),
                fontWeight: 'bold',
              }}>
              Choose Quantity
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: getHeight(25),
            }}>
            <TouchableOpacity
              onPress={() => setCount(Number(count) + 1)}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}>
              <Text style={{fontSize: getHeight(25)}}>+</Text>
            </TouchableOpacity>
            <TextInput
              editable={false}
              onChange={(text: any) => setCount(text)}
              value={count.toString()}
              keyboardType={'number-pad'}
              style={{
                fontSize: getHeight(35),
                alignItems: 'center',
                textAlign: 'center',
                flex: 2,
                height: getHeight(15),
                backgroundColor: Colors.backgroundGray,
                padding: 5,
                width: '40%',
                alignSelf: 'center',
              }}
            />
            <TouchableOpacity
              onPress={() =>
                setCount(Number(count) < 0 ? Number(count) - 1 : 1)
              }
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                flex: 1,
              }}>
              <Text style={{fontSize: getHeight(25)}}>-</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: getHeight(15),
              marginTop: 28,
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => {
                setCount(value);
                onClose();
              }}
              style={{
                width: '50%',
                backgroundColor: Colors.primary,
                borderBottomLeftRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: getHeight(45), color: Colors.white}}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onSubmit(count)}
              style={{
                width: '50%',
                backgroundColor: Colors.green,
                borderBottomRightRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: getHeight(45), color: Colors.white}}>
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default QuantityModal;
