import { Padding } from "./Padding";

export class Margin extends Padding {
    constructor(top: number, right: number, bottom: number, left: number);
    constructor(all: number);
    constructor(vertical: number, horizontal: number);

    constructor(
        arg1: number,
        arg2?: number,
        arg3?: number,
        arg4?: number
    ) {
        if(arguments.length === 1) {
            super(arg1);
            return;
        } 

        if(arguments.length === 2) {
            super(arg1, arg2!);
            return;
        } 

        if(arguments.length === 4) {
            super(arg1, arg2!, arg3!, arg4!);
        }

        throw new Error("Invalid number of arguments");
    }
}