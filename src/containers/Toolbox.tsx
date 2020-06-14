import React, { Component } from 'react'
import { ITool, Tool }   from '../components/Tool'
import testTools from '../test/testTools';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
interface IToolBox {
    numCols?: number;
    tools: ITool[];
}

class Toolbox extends Component<IToolBox>{
    constructor(props: any){
        super(props);
    }
    
    static defaultProps = {
        numCols: 1,
    }

    /*
        generateGrid

            Generates the Tool grid.

        Arguments:
            array (ITool[]): ITool array to be rendered into rows and columns
            numCols (number): Desired # of columns

        Returns:
            rows (React.Component[]): Array of React components comprising the grid

            In the format of:
                <div class=row>
                    <div class=col>
                        <Tool />
                    </div>
                    ... until numCols is reached (or all Tools rendered)
                </row>
                ... until all Tools are rendered
    */
   generateGrid(array: ITool[], numCols: number){
        var rows = []
        var numRows = Math.ceil(array.length/numCols)
        for(var i = 0, toolIndex = 0; i < numRows;i++){
            let cols = []
            for (var j = 0; j<numCols; j++, toolIndex++){
                if(!array[toolIndex]){break}
                cols.push(
                    <div className={`col-${Math.floor(12/numCols)}`}>
                        <Link to={{pathname: `/${array[toolIndex].path}`}} className={"nav-link"}>{array[toolIndex].name}</Link>
                    </div>
                )
            }
            let row = <div className={"row"}>{[...cols]}</div>
            rows.push(row)
        }
        return rows
    }
    render(){
        const numCols = this.props.numCols || Toolbox.defaultProps.numCols;
        return (
            <div className="container">
                {
                    this.generateGrid(testTools, numCols)
                }
            </div>
        )
    }
}

export default Toolbox;