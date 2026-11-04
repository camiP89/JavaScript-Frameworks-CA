import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";

function Home() {
  return (
    <main className="min-h-screen bg-cream p-4">
      <Hero />

      <h1 className="pt-4 text-4xl font-bold text-berry">
        Welcome to Allsorts!
      </h1>

      <ProductGrid products={[]} />
    </main>
  );
}

export default Home;
