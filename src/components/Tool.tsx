import React, { Component, FormEvent } from 'react';

export interface ITool {
    name: string;
    description: string;
    path: string;
    formfunc:(t: any) => any;
    form: {
        inputs: Array<IToolFormInputs>
    }
}

export interface IToolFormInputs {
    name: string;
    inputType: string;
    id: string;
}

export class Tool extends Component<ITool, { result: string }>{
    constructor(props: ITool){
        super(props)
        this.state = {
            result: 'Awaiting Calculation...',
        }
        this.runFormFunc = this.runFormFunc.bind(this);
    }
//    const { name, description, path, formfunc } = this.props;
    runFormFunc(e: any){
        e.preventDefault();
        const result = this.props.formfunc(e.target) || 0
        console.log(result)
        this.setState({result: result})
    }

    render(){
        return (
            <div className="">
                <form onSubmit={this.runFormFunc}>
                    {this.props.form.inputs.map((value, index, array) => {
                        return (<p>
                            {value.name}
                        <input type={value.inputType} id={value.id} />
                        </p>)
                    })}
                    <input type="submit" value="Submit" />
                </form>
                <div id={"resultBox"}>
                    { this.state.result }
                </div>
            </div>
        )
    }
}

export default Tool;