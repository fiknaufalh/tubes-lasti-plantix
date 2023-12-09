interface LogoProps {
    height?: string;
    width?: string;
    default?: string;
}

export default function Logo(props: LogoProps) {
    const { height, width } = props;

    return (
        <a href={props.default}>
            <img
                src="../../images/Plantix.png"
                alt="Plantix"
                className={`flex object-contain 
                    ${height ? `h-${height}` : ""} 
                    ${width ? `w-${width}` : ""}`}
            />
        </a>
    );
}
