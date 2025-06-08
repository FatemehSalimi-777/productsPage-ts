import React from "react";

type Product = {
	id: number;
	title: string;
	price: number;
	thumbnail: string;
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
	<div className="border rounded-xl p-4 shadow hover:shadow-lg transition-all">
		<img
			src={product.thumbnail}
			alt={product.title}
			className="w-full h-40 object-cover rounded"
		/>
		<h2 className="font-semibold mt-2">{product.title}</h2>
		<p className="text-sm text-gray-500">${product.price}</p>
		<button
			className="mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors duration-300"
			onClick={() => alert(`Added ${product.title} to cart!`)}>
			Add to Cart
		</button>
	</div>
);

export default ProductCard;
