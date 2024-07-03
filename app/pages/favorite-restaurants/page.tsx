"use client";
import {
  FavoritesProvider,
} from "@/app/context/favorite-context";
import FavoriteRestaurantsContent from "./favorite-restaurants-content/content";

export function FavoriteRestaurants() {
  return (
    <FavoritesProvider>
      {" "}
      {/* Wraps the "My Favorites" page with the FavoritesProvider provider */}
      <FavoriteRestaurantsContent />
    </FavoritesProvider>
  );
}

export default FavoriteRestaurants;
