// components/SiteNavbar.tsx
import Link from 'next/link';

const links = [
	{ label: 'Services', href: '#services' },
	{ label: 'Prices', href: '#prices' },
	{ label: 'Gallery', href: '#gallery' },
	{ label: 'Reviews', href: '#reviews' },
	{ label: 'Contact', href: '#contact' },
];

export function Navbar({ brand }: { brand: string }) {
	return (
		<div className='navbar bg-base-100/80 backdrop-blur sticky top-0 z-50 border-b border-base-200'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
						☰
					</div>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52'>
						{links.map((l) => (
							<li key={l.href}>
								<a href={l.href}>{l.label}</a>
							</li>
						))}
					</ul>
				</div>

				<Link href='/' className='btn btn-ghost text-xl'>
					{brand}
				</Link>
			</div>

			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>
					{links.map((l) => (
						<li key={l.href}>
							<a href={l.href}>{l.label}</a>
						</li>
					))}
				</ul>
			</div>

			<div className='navbar-end'>
				<a href='#contact' className='btn btn-primary'>
					Get a quote
				</a>
			</div>
		</div>
	);
}
