import { ButtonProps } from "../../types/types";
import { Button } from "./styles";

export const Buttons = ({ label, ...props }: ButtonProps) => {
	return (
		<Button type="button" {...props}>
			{label}
		</Button>
	);
};
