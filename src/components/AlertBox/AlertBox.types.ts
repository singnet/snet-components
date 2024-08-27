import { ReactNode } from "react";

export interface AlertTypes {
    ERROR: 'error',
    SUCCESS: 'success',
    WARNING: 'warning',
    INFO: 'info',
};

export interface AlertProps {
    message: string;
    type: AlertTypesProps;
}

export interface AlertBoxProps extends AlertProps {
    linkTo?: string;
    link?: string;
    children?: ReactNode;
    icon?: ReactNode;
    header?: string;
}

export interface ColorProps {
    error: string;
    success: string;
    warning: string;
    info: string;
}

export type AlertTypesProps = ValueOf<AlertTypes>;