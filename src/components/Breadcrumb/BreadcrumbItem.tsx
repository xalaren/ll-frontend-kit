interface IBreadcrumbItemProps {
    text: string;
    path?: string;
}
function toNext(path: string)
{
    console.log("next >> " + path);
}
function BreadcrumbItem({ text, path }: IBreadcrumbItemProps) {
    return (
        <div className="breadcrumb__item">
            <a onClick={() => {
                if (path) toNext(path);
            }}>{text}</a>
        </div>

    );
}

export default BreadcrumbItem;