import type { BaseChildrenProps } from "../../model/BaseChildrenProps";
import type { Margin } from "../../model/Margin";
import type { Padding } from "../../model/Padding";
import type Spacing from "../../model/Spacing";
import NullableParser from "../../utils/NullableParser";
import "./css/VerticalStackLayout.css"

interface VerticalStackLayoutProps extends BaseChildrenProps {
    children: React.ReactNode;
    margin?: Margin;
    padding?: Padding;
    spacing?: Spacing;
}

function VerticalStackLayout(props: VerticalStackLayoutProps) {

    const style = {
        ...props.style,
        margin: NullableParser.parseMargin(props.margin),
        padding: NullableParser.parseMargin(props.padding),
        gap: NullableParser.parseSpacing(props.spacing)
    }
    return (
        <div className={NullableParser.parseClassName("horizontal-stack-layout", props.className)} style={style}>
            {props.children}
        </div>
    );
}

export default VerticalStackLayout;