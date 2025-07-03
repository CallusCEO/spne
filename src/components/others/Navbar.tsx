'use client';

import Image from 'next/image';
import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '../ui/button';
import { useState } from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<div className={styles.container}>
			<div>
				{/* <Image src="/logo.png" alt="Logo" width={100} height={100} /> */}
				<h1 className='text-2xl font-bold font-[var(--font-montserrat)]'>
					SPNE
				</h1>
			</div>
			<NavigationMenu viewport={false} className={styles.navigationMenu}>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<Link href='/docs' className='bg-transparent'>
								Acceuil
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger className='bg-transparent'>
							Nos actions
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className='grid w-[164px] gap-2 md:grid-cols-2'>
								<li>
									<Button variant='ghost'>Action 1</Button>
								</li>
								<li>
									<Button variant='ghost'>Action 2</Button>
								</li>
								<li>
									<Button variant='ghost'>Action 3</Button>
								</li>
								<li>
									<Button variant='ghost'>Action 4</Button>
								</li>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<Link href='/docs' className='bg-transparent'>
								Docs
							</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant='ghost'
						onClick={() => setOpen(!open)}
						className={styles.dropdown}
					>
						<Menu />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					className='w-56'
					align='start'
					sideOffset={16}
				>
					<DropdownMenuGroup>
						<DropdownMenuItem>Acceuil</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuLabel>Nos actions</DropdownMenuLabel>
						<DropdownMenuItem>Actions 1</DropdownMenuItem>
						<DropdownMenuItem>Actions 2</DropdownMenuItem>
						<DropdownMenuItem>Actions 3</DropdownMenuItem>
						<DropdownMenuItem>Actions 4</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>Docs</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
