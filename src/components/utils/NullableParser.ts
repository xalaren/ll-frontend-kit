import type { Margin } from "../model/Margin";
import type { Padding } from "../model/Padding";
import type Spacing from "../model/Spacing";

class NullableParser {
    static parsePadding(padding?: Padding): string {
        return padding?.toString() || "";
    }
     static parseMargin(margin?: Margin): string {
        return margin?.toString() || "";
    }

    static parseSpacing(spacing?: Spacing): string {
        return spacing?.toString() || "";
    }

    static parseClassName(className?: string): string;
    static parseClassName(definedClassName: string, className?: string): string;
    static parseClassName(arg1?: string, arg2?: string): string {
        if(!arg1 && !arg2) return "";

        if(arg1 && !arg2) {
            return arg1;
        }

        if(arg1 && arg2) {
            return `${arg1} ${arg2}`;
        }

        throw new Error("Invalid arguments");
    }
}

export default NullableParser;