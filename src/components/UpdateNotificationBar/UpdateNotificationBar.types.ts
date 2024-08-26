import { MouseEvent } from "react";

export interface UpdateNotificationBarProps {
    notificationText: string;
    notificationLink: string;
    showNotification: boolean;
    onCloseClick: (event: MouseEvent<SVGSVGElement>) => void;
}