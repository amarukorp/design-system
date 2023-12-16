import { Buttons } from "../Button";
import { CardContainer, CardContent, CardFooter, CardHeader } from "./styles";
import { ReactNode } from "react";

export const CardBase = (children: ReactNode) => {
	return <CardContainer>{children}</CardContainer>;
};
export const Title = () => {
	<h2>This is the title</h2>;
};

export const CardButton = () => {
	<Buttons label={"Click here"} />;
};

export const Card = () => {
	return (
		<CardContainer>
			<CardHeader>
				<h2>This is the title</h2>
			</CardHeader>
			<CardContent>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
					vehicula auctor quam, sit amet sollicitudin nulla pellentesque a. Duis
					non cursus leo. Sed sit amet urna at tortor lacinia fermentum. Fusce
					ut leo tristique, suscipit lorem eu, tincidunt libero.
				</p>
			</CardContent>
			<CardFooter>
				<Buttons size="small" primary label={"Click here"} />
			</CardFooter>
		</CardContainer>
	);
};
