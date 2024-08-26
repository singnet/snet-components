import { ReactNode } from "react";

export interface NotificationBarProps {
    showNotification: boolean;
    Icon: ReactNode;
    message: string;
    type: NotificationProps;
}

export interface TypeProps {
    WARNING: string;
    INFORMATION: string;
    REMINDER: string;
}

export type NotificationProps = keyof TypeProps;