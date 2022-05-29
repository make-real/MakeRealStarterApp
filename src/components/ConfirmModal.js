import React, {Component} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import Text from 'components/common/Text';
import Modal from 'react-native-modal';
import {theme} from 'styles/global';
import GButton from './GButton';

class ConfirmModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  cancel() {
    this.setState({
      isModalVisible: false,
    });
    this.props.onCancel && this.props.onCancel();
  }

  open() {
    this.setState({
      isModalVisible: true,
    });
  }

  confirm() {
    this.setState({
      isModalVisible: false,
    });
    this.props.onConfirm();
  }

  render() {
    return (
      <Modal isVisible={this.state.isModalVisible}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.modal}>
            <View style={{flex: 1}}>
              <Text style={{textAlign: 'center'}} bold>
                {this.props.message}
              </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <GButton
                onPress={() => this.cancel()}
                gradient={[theme.colors.darkGrey100, theme.colors.darkGrey100]}
                style={{height: 40}}>
                {this.props.noText || 'No'}
              </GButton>
              <Text>{'  '}</Text>
              <GButton onPress={() => this.confirm()} style={{height: 40}}>
                {this.props.yesText || 'Yes'}
              </GButton>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    width: '90%',
    height: 150,
    borderRadius: 20,
    padding: 20,
    backgroundColor: theme.colors.darkGrey500,
  },
});

export default ConfirmModal;
