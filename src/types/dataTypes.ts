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
    category: {
        icon: React.ElementType;
        color: string;
    }[];
    linkText: string;
    className: string;
    imageStyle?: React.CSSProperties;
    imgageURI?: string
    projectLink: string
}

export type SocialType = {
    instagram: string
    github: string
    linkedin: string
}