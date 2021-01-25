import React from "react"

export default class ShoppingList extends React.Component{
    constructor(){
        super()
    }

    render(){

        return(
            <div style={styles.main}>
                Shopping list
            </div>
        )
    }
}

const styles = {
    main: {}
}