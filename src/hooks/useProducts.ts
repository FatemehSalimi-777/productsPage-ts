// src/hooks/useProducts.ts
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/productsApi";

export const useProducts = (page: number, pageSize: number) => {
	const skip = (page - 1) * pageSize;

	return useQuery({
		queryKey: ["products", page],
		queryFn: () => fetchProducts(skip, pageSize),
	});
};
