export interface FooterLinkProps {
    href: string;
    key: string;
    label: string;
}

export interface FooterColumnProps {
    isPrimary: boolean;
    title: string;
    links: FooterLinkProps[]
}