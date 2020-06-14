import React, { Component } from 'react';

export interface ITool {
    name: string;
    description: string;
    path: string;
}

export class Tool extends Component<ITool>{
    constructor(props: ITool){
        super(props)
    }
    render(){
        return (
                <div className="">
                    { this.props.name }
                </div>
        )
    }
}

export default Tool;