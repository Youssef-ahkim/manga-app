'use client'
import { useParams } from "next/navigation";
import Image from "next/image";
import mangaData from "../../../public/data"; // Adjust path if necessary

export default function MangaDetails() {
  const { id } = useParams(); // Retrieve the dynamic route parameter

  // Ensure that id is converted to a number if mangaData is an array
  const manga = mangaData[Number(id)];

  if (!manga) {
    return <div className="text-center mt-10">Manga not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 mt-[7%] lg:mt-[5%] md:mt-12">
        {manga.title}
      </h1>
      <div className="flex flex-col items-center">
        {manga.pages.map((page, index) => (
          <div key={index} className="mb-5">
            <Image
              src={page}
              alt={`Page ${index + 1}`}
              width={800}
              height={1000}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
