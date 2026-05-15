export class Padding {
    protected readonly top: number = 0;
    protected readonly right: number = 0;
    protected readonly bottom: number = 0;
    protected readonly left: number = 0;

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
            this.top = arg1;
            this.right = arg1;
            this.bottom = arg1;
            this.left = arg1;

            return;
        } 

        if(arguments.length === 2) {
            this.top = arg1;
            this.bottom = arg1;
            this.left = arg2!;
            this.right = arg2!;

            return;
        } 

        if(arguments.length === 4) {
            this.top = arg1!;
            this.bottom = arg2!;
            this.right = arg3!;
            this.left = arg4!;

            return;
        }

        throw new Error("Invalid number of arguments");
    }

    public toString(): string {
        return `${this.left}px `;
    }
}