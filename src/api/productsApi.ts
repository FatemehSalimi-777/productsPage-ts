import axios from "axios";

export const fetchProducts = async (skip = 0, limit = 10) => {
	const response = await axios.get(
		`https://dummyjson.com/products?skip=${skip}&limit=${limit}`
	);
	return response.data;
};
