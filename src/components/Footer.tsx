const Footer: React.FC = () => {
	return (
		<footer className="bg-primary text-white mt-12">
			<div className="container mx-auto py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm">
				<p>© 2025 Salona. All rights reserved.</p>

				<div className="flex space-x-6 mt-4 md:mt-0">
					<a
						href="#"
						className="hover:text-accent transition-colors duration-300">
						Privacy Policy
					</a>
					<a
						href="#"
						className="hover:text-accent transition-colors duration-300">
						Terms of Service
					</a>
					<a
						href="#"
						className="hover:text-accent transition-colors duration-300">
						Contact Us
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
