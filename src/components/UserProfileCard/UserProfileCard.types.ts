import { MouseEvent } from "react";

export interface UserProfileCardProps {
    nickName: string;
    onClose: (event: MouseEvent<SVGSVGElement>) => void;
}