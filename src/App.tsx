import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Header />
			<main className="min-h-[80vh]">
				<ProductsPage />
			</main>
			<Footer />
		</QueryClientProvider>
	);
}

export default App;
