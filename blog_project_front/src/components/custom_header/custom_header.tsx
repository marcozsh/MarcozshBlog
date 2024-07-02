'use client';

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from 'next/link'
export default function CustomHeader() {
    return (
        <Navbar position="static">
            <NavbarBrand>
                <Link color="foreground" href="/posts/">
                    <p className="font-bold text-inherit">BLOG</p>
                </Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/posts/">
                        Inicio
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/posts/create" aria-current="page">
                        Crear post
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
