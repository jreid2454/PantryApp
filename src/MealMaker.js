import React from "react"

export default class MealMaker extends React.Component{
    constructor(){
        super()
        this.state = {
            list: [],
            values: []
        }
    }

    listCount = 1;

    makeInputs = () => {
        let inputList = new Array;
        for(let i=0; i < this.listCount; i++){
           inputList.push(<input style={styles.input} onChange={this.updateValues.bind(i, this)}/>)
        }
        this.setState({list: inputList})
        console.log(this.state.values)
    }

    addInput = () => {
        this.listCount++
        this.makeInputs();
    }

    updateValues = (index, e) =>{
        let input = e.target.value;
        let updateList = this.state.values;
        updateList[index] = input;
        this.setState({values: updateList})
        console.log(this.state.values, index)
    }

    componentDidMount(){
        this.makeInputs();
    }

    render(){

        return(
            <div style={styles.main}>
                Name of Meal: <input/>
                <ul style={styles.ul}>
                    {this.state.list}
                </ul>
                <button onClick={() => this.addInput()}>Add another Ingredient</button>
            </div>
        )
    }
}

const styles = {
    main: {},
    ul: {listStyleType: "none"},
    li: {},
    input: {}
}