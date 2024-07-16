export default function BAPera(props: any) {
    const { children, sx, className } = props;
    return <>
        <p style={sx} className={className}>{children}</p>
    </>
}