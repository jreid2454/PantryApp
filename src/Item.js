import React from "react"
import * as util from 'util' // has no default export
import { inspect } from 'util' // or directly i.e util.inspect(item)
import DeleteIcon from "./Delete.png"
import "./Basic.css"

export default class Item extends React.Component{
    constructor(){
        super()
        this.state = {
            list: [],
            cost: 0,
            tracker: 0,
        }
        this.refTracker = []
    }

    addToList = () => {
        let count = 0
        for (let i = 0; i < this.state.list.length; i++){
            let itemCost = this.refTracker[i].current.value;
            let parsed = parseInt(itemCost);
            if(parsed !== parsed){
                count = count
            } else {
                count = count + parsed;
            }   
        }
        this.setState({cost: count})
    }

    addNewRef = () => {
        let newRef = React.createRef();
        this.refTracker.push(newRef);
    }

    addItem = () => {
        this.addNewRef()
        let plus = [<li className={"subItemLi"} style={styles.li}><input className={"ingredient"} style={styles.ingredient} placeholder={"Ingredient"}/>$<input className={"cost"} placeholder={"Cost"} style={styles.cost} onChange={() => {this.addToList()}} ref={this.refTracker[this.state.tracker]}/></li>]
        this.setState({tracker: this.state.tracker + 1})
        this.setState({list: this.state.list.concat(plus)})
    }

    deleteItem = () => {
        let holder = this.state.list;
        holder.pop();
        this.refTracker.pop();
        if (this.state.tracker == 0){
            return true;
        } else {
            this.setState({tracker: this.state.tracker - 1});
        }
        this.setState({list: holder});
        this.addToList();
    }

    handleDelete = (item) => {      console.log("ran the handle delete")
        this.props.delete(item);
    }

    render(){

        return(
            <div>
                <div style={styles.top}>
                    <img src={DeleteIcon} onClick={() => {this.handleDelete(this.props.track)}} style={styles.delete}/>
                    <input className={"mealName"} style={styles.name}placeholder={"Meal Name"}></input>
                    <p className={"total"} style={styles.total}>${this.state.cost}</p> 
                    <button style={styles.add} onClick={() => {this.addItem()}}>+</button> 
                    <button style={styles.minus} onClick={() => {this.deleteItem()}}> - </button>
                </div>
                <div>
                    <ul style={styles.list}>{this.state.list}</ul>
                </div>
                
            </div>
        )
    }
}

const styles = {
    top: {display: "flex", margin: "10px", alignItems: "flex-end"},
    delete: {minHeight: "2vh", maxHeight: "3vh", minWidth: "1vw", maxWidth: "4vw", margin: "0 2vw 0 0"},
    name: {width: "30vw", height: "5vh", fontSize: '4vh', fontWeight: "bold", backgroundColor: "transparent", border: "none", borderBottom: '2px solid rgb(235, 67, 55)', outline: "none"},
    total: {width: "5vw", height: "3vh", fontSize: "3vh", fontWeight: "bold", padding: "0 .5vw", margin: "0 0 0 1vw", color: "rgb(235, 67, 55)", border: "1px solid rgb(235, 67, 55)", overflow: "hidden"},
    add: {border: "none", backgroundColor: "transparent", color: "rgb(76, 6, 240)", fontSize: '5vh', fontWeight: "bold", outline: "none", height: "4vh"},
    minus: {border: "none", backgroundColor: "transparent", color: "rgb(235, 67, 55)", fontSize: '5vh', fontWeight: "bold", outline: "none", height: "4vh"},
    list: {listStyleType: 'none', padding: "0"},
    li: {margin: "0 0 2vh 0", padding: "0", width: "30vw", height: "5vh", fontSize: "3vh", margin: "auto", color: "rgb(235, 67, 55)"},
    ingredient: {width: "20vw", fontSize: "3vh", margin: "0 2vw 0 0", backgroundColor: "transparent", border: "none", borderBottom: '2px solid rgb(235, 67, 55)', outline: "none"},
    cost: {width: "5vw", fontSize: "3vh", backgroundColor: "transparent", border: "none", borderBottom: '2px solid rgb(235, 67, 55)', outline: "none", overflow: "hidden"}
}