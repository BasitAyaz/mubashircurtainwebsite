export default function BABox(props: any) {
    const { className, children, sx } = props;
    return <>
        <div style={sx} className={className}>{children}</div>
    </>
}