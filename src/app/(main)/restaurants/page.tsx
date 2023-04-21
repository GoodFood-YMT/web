import { AllRestaurantsCardSection } from "~/components/restaurants/sections/AllRestaurantsCardSection";
import { Container } from "~/core/components/Container";
import { SearchBar } from "~/core/components/SearchBar";

export default function Page() {
  return (
    <div>
      <Container>
        <SearchBar />
      </Container>
      <AllRestaurantsCardSection />
    </div>
  );
}
