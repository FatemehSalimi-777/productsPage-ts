const Header: React.FC = () => {
	return (
		<header className="bg-primary text-white shadow-md">
			<div className="container mx-auto flex items-center justify-between py-4 px-6">
				<div className="text-xl font-bold cursor-pointer select-none">
					Salona Task | Fatemeh Salimi
				</div>

				<nav className="hidden md:flex space-x-8 font-semibold">
					<a
						href="#"
						className="hover:text-accent transition-colors duration-300">
						Home
					</a>
					<a
						href="#"
						className="hover:text-accent transition-colors duration-300">
						Products
					</a>
					<a
						href="#"
						className="hover:text-accent transition-colors duration-300">
						About
					</a>
				</nav>

				<div className="relative cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-7 w-7 text-white hover:text-accent transition-colors duration-300"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4"
						/>
						<circle cx="7" cy="21" r="2" />
						<circle cx="17" cy="21" r="2" />
					</svg>

					<span className="absolute -top-2 -right-2 bg-cartBg rounded-full w-5 h-5 text-xs flex items-center justify-center text-cardBg font-bold">
						3
					</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
