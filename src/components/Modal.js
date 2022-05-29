import React from 'react';
import Modal from 'react-native-modal';

const ActionModal = ({isModalVisible, setIsModalVisible, children}) => {
  return (
    <Modal
      isVisible={isModalVisible}
      hasBackdrop={true}
      animationIn="zoomIn"
      animationOut="zoomOut"
      onBackdropPress={() => setIsModalVisible(false)}>
      {children}
    </Modal>
  );
};

export default ActionModal;
