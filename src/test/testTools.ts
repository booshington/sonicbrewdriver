import { ITool } from '../components/Tool'
export const testTools: ITool[] = [
    {
        name:"ABV Calc",
        description:"Alcohol by Volume calculator",
        path: "abvcalc",
    },
    {
        name:"Hydrometer Temp Calibration",
        description:"Adjusts the hydrometer reading based on liquid temperature",
        path: "hydrocalib",
    },
    {
        name:"SRM Calculator",
        description:"Calculates an estimated SRM based on grain bill and other variables",
        path: "srmcalc",
    },
    {
        name:"IBU Calculator",
        description:"Calculates an estimated IBU on a given hop schedule and other variables",
        path: "ibucalc",
    },
    {
        name:"Boiloff and Dilution Calculator",
        description:"Calculates estimated concentration change through boiloff over time and \
            liquid quantity, or calculates required boiloff time given a quantity delta.",
        path: "boiloffcalc",
    },
];

export default testTools;