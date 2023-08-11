import { styled } from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	padding: 16px;
	border-radius: 8px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	background-color: #f0f0eb;
`;
export const CardHeader = styled.div`
	padding: 16px;
	color: black;
	> h2 {
		margin: 0;
	}
`;

export const CardContent = styled.div`
	padding: 16px;
	color: black;
	> p {
		margin: 0;
	}
`;

export const CardFooter = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 16px;
`;
