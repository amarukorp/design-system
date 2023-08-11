import { ReactNode } from "react";

export interface ButtonProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: "small" | "medium" | "large";
	label: string;
	onClick?: () => void;
}

export interface CardProps {
	cardHeader: ReactNode;
	cardFooter: ReactNode;
}
