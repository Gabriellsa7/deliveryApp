"use client";
import { StaticImageData } from "next/image";
import React, { createContext, useContext, useState, useEffect } from "react";

interface Favorites {
  id: number;
  name: string;
  img: StaticImageData;
}

interface FavoritesContextData {
  favorites: Favorites[];
  addFavorite: (newFavorites: Favorites) => void;
  removeFavorites: (id: number) => void;
}

export const FavoritesContext = createContext<FavoritesContextData | undefined>(
  undefined
);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

export const FavoritesProvider = (props: any) => {
  const { children } = props;

  const [favorites, setFavorites] = useState<Favorites[]>(() => {
    if (typeof window !== "undefined") {
      const favoritesLocalStorage = localStorage.getItem("favorites");
      return favoritesLocalStorage ? JSON.parse(favoritesLocalStorage) : [];
    } else {
      return [];
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const addFavorite = (newFavorites: Favorites) => {
    const isAlreadyAdded = favorites.some(
      (existingFavorites) => existingFavorites.id === newFavorites.id
    );
    if (!isAlreadyAdded) {
      setFavorites([...favorites, newFavorites]);
      updateLocalStorage([...favorites, newFavorites]);
    } else {
      console.log("Favorites already added!");
    }
  };

  const updateLocalStorage = (updatedFavorites: Favorites[]) => {
    console.log("Updating localStorage with favorites:", updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFavorites = (id: number) => {
    setFavorites(
      favorites.filter((favorite) => favorite && favorite.id !== id)
    );
  };

  const value: FavoritesContextData = {
    favorites,
    addFavorite,
    removeFavorites,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
