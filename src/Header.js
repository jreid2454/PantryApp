import React from "react"
import { Link } from "react-router-dom";

export default class Header extends React.Component{
    constructor(){
        super()
    }

    render(){

        return(
            <div style={styles.main}>
                <div>
                   <Link to={"/home"}>Home</Link> 
                </div>
            </div>
        )
    }
}

const styles = {
    main: {backgroundColor: "gray", width: "100%", height: "10vh", margin: "0"}
}