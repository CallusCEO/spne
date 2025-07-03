'use client';

import Navbar from '@/components/others/Navbar';
import Image from 'next/image';
import styles from '@/styles/page.module.css';
import Aurora from '@/components/react-bits/Aurora/Aurora';

export default function Home() {
	return (
		<div className='min-h-screen overflow-x-hidden '>
			<Navbar />
			<section id='acceuil' className={styles.acceuil}>
				<div className={styles.auroraContainer}>
					<Aurora
						colorStops={['#ee7979', '#79ee79', '#ee7979']}
						blend={1}
						amplitude={0.5}
						speed={0.5}
					/>
				</div>
			</section>
		</div>
	);
}
