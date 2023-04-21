import { AllProductsCardSection } from "~/components/products/sections/AllProductsCardSection";
import { RestaurantHero } from "~/components/restaurants/RestaurantHero";
import { Container } from "~/core/components/Container";
import { SearchBar } from "~/core/components/SearchBar";

export default function Page() {
  return (
    <div>
      <Container>
        <RestaurantHero
          name="Dunkin Donus"
          location="New York"
          image="https://images.unsplash.com/photo-1608455211475-3ac50b076f84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80"
        />
        <SearchBar />
        <AllProductsCardSection />
      </Container>
    </div>
  );
}
