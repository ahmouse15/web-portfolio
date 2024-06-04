import { Button } from "@/common/components/ui/Button";
import Link, { LinkProps } from "next/link";
import { useState } from "react";

type Props = LinkProps & {
    label: string;
    variant?: "secondary";
};

export function NavItem(props: Props) {
    let style = "hover:text-primary";

    let isSecondary = props.variant == 'secondary';

    return (
        <Button text={props.label} fill={isSecondary} href={props.href} />
    );
}