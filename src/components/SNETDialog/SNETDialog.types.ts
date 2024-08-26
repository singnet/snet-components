import { ReactNode } from "react";

export interface BaseDialogProps {
    isDialogOpen: boolean,
    onDialogClose: () => void,
    title: string,
    children: ReactNode,
}

export interface SNETDialogProps extends BaseDialogProps{
    disableBackdropClick: boolean,
    disableEscapeKeyDown: boolean,
    contentClass: string,
    showCloseButton: boolean,
}