export interface MenuItemProps {
  label: string;
  link: string;
  newTab: boolean;
}

export interface StyledMenuProps {
  label: string;
  list: MenuItemProps[];
}
