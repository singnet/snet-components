import { ReactNode } from "react";

export interface StyledTableProps {
  title: string;
  columns: ColumnsProps[];
  rows: RowsProps[];
}

export interface ColumnsProps {
  key: string;
  label: string;
}

export interface RowsProps {
  highlight: boolean;
  key: string;
  values: { label: string; icon: ReactNode }[];
}
