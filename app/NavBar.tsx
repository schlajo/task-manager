'use client';

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import classnames from 'classnames';
const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Tasks", href: "/tasks" },
  ];

  return (
    <nav className="flex space border-b mb-5 px-5 h-14 items-center">
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
                  'text-zinc-900' : link.href === currentPath,                   
                  'text-zinc-500' : link.href !== currentPath,
                  'hover:text-zinc-800 transition-colors': true
            })}
            href={link.href}>{link.label}</Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
