import { JSX } from 'react';

export interface ProgressStatusTextTypes {
    IDLE: "idle";
    ACTIVE: "active";
    COMPLETED: "completed";
    FAILED: "failed";
    SUCCEEDED: "succeeded";
    PENDING: "pending";
}

export type ProgressStatusText = ValueOf<ProgressStatusTextTypes>;

export interface ProgressComponentProps {
    onSectionClick?:  (progressNumber: number, progressText?: string, progressStatus?: string) => void;
}

export interface ProgressBarProps extends ProgressComponentProps {
    progressText: string[];
    activeSection: number;
    progressStatus?: {
        [key: number]: ProgressStatusText
    };
}

export interface ProgressTogglerProps extends ProgressComponentProps {
    progressNumber: number;
    progressStatus: ProgressStatusText;
}

export interface ProgressSectionProps extends ProgressTogglerProps {
    progressText: string;
}

export type StepsProps = {
    [key in ProgressStatusText]: JSX.Element;
};