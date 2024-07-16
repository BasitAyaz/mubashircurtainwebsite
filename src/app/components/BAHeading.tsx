import BAPera from "./BAPera";

export default function BAHeading(props: any) {
    const { children, textColor } = props;
    return <>
        <BAPera className={`text-4xl md:text-6xl ${textColor ? textColor : 'text-black'} my-10`}>{children}</BAPera>
    </>
}