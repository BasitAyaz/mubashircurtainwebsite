import { Button } from "antd";

type propsType = {
    label: string,
    onClick: any,
    type?: any,
    disabled?: boolean,
    loading?: boolean,
    ghost?: boolean,
    shape?: 'circle' | 'round' | undefined,
}

export default function BAButton(props: propsType) {
    const { label, onClick, type, disabled, loading, ghost, shape } = props;
    return <>
        <Button onClick={onClick} disabled={disabled} loading={loading} type={type}>{label}</Button>
    </>
}