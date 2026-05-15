import "./css/HorizontalStackLayout.css"

interface HorizontalStackLayoutProps {
    margin?: string;
    padding?: string;
    spacing?: number;
    children: React.ReactNode;
}

function HorizontalStackLayout(props: HorizontalStackLayoutProps) {
    const style = {
        margin: props.margin,
        padding: props.padding,
        gap: props.spacing
    }
    return (
        <div className="horizontal-stack-layout" style={style}>
            {props.children}
        </div>
    );
}

export default HorizontalStackLayout;