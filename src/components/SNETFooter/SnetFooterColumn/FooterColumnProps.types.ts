export interface FooterLinkProps {
    href: string;
    key: number;
    label: string;
}

export interface FooterColumnProps {
    column: {
        key: number;
        isPrimary: boolean;
        title: string;
        links: FooterLinkProps[]
    }
}