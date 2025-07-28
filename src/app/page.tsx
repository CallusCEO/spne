'use client';

import Navbar from '@/components/others/Navbar';
import Image from 'next/image';
import styles from '@/styles/page.module.css';
import Aurora from '@/components/react-bits/Aurora/Aurora';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

export default function Home() {
	const [isDown, setIsDown] = useState(false);
	useEffect(() => {
		function handleScroll() {
			if (window.scrollY > 164) {
				setIsDown(true);
			} else {
				setIsDown(false);
			}
		}

		// Call handler right away so state gets updated with initial scroll position
		handleScroll();

		window.addEventListener('scroll', handleScroll);

		// Cleanup on unmount
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<div className='min-h-screen overflow-x-hidden'>
			<Navbar />
			<section
				id='acceuil'
				className={`${styles.acceuil} ${isDown ? styles.acceuilMargin : ''}`}
			>
				<div className={styles.acceuilText}>
					<p className={styles.title}>
						Sensibilisation, Protection, Nature et Environnement
					</p>
					<div className={styles.animationEnter}>
						<Card
							className='w-full grid grid-cols-1 md:grid-cols-2 h-full rounded-xl p-4 bg-[rgba(255,255,255,0.3)] min-h-[50vh]'
							style={{ backdropFilter: 'blur(12px)' }}
						>
							<CardHeader className='justify-center items-start flex flex-col'>
								<CardTitle className='w-fit font-bold text-2xl font-[var(--font-montserrat)]'>
									Sensibilisation, Protection, Nature et Environnement
								</CardTitle>
								<CardDescription className='w-fit font-[var(--font-montserrat)]'>
									Sous-titre de la card
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
			<section className={`${styles.actions} ${isDown ? styles.animationEnter : ''}`}>
				<div className={styles.auroraContainer2}>
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
