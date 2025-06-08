type PaginationProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {
	if (totalPages === 0) return null;

	const getPageNumbers = () => {
		const maxPagesToShow = 5;
		const pages: (number | "...")[] = [];

		if (totalPages <= maxPagesToShow) {
			for (let i = 1; i <= totalPages; i++) pages.push(i);
		} else {
			if (currentPage <= 3) {
				pages.push(1, 2, 3, 4, 5, "...", totalPages);
			} else if (currentPage >= totalPages - 2) {
				pages.push(
					1,
					"...",
					totalPages - 4,
					totalPages - 3,
					totalPages - 2,
					totalPages - 1,
					totalPages
				);
			} else {
				pages.push(
					1,
					"...",
					currentPage - 1,
					currentPage,
					currentPage + 1,
					"...",
					totalPages
				);
			}
		}
		return pages;
	};

	const pages = getPageNumbers();

	return (
		<div className="flex justify-center items-center space-x-2 mt-6">
			<button
				onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
				disabled={currentPage === 1}
				className="px-3 py-1 rounded-md bg-gray-300 disabled:opacity-50">
				Prev
			</button>

			{pages.map((page, index) =>
				page === "..." ? (
					<span
						key={`dots-${index}`}
						className="px-2 py-1 text-gray-500 select-none">
						...
					</span>
				) : (
					<button
						key={page}
						onClick={() => onPageChange(page as number)}
						className={`px-3 py-1 rounded-md ${
							page === currentPage
								? "bg-blue-600 text-white"
								: "bg-gray-200 hover:bg-gray-300"
						}`}>
						{page}
					</button>
				)
			)}

			<button
				onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
				disabled={currentPage === totalPages}
				className="px-3 py-1 rounded-md bg-gray-300 disabled:opacity-50">
				Next
			</button>
		</div>
	);
};

export default Pagination;
