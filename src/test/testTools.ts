import { ITool } from '../components/Tool'
export const testTools: ITool[] = [
    {
        name:"ABV Calc",
        description:"Alcohol by Volume calculator",
        path: "abvcalc",
        formfunc: (formInput: any) => {
            console.log('abvcalc');
            console.log(formInput.og.value);
            console.log(formInput.fg.value);
        },
        form: {
            inputs: [
                {
                    name: 'OG',
                    inputType: 'text',
                    id: 'og'
                },
                {
                    name: 'FG',
                    inputType: 'text',
                    id: 'fg'
                },
            ]
        }
    },
    {
        name:"Hydrometer Temp Calibration",
        description:"Adjusts the hydrometer reading based on liquid temperature",
        path: "hydrocalib",
        formfunc: (t: any) => {console.log('hydro temp')},
        form: {
            inputs: [
                {
                    name: 'Gravity',
                    inputType: 'text',
                    id: 'grav'
                },
                {
                    name: 'Current Temperature',
                    inputType: 'text',
                    id: 'temp'
                },
                {
                    name: 'Calibration Temp',
                    inputType: 'text',
                    id: 'calibtemp'
                },
            ]
        }
    },
    {
        name:"SRM Calculator",
        description:"Calculates an estimated SRM based on grain bill and other variables",
        path: "srmcalc",
        formfunc: (t: any) => {console.log('srm calc')},
        form: {
            inputs: [
                {
                    name: 'Grain LBs',
                    inputType: 'text',
                    id: 'grain'
                }
            ]
        }
    },
    {
        name:"IBU Calculator",
        description:"Calculates an estimated IBU on a given hop schedule and other variables",
        path: "ibucalc",
        formfunc: (t: any) => {console.log('ibu calc')},
        form: {
            inputs: [
                {
                    name: 'Alpha Acid',
                    inputType: 'text',
                    id: 'alpha'
                }
            ]
        }
    },
    {
        name:"Boiloff and Dilution Calculator",
        description:"Calculates estimated concentration change through boiloff over time and \
            liquid quantity, or calculates required boiloff time given a quantity delta.",
        path: "boiloffcalc",
        formfunc: (t: any) => {console.log('dilution calc')},
        form: {
            inputs: [
                {
                    name: 'Quantity preboil',
                    inputType: 'text',
                    id: 'quant'
                },
                {
                    name: 'Boil Time',
                    inputType: 'text',
                    id: 'boiltime'
                },
            ]
        }
    },
];

export default testTools;