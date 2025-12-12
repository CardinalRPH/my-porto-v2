export type TechStackType = {
    name: string;
    icon: React.ElementType;
    color: string;
}

export type CoreType = {
    title: string;
    desc: string;
}

export type ProjectCardProps = {
    title: string;
    category: string;
    linkText: string;
    className: string;
    imageStyle?: React.CSSProperties;
    imgageURI?: string
}