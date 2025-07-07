'use client';

import Navbar from '@/components/others/Navbar';
import Image from 'next/image';
import styles from '@/styles/page.module.css';
import Aurora from '@/components/react-bits/Aurora/Aurora';
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function Home() {
	return (
		<div className='min-h-screen overflow-x-hidden '>
			<Navbar />
			<section id='acceuil' className={styles.acceuil}>
				<div className={styles.acceuilText}>
					<p className={styles.title}>La SPNE c'est une asso de goats!</p>
					<div className={styles.animationEnter}>
						<Card
							className='w-full grid grid-cols-1 md:grid-cols-2 h-full rounded-xl p-4 bg-[rgba(255,255,255,0.3)] min-h-[50vh]'
							style={{ backdropFilter: 'blur(12px)' }}
						>
							<CardHeader className='justify-center items-start flex flex-col'>
								<CardTitle className='w-fit font-bold text-2xl font-[var(--font-montserrat)]'>
									La SPNE s'engage à protéger les goats!
								</CardTitle>
								<CardDescription className='w-fit font-[var(--font-montserrat)]'>
									Venez nous aider à protéger les goats!
								</CardDescription>
							</CardHeader>
							<CardContent className='relative p-4'>
								<Image
									src='/image_16.jpg'
									alt='Logo'
									fill
									className='object-cover rounded-xl'
								/>
							</CardContent>
						</Card>
					</div>
				</div>
				<div className={styles.auroraContainer}>
					<Aurora
						colorStops={['#ee7979', '#79ee79', '#ee7979']}
						blend={1}
						amplitude={0.5}
						speed={1}
					/>
				</div>
			</section>
		</div>
	);
}
