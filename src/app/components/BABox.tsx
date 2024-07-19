export default function BABox(props: any) {
    const { className, children, sx } = props;
    return <>
        <div {...props} style={sx} className={className}>{children}</div>
    </>
}