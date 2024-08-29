export interface FooterLinkProps {
  href: string;
  key: number;
  label: string;
}

interface FooterColumn {
  key: number;
  isPrimary: boolean;
  title: string;
  links: FooterLinkProps[];
}

export interface FooterColumnProps {
  column: FooterColumn;
}
