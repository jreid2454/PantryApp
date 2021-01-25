import React from "react"
import Item from "./Item"
import "./Basic.css"

export default class Basic extends React.Component{
    constructor(){
        super()
        this.state = {
            list: [],
            tracker: 0
        }
    }

    addItem = () => {
        let plus = [<li key={this.state.tracker}><Item track={this.state.tracker} delete={this.deleteMeal}/></li>]
        this.setState({list: this.state.list.concat(plus)})
        this.setState({tracker: this.state.tracker + 1})
    }

    deleteMeal = (index) => {
        console.log("this is index: " + index)
        let hold = this.state.list;
        hold[index] = null
        console.log("this is hold: " + JSON.stringify(hold))
        this.setState({list: hold});
    }
   
    

    componentDidMount(){
        this.addItem();
    }

    render(){

        return(
            <div>
                <div className={"pic"} style={styles.header}><span><h1 className={"title"} style={styles.h1}><i>The Smart Grocery List</i></h1></span></div>
            <div style={styles.main}>
                <button className={"addMeal"} style={styles.button} onClick={() => {this.addItem()}}>Add a Meal!</button>
                <ul className={"containerUl"} style={styles.ul}>{this.state.list}</ul>
            </div>
            </div>
        )
    }
}

const styles = {
    header: {textAlign: "center", position: "absolute", top: '0'},
    h1: {margin: "5vh auto 0 auto", padding: "0", width: "35vw", color: " rgb(76, 6, 240)", fontFamily: "Sofia", fontSize: "5vh", backdropFilter: "blur(5px)", borderRadius: "50px"},
    main: {display: "flex", width: "100%", margin: "35vh 0 0 0", flexDirection: "column", alignItems: "center",},
    button: {flex: "0 0 10%", order: "1", width: "20vw", backgroundColor: "transparent", borderRadius: "25px", color: "rgb(235, 67, 55)", border: "1px solid rgb(235, 67, 55)", fontSize: "5vh", outline: "none"},
    ul: {flex: "7", order: "2", listStyleType: "none"}
}