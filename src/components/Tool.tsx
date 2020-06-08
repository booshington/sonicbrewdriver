import React, { Component } from 'react';

export interface ITool {
    name: string;
    description: string;
}

export class Tool extends Component<ITool>{
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