'use client';

import Link from "next/link";
import Image from "next/image";
import mangaData from "../public/data";
import { useState } from "react";

export default function Home() {
  const [likedManga, setLikedManga] = useState(
    mangaData.map(() => false) // Initialize all as not liked
  );
  const [likes, setLikes] = useState(mangaData.map((manga) => manga.likes)); // Initialize likes

  const toggleLike = (index: number) => {
    setLikedManga((prevLikedManga) => {
      const updatedLikedManga = [...prevLikedManga];
      updatedLikedManga[index] = !updatedLikedManga[index];

      // Update likes based on the new liked state
      setLikes((prevLikes) => {
        const updatedLikes = [...prevLikes];
        if (updatedLikedManga[index]) {
          updatedLikes[index] += 1;
        } else {
          updatedLikes[index] -= 1;
        }
        return updatedLikes;
      });

      return updatedLikedManga;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-[12%] md:grid-cols-3 lg:grid-cols-4 gap-8 px-5 cursor-pointer lg:mt-[5%] md:mt-14">
        {mangaData.map((manga, index) => (
          <Link href={`/manga/${index}`} key={index}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform md:hover:scale-105 lg:hover:scale-105 duration-500 lg:hover:shadow-xl">
              <Image
                width={1000}
                height={1000}
                className="w-full object-cover rounded-t-lg"
                src={manga.cover}
                alt={`${manga.title} cover`}
              />
              <div className="p-5">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 truncate">
                  {manga.title}
                </h2>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                  {manga.category}
                </span>
                <div className="mt-3 flex justify-between text-gray-700 text-sm items-center">
                  <div className="flex items-center gap-2">
                    <Image
                      src={likedManga[index] ? "/like.png" : "/no_like.png"}
                      alt="heart"
                      width={20}
                      height={20}
                      className="scale-[1.3] duration-300 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent navigation when liking
                        toggleLike(index);
                      }}
                    />
                    <span className="font-medium">{likes[index]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src={"/eye.png"} alt="eye" width={20} height={20} />
                    <span className="font-medium">{manga.views}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
