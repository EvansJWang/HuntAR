import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import InventoryItemFortifications from '../components/InventoryItemFortifications'

export default class Fortifications extends Component {
  displayItems(){
   return(
      this.props.items.map( (item, i) => {
        if (item.type === "Fortifications" && item.stored === false)
       return (
         <InventoryItemFortifications
           key={i}
           item={item}
         />
      )}))}
  render() {
    return (
      <View>
        {this.displayItems()}
      </View>
    )
  }
}
