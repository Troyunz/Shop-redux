import { Text, StyleSheet, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { addFilteredItem, addItem, filterItem } from '../actions';
const COLORS = {primary: '#f2f2e1', white: '#eaeaea', red: '#de9595'};
const FRUITS = {0: 'Milk', 1:'Coffee', 2: 'Oranges', 3:'Bread'};

class AddItem extends Component {
    state = {
        text: '',
    }

    addItem = (text) => {
        this.props.dispatch(addItem(text))
        // this.props.dispatch(addFilteredItem(text))
        this.setState({text: ''})
        // Keyboard.dismiss()
    }

    randomGen() { 
        var num = Math.floor(Math.random() * (3));
        return FRUITS[num]
    }

    filterText(text) {
        // console.log(text)
        // this.props.dispatch(filterItem(text))
        // this.setState({text})
        if (text) {
            this.props.dispatch(filterItem(text))
            this.setState({text: text});
          } else {
            // this.setState(this.state)
            this.props.dispatch(filterItem(text))
            this.setState({text: text});
          }
    }

  render() {
    return (
      <View style={{flexDirection: 'row', marginHorizontal: 20}}>
        <TextInput
            onChangeText={(text) => this.filterText(text)}
            value={this.state.text} 
            placeholder='Enter Item ...' 
            style={styles.inputText}/>

        <TouchableOpacity onPress={() => this.addItem(this.randomGen())}>
            <View style={styles.addIcon}>
                <Ionicons name='md-add' size={30} 
                style={{color: COLORS.red, padding: 10}}/>
            </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(AddItem);

const styles = StyleSheet.create({
    inputText: {
        borderWidth: 1, 
        borderColor: COLORS.primary, 
        backgroundColor: COLORS.white, 
        height: 50, 
        borderRadius: 10,
        flex: 1, 
        padding: 5
    },
    addIcon: {
        height: 50, 
        borderRadius: 10,
        marginLeft: 5,
        backgroundColor: COLORS.white,
        alignItems: 'center', 
        justifyContent: 'center'
    },
})