import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";
import { IconType } from 'react-icons';

type ButtonProps = {
    text?: string; //Text to display
    icon?: IconType; //Icon to display in the button
    trim?: boolean; //Whether the button should have a trim (border)
    fill?: boolean; // Whether to fill the background of the button
    onClick?: () => any; //OnClick callback
    href?: Url; //Used for navigational components.
    style?: string; //Custom style. This will apply on top of all other styling. 
};

let propsDefault: ButtonProps = {
    text: '',
    trim: false,
    fill: true
};

export function Button(props: ButtonProps) {    
    props = {...propsDefault, ...props};
    
    let elements: React.ReactNode[] = [];
    
    let style = ' whitespace-nowrap w-min h-min min-h-8 text-light px-4 py-2 border-b-2 border-transparent hover:border-primary';
    let Icon = props.icon;

    let clickHandler = <button className={style} onClick={props.onClick}>{elements}</button>;

    if (props.fill) props.trim = true;

    if (Icon) elements.push(<Icon key='icon'/>);
    if (props.fill) style += ' bg-primary hover:bg-primary-hover ';
    if (props.trim) style += ' border-2 hover:border-primary-hover rounded-md ';

    if (props.href) clickHandler = <Link className={style} href={props.href}>{elements}{props.text}</Link>;

    return (
        <div className="">
            {clickHandler}
        </div>
    );
}
