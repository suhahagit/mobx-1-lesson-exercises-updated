import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {  
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = (name) => {
    let newLocation = prompt("enter new location")
    if(newLocation != null){
      this.props.store.editItem(name, newLocation)
    }
  }
  deleteItem = (name) => {
    this.props.store.deleteItem(name)
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        name: {item.name} location: {item.location}
        <input type="checkbox" value={item.name} onClick = {this.checkItem}/>
        <button className = "editButton" onClick = {() => this.editItem(item.name)}>edit location</button>
        <button onClick = {() => this.deleteItem(item.name)}>delete</button>
      </div>)
  }
}

export default observer(Item)