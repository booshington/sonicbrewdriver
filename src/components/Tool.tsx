import React, { Component, FormEvent } from 'react';

export interface ITool {
    name: string;
    description: string;
    path: string;
    formfunc:(t: any) => void;
    form: {
        inputs: Array<IToolFormInputs>
    }
}

export interface IToolFormInputs {
    name: string;
    inputType: string;
    id: string;
}

export class Tool extends Component<ITool>{
    constructor(props: ITool){
        super(props)
        this.runFormFunc = this.runFormFunc.bind(this);
    }
//    const { name, description, path, formfunc } = this.props;
    runFormFunc(e: any){
        e.preventDefault();
        this.props.formfunc(e.target)
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
            </div>
        )
    }
}

export default Tool;