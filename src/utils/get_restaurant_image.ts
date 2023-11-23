export const getRestaurantImage = (name: string): string => {
  name = name.toLowerCase();

  if (name.includes("donalds") || name.includes("burger")) {
    return "/restaurants/burger.webp";
  }

  if (name.includes("sushi")) {
    return "/restaurants/sushi.webp";
  }

  if (name.includes("tacos")) {
    return "/restaurants/tacos.webp";
  }

  if (name.includes("kebab")) {
    return "/restaurants/kebab.webp";
  }

  if (name.includes("pizza")) {
    return "/restaurants/pizza.webp";
  }

  return "/restaurants/default.avif";
};
