import React from "react";

type Props = {
    text: string;
    onClick?: () => any;
};


export function ToolbarItem(props: Props) {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    );
}