import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const itemSeparator = () => {
  return (
    <View style={{height: 0.5, width: '100%', backgroundColor: '#c8c8c8'}}/>
  )
}

const itemView = ({item}) => {
  return (
  <Text style={styles.itemStyle}>{item.text}</Text>
  )
}

const ItemList = ({ items }) => {
  return (
    <View style={{ padding:13 }}>
      {/* {console.log("items =>")}
      {console.log(items)} */}
        <FlatList
          style={{paddingLeft: 9}}
          data={items.filteredItems}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={itemSeparator}
          renderItem={itemView}
        />
    </View>
  )
}

export default ItemList

const styles = StyleSheet.create({
  itemStyle: {
    fontSize: 20,
    padding: 10
  },
})