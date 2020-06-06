import React, { Component } from 'react';

interface ITool {
    id: number;
}

class Tool extends Component<ITool>{
    constructor(props: ITool){
        super(props)
    }
    render(){
        return (
            <div>
                { this.props.id }
            </div>
        )
    }
}