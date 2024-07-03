"use client";
import Header from "@/app/_components/header";
import {
  FavoritesProvider,
  useFavorites,
} from "@/app/context/favorite-context";
import { AlarmClock, BikeIcon } from "lucide-react";
import Image from "next/image";
import { MdDeleteForever } from "react-icons/md";

export function FavoriteRestaurants() {
  return (
    <FavoritesProvider>
      {" "}
      {/* Wraps the "My Favorites" page with the FavoritesProvider provider */}
      {/* <FavoriteRestaurantsContent /> */}
    </FavoritesProvider>
  );
}

// const FavoriteRestaurantsContent = () => {
//   const { favorites, removeFavorites } = useFavorites();

//   const handleDeleteFavorites = (recipeId: any) => {
//     removeFavorites(recipeId);
//   };
//   return (
//     <main>
//       <Header />
//       <div className="flex flex-col mt-6 mx-5 gap-6">
//         <h1 className="font-bold text-lg text-[#323232]">
//           Favorite Restaurants
//         </h1>
//         {favorites &&
//           favorites.map((favorite) => (
//             <div key={favorite.id} className="flex gap-3 flex-col">
//               <div className="relative">
//                 <Image
//                   src={favorite.img}
//                   alt="Favorite"
//                   width={350}
//                   className="rounded-xl max-h-[138px]"
//                 />
//                 <div className="absolute top-2 right-2">
//                   <button onClick={() => handleDeleteFavorites(favorite.id)}>
//                     <MdDeleteForever
//                       className="text-[#3e404a] hover:text-slate-400 duration-500"
//                       size={32}
//                     />
//                   </button>
//                 </div>
//               </div>
//               <div>
//                 <span className="font-bold text-sm text-[#323232]">
//                   {favorite.name}
//                 </span>
//                 <div className="flex items-center gap-2">
//                   <div className="flex items-center gap-1">
//                     <div className="flex items-center gap-2">
//                       <BikeIcon size={12} color="#EA1D2C" />
//                     </div>
//                     <span className="font-bold text-xs text-[#7E8392]">
//                       Free
//                     </span>
//                   </div>
//                   <div className="flex  items-center gap-1">
//                     <div className="flex items-center gap-2">
//                       <AlarmClock size={12} color="#EA1D2C" />
//                     </div>
//                     <span className="font-bold text-xs text-[#7E8392]">
//                       40min
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </main>
//   );
// };

export default FavoriteRestaurants;
