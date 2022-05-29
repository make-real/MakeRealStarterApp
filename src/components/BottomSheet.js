import React, {useCallback, useMemo, useRef, useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import RNBottomSheet from '@gorhom/bottom-sheet';
import { theme } from 'styles/theme';

const BottomSheet = ({
  children,
  modalRef,
  onClose = () => {},
  fullScreen = [],
  contentContainerStyle,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const modal = useRef(null);
  useEffect(() => {
    modalRef.current = modal.current;
  }, []);
  const snapPoints = useMemo(() => [1, 280, ...fullScreen], []);
  const handleSheetChanges = useCallback(index => {
    if (index === -1) {
      onClose(index);
      setIsModalVisible(false);
    } else {
      setIsModalVisible(true);
    }
  }, []);
  return (
    <>
      {isModalVisible && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => modal?.current?.close()}
          style={styles.cover}
        />
      )}
      <RNBottomSheet
        ref={modal}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundComponent={() => null}
        handleComponent={() => null}
        enablePanDownToClose={true}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <View style={{...styles.contentContainer, ...contentContainerStyle}}>
          <View style={styles.drop} />
          {children}
        </View>
      </RNBottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  cover: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'background: rgba(70, 55, 202, 0.59)',
  },
  drop: {
    width: 60,
    height: 5,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    alignItems: 'center',
    backgroundColor: theme.colors.white
  },
});

export default BottomSheet;
