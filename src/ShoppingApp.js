import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import AddItem from './containers/AddItem'
import VisibleItems from './containers/VisibleItems'

export default class Shopping extends Component {

  state = {
    items: []
  }


  render() {
    return (
      <View style={styles.container}>
        <AddItem/>

        <View>
            <VisibleItems/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    }
})