import React, { Component } from 'react';
import {Text, View, Button } from 'react-native';
import { Link, Redirect } from 'react-router-native';
import InventoryItemProvisions from '../components/InventoryItemProvisions'

export default class Provisions extends Component {
  displayItems(){
   return(
      this.props.items.map( (item, i) => {
        if (item.type === "Provisions" && item.stored === false)
       return (
         <InventoryItemProvisions
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
