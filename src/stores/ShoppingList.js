/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'

export class ShoppingList {
   constructor() {
        this.list = []
        this.length = this.list.length

        makeObservable(this, {
            list: observable, 
            length: observable,
            checkItem: action,
            addItem: action,
            editItem: action,
            deleteItem: action
        })
    }
    checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    } 
    addItem = (name) => {
        let item = new Item(name)
        this.list.push(item)
    }
    editItem = (name, newLocation) => {
        let item = this.list.find(i => i.name === name)
        item.location = newLocation
    }
    deleteItem = (name) => {
        let item = this.list.findIndex(i => i.name === name)
        this.list.splice(item, 1)
    }
}
