import React, { Component } from 'react';

interface ITool {
    name: string;
    description: string;
}

class Tool extends Component<ITool>{
    constructor(props: ITool){
        super(props)
    }
    render(){
        return (
                <div className="waves-effect waves-light btn-large">
                    { this.props.name }
                </div>
        )
    }
}

export default Tool;