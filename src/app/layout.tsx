import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
});

export const metadata: Metadata = {
	title: 'SPNE',
	description: 'Site officiel de la SPNE',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='fr'>
			<body className={`${montserrat.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
