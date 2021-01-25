import React from "react"
import { Link } from "react-router-dom";

export default class Home extends React.Component{
    constructor(){
        super()

    }

    render(){

        return(
            <div style={styles.main}>
                <div>
                   <Link to={"/MealMaker"}><h1>Make Meals!</h1></Link> 
                </div>
                <div>
                    <Link to={"/ThePantry"}><h1>Fill Pantry!</h1></Link>
                </div>
                <div>
                   <Link to={"/ShoppingList"}><h1>Make shopping List!</h1></Link> 
                </div>
            </div>
        )
    }
}

const styles = {
    main: {}
}