const Loader: React.FC = () => (
	<div className="flex justify-center items-center py-10">
		<div className="relative w-12 h-12">
			<div className="absolute border-4 border-blue-500 border-t-transparent rounded-full w-full h-full animate-spin"></div>

			<div className="absolute border-4 border-green-400 border-t-transparent rounded-full w-9 h-9 top-1.5 left-1.5 animate-spin animation-delay-150"></div>

			<div className="absolute border-4 border-yellow-400 border-t-transparent rounded-full w-6 h-6 top-3 left-3 animate-spin animation-delay-300"></div>
		</div>
	</div>
);

export default Loader;
