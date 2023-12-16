import styled from "styled-components";

export const Button = styled.button<{
	primary?: boolean;
	backgroundColor?: string;
	size?: "small" | "medium" | "large";
}>`
	font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-weight: 700;
	border: 0;
	border-radius: 3em;
	cursor: pointer;
	display: inline-block;
	line-height: 1;

	color: ${(props) => (props.primary ? "white" : "#333")};
	background-color: ${(props) => (props.primary ? "red" : "transparent")};
	box-shadow: ${(props) =>
		!props.primary ? "0, 0, 0, 0.15) 0px 0px 0px 1px inset" : ""};

	font-size: ${(props) =>
		props.size === `small`
			? "12px"
			: props.size === "medium"
			? "14px"
			: props.size === "large"
			? "16px"
			: ""};
	padding: ${(props) =>
		props.size === `small`
			? "10px 16px"
			: props.size === "medium"
			? "11px 20px"
			: props.size === "large"
			? "12px 24px"
			: ""};
`;
