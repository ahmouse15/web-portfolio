import React from 'react';
import { NavItem } from './NavItem';

export function Nav() {
    return (
      <div className="pr-[5%] justify-end items-center flex-col md:flex-row inline-flex">
        <div className="flex justify-center md:divide-x md:divide-ghost">
          <NavItem href="/posts" label="Read"/>
          <NavItem href="/projects" label="Projects"/>
          <NavItem href="/about" label="What is this?"/>
        </div>
        <div className="pl-4 duration-150 hover:scale-[1.2]">
          <NavItem href="/search" label="Search" variant="secondary"/>
        </div>
      </div>
      );
  }