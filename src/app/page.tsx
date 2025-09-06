'use client';

import Navbar from '@/components/others/Navbar';
import Image from 'next/image';
import styles from '@/styles/page.module.css';
import Aurora from '@/components/react-bits/Aurora/Aurora';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import DarkVeil from '@/components/react-bits/DarkVeil/DarkVeil';
import CardSwap, { Card as CardSwapCard } from '@/components/react-bits/CardSwap/CardSwap';
import LightRays from '@/components/react-bits/LightRays/LightRays';
import Beams from '@/components/react-bits/Beams/Beams';
import Plasma from '@/components/react-bits/Plasma/Plasma';
import { LucidePhone } from 'lucide-react';

export default function Home() {
	const [downNumber, setDownNumber] = useState(0);
	useEffect(() => {
		function handleScroll() {
			setDownNumber(window.scrollY);
		}

		// Call handler right away so state gets updated with initial scroll position
		handleScroll();

		window.addEventListener('scroll', handleScroll);

		// Cleanup on unmount
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<div className='min-h-screen overflow-x-hidden relative'>
			<Navbar />
			<div className='absolute top-0 left-0 w-full h-full'>
				<div className={styles.plasmaContainer}>
					<Plasma
						color='#66ff66'
						speed={0.6}
						scale={1}
						opacity={0.3}
						mouseInteractive={false}
					/>
				</div>
			</div>
			<section
				id='acceuil'
				className={`${styles.acceuil} ${downNumber > 164 ? styles.acceuilMargin : ''}`}
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
			<section
				className={`${styles.actions} ${downNumber > 164 ? styles.animationEnter : ''}`}
			>
				<div className={styles.auroraContainer2}>
					<Aurora
						colorStops={['#ee7979', '#79ee79', '#ee7979']}
						blend={1}
						amplitude={0.5}
						speed={1}
					/>
				</div>

				{/* Actions list */}
				{/* 1 - Apiculture */}
				{/* 2 - Permaculture */}
				{/* 3 - Aquaponie */}
				{/* 4 - Menuiserie */}
				{/* 5 - Elevage d'insectes */}
				{/* 6 - Communication */}

				{/* ------------ APICULTURE ------------ */}
				<div className={`${styles.actionItem} justify-center`} id='apiculture'>
					<p className={styles.actionTitle}>L'Apiculture: un engagement écologique.</p>
					<p className={styles.actionDescription}>
						La SPNE forme des <em>alchimiculteurs</em> pour s'occuper des ruches
						dispersées en Provence !
					</p>
					<div className={styles.actionImage}>
						<Image src='/image_20.jpg' alt='Apiculture' fill className='object-cover' />
					</div>
				</div>
			</section>
			<section
				className={`${styles.actions} ${downNumber > 1264 ? styles.animationEnter : ''}`}
			>
				{/* ------------ PERMACULTURE ------------ */}
				<div className={`${styles.actionItem}`} id='permaculture'>
					<div className={styles.darkVeilContainer}>
						<DarkVeil resolutionScale={2} />
					</div>
					<p className={`${styles.actionTitle} text-left`}>
						La Permaculture: un engagement écologique.
					</p>
					<p className={`${styles.actionDescription} text-left`}>
						Nous cultivons plantes médicinales et cactées dans des jardins 100% durables
						!
					</p>

					<div className='w-full h-[224px] md:h-[424px] relative'>
						<CardSwap
							cardDistance={30}
							verticalDistance={30}
							delay={4000}
							pauseOnHover={false}
						>
							<CardSwapCard className='w-full h-full bg-[rgba(255,255,255,0.3)] overflow-hidden'>
								<div className='p-4 z-900 bg-[rgb(230,255,230)] flex gap-2 items-center'>
									<div className={styles.dotLuma}></div>
									<h3>Card 1</h3>
								</div>
								<div className='w-full h-full rounded-xl absolute'>
									<Image
										src='/image_5.jpg'
										alt='Apiculture'
										fill
										className='object-cover'
									/>
								</div>
							</CardSwapCard>
							<CardSwapCard className='w-full h-full bg-[rgba(255,255,255,0.3)] overflow-hidden'>
								<div className='p-4 z-900 bg-[rgb(230,255,230)] flex gap-2 items-center'>
									<div className={styles.dotLuma}></div>
									<h3>Card 1</h3>
								</div>
								<div className='w-full h-full rounded-xl absolute'>
									<Image
										src='/image_6.jpg'
										alt='Apiculture'
										fill
										className='object-cover'
									/>
								</div>
							</CardSwapCard>
							<CardSwapCard className='w-full h-full bg-[rgba(255,255,255,0.3)] overflow-hidden'>
								<div className='p-4 z-900 bg-[rgb(230,255,230)] flex gap-2 items-center'>
									<div className={styles.dotLuma}></div>
									<h3>Card 1</h3>
								</div>
								<div className='w-full h-full rounded-xl absolute'>
									<Image
										src='/image_7.jpg'
										alt='Apiculture'
										fill
										className='object-cover'
									/>
								</div>
							</CardSwapCard>
							<CardSwapCard className='w-full h-full bg-[rgba(255,255,255,0.3)] overflow-hidden'>
								<div className='p-4 z-900 bg-[rgb(230,255,230)] flex gap-2 items-center'>
									<div className={styles.dotLuma}></div>
									<h3>Card 1</h3>
								</div>
								<div className='w-full h-full rounded-xl absolute'>
									<Image
										src='/image_8.jpg'
										alt='Apiculture'
										fill
										className='object-cover'
									/>
								</div>
							</CardSwapCard>
							<CardSwapCard className='w-full h-full bg-[rgba(255,255,255,0.3)] overflow-hidden'>
								<div className='p-4 z-900 bg-[rgb(230,255,230)] flex gap-2 items-center'>
									<div className={styles.dotLuma}></div>
									<h3>Card 1</h3>
								</div>
								<div className='w-full h-full rounded-xl absolute'>
									<Image
										src='/image_9.jpg'
										alt='Apiculture'
										fill
										className='object-cover'
									/>
								</div>
							</CardSwapCard>
							<CardSwapCard className='w-full h-full bg-[rgba(255,255,255,0.3)] overflow-hidden'>
								<div className='p-4 z-900 bg-[rgb(230,255,230)] flex gap-2 items-center'>
									<div className={styles.dotLuma}></div>
									<h3>Card 1</h3>
								</div>
								<div className='w-full h-full rounded-xl absolute'>
									<Image
										src='/image_10.jpg'
										alt='Apiculture'
										fill
										className='object-cover'
									/>
								</div>
							</CardSwapCard>
						</CardSwap>
					</div>
				</div>
			</section>
			<section
				className={`${styles.actions} ${downNumber > 2064 ? styles.animationEnter : ''}`}
			>
				{/* ------------ AQUAPONIE ------------ */}
				<div className={`${styles.actionItem}`} id='aquaponie'>
					<div className='absolute top-0 left-0 w-full h-full'>
						<div className={styles.plasmaContainer}>
							<Plasma
								color='#00BFFF'
								direction='forward'
								speed={1}
								scale={3}
								opacity={1}
								mouseInteractive={false}
							/>
						</div>
					</div>
					<p className={styles.actionTitle}>L'Aquaponie: l'élevage de poissons!</p>
					<p className={styles.actionDescription}>
						Nous élevons ces petits êtres marins dans des milieux aquatiques durables et
						naturels.
					</p>
				</div>
			</section>
			<section
				className={`${styles.actions} ${downNumber > 2664 ? styles.animationEnter : ''}`}
			>
				{/* ------------ MENUISERIE ------------ */}
				<div className={`${styles.actionItem}`} id='menuiserie'>
					<div className={styles.liquidChromeContainer}>
						<Beams
							beamWidth={3}
							beamHeight={15}
							beamNumber={12}
							lightColor='rgb(255, 157, 77)'
							speed={2}
							noiseIntensity={1.75}
							scale={0.3}
							rotation={30}
						/>
					</div>
					<p className={`${styles.actionTitle} text-[#fff]`}>
						La Menuiserie: l'art de la construction!
					</p>
					<p className={`${styles.actionDescription} text-[#fff]`}>
						Nous créons nous mêmes nos ruches!
					</p>
					<div className={styles.actionImage}>
						<Image src='/image_16.jpg' alt='Menuiserie' fill className='object-cover' />
					</div>
				</div>
			</section>
			<section
				className={`${styles.actions} ${downNumber > 3064 ? styles.animationEnter : ''}`}
			>
				{/* ------------ ELEVAGE D'INSECTES ------------ */}
				<div className={`${styles.actionItem}`} id='elevage'>
					<div className='absolute top-0 left-0 w-full h-full'>
						<div className={styles.plasmaContainer}>
							<Plasma
								color='#ff6b35'
								speed={0.6}
								scale={1}
								opacity={0.8}
								mouseInteractive={false}
							/>
						</div>
					</div>
					<p className={`${styles.actionTitle}`}>
						L'Elevage d'Insectes au coeur de notre savoir-faire.
					</p>
					<p className={`${styles.actionDescription}`}>
						Nous élevons des insectes pour des produits naturels! Par exemple, nos
						abeilles nous fournissent le miel nécessaire à notre activité.
					</p>
					<div className={styles.actionImage}>
						<Image
							src='/image_16.jpg'
							alt="Elevage d'Insectes"
							fill
							className='object-cover'
						/>
					</div>
				</div>
			</section>
			<section
				className={`${styles.communication} ${
					downNumber > 3464 ? styles.animationEnter : ''
				}`}
				id='communication'
			>
				{/* ------------ COMMUNICATION ------------ */}

				<div className='absolute top-0 left-0 w-full h-full'>
					<div className={styles.plasmaContainer}>
						<LightRays
							raysOrigin='top-center'
							raysColor='#66ff66'
							raysSpeed={1.5}
							lightSpread={0.8}
							rayLength={1.2}
							followMouse={true}
							mouseInfluence={0.1}
							noiseAmount={0.1}
							distortion={0.05}
							className='custom-rays'
						/>
					</div>
				</div>
				<p className={styles.actionTitle}>Contactez-nous</p>
				<p className={styles.actionDescription}>
					Mais avant, voyez comment notre association agit sur grand écran !
				</p>
				{/* icon phone */}
				<div className='flex justify-center items-center mt-12'>
					<LucidePhone className='text-[#000]' />
					<p className='text-[#000] ml-2'>06 66 66 66 66</p>
				</div>
			</section>
		</div>
	);
}
