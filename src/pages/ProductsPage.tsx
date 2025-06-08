import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../components/Loader";

type Product = {
	id: number;
	title: string;
	description: string;
	price: number;
	thumbnail: string;
};

const fetchProducts = async (
	page: number,
	limit: number
): Promise<{ products: Product[]; total: number }> => {
	const skip = (page - 1) * limit;
	const res = await fetch(
		`https://dummyjson.com/products?limit=${limit}&skip=${skip}`
	);
	if (!res.ok) throw new Error("Failed to fetch products");
	return res.json();
};

const ProductsPage: React.FC = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const limit = 10;

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["products", currentPage],
		queryFn: () => fetchProducts(currentPage, limit),
		keepPreviousData: true,
	});

	const totalPages = data ? Math.ceil(data.total / limit) : 0;

	const handleAddToCart = (productTitle: string) => {
		toast.success(`Added "${productTitle}" to cart!`);
	};

	return (
		<div className="min-h-screen bg-background p-6">
			<Toaster position="top-right" />
			<h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
				Products
			</h1>

			{isLoading && <Loader />}
			{isError && (
				<p className="text-center text-red-600">
					Error: {(error as Error).message}
				</p>
			)}

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{data?.products.map((product) => (
					<div
						key={product.id}
						className="bg-cardBg rounded-lg shadow-md p-4 flex flex-col transition-transform duration-300 hover:scale-105">
						<img
							src={product.thumbnail}
							alt={product.title}
							className="w-full h-48 object-cover rounded-md mb-4"
							loading="lazy"
						/>
						<h2 className="text-lg font-semibold mb-2 text-gray-900">
							{product.title}
						</h2>

						<p className="text-gray-600 flex-grow">{product.description}</p>
						<p className="mt-3 font-bold text-cartBg ">${product.price}</p>

						<button
							onClick={() => handleAddToCart(product.title)}
							className="mt-4 bg-primary text-white py-2 rounded hover:bg-accent transition-colors duration-300">
							Add to Cart
						</button>
					</div>
				))}
			</div>

			{/* Pagination */}
			<div className="flex justify-center items-center mt-8 space-x-3">
				<button
					disabled={currentPage === 1}
					onClick={() => setCurrentPage((p) => p - 1)}
					className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 hover:bg-accent transition">
					Prev
				</button>

				{/* Pagination numbers */}
				{Array.from({ length: totalPages }, (_, i) => i + 1)
					.slice(
						Math.max(0, currentPage - 3),
						Math.min(totalPages, currentPage + 2)
					)
					.map((pageNum) => (
						<button
							key={pageNum}
							onClick={() => setCurrentPage(pageNum)}
							className={`px-4 py-2 rounded ${
								pageNum === currentPage
									? "bg-primary text-white"
									: "bg-gray-200 hover:bg-accent"
							} transition`}>
							{pageNum}
						</button>
					))}

				<button
					disabled={currentPage === totalPages}
					onClick={() => setCurrentPage((p) => p + 1)}
					className="px-4 py-2 bg-primary rounded disabled:opacity-50 hover:bg-accent transition">
					Next
				</button>
			</div>
		</div>
	);
};

export default ProductsPage;
