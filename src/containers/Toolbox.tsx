import React, { Component } from 'react'
import Tool from '../components/Tool'

class Toolbox extends Component{
    constructor(props: any){
        super(props);
    }

    render(){
        const testTools = [
            {
                name:"ABV Calc",
                description:"Alcohol by Volume calculator",
            },
            {
                name:"Hydrometer Temp Calibration",
                description:"Adjusts the hydrometer reading based on liquid temperature",
            },
            {
                name:"SRM Calculator",
                description:"Calculates an estimated SRM based on grain bill and other variables",
            },
            {
                name:"IBU Calculator",
                description:"Calculates an estimated IBU on a given hop schedule and other variables",
            },
            {
                name:"Boiloff and Dilution Calculator",
                description:"Calculates estimated concentration change through boiloff over time and \
                    liquid quantity, or calculates required boiloff time given a quantity delta.",
            },
        ]
        return (
            <div>
                <div className={"row"}>
                    {
                        testTools.map((currelement, index) => {
                            return (
                            <div className="col sml4">
                                <Tool {...currelement} />
                            </div>
                            );
                          })
                    }     
                </div>
            </div>
        )
    }
}

export default Toolbox;