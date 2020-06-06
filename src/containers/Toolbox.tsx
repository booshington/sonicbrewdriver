import React, { Component } from 'react'

class Toolbox extends Component{
    constructor(props: any){
        super(props);
    }

    render(){
        return (
            <div>
                <div className={"row"}>
                    <div className={"col l4"}>1</div>
                    <div className={"col l4"}>2</div>
                    <div className={"col l4"}>3</div>
                </div>
                <div className={"row"}>
                    <div className={"col l4"}>4</div>
                    <div className={"col l4"}>5</div>
                    <div className={"col l4"}>6</div>
                </div>
                <div className={"row"}>
                    <div className={"col l4"}>7</div>
                    <div className={"col l4"}>8</div>
                    <div className={"col l4"}>9</div>
                </div>
                
            </div>
        )
    }
}

export default Toolbox;