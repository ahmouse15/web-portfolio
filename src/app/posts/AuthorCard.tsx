import { Author } from "@ts-ghost/content-api";
import { UUID } from "crypto";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export function AuthorCard(props: {authors: (Author | undefined)[]}) {
    if (!props.authors || !props.authors[0]) return null;

    return (
        <div>
            By {props.authors[0].name}
        </div>
    );
}