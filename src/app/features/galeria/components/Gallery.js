"use client";

import { galleries } from "@/data/galleries";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";

export const Gallery = () => {
  const [currentGallery, setCurrentGallery] = useState(null);
  const [index, setIndex] = useState(-1);

  const Lightbox = dynamic(
  () => import("yet-another-react-lightbox"),
  { ssr: false }
);

  return (
    <div className="w-[85%] mx-auto">

      {/* LIGHTBOX */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={
          currentGallery
            ? galleries[currentGallery].images.map((src) => ({ src }))
            : []
        }
      />

      {/* GALERÍAS */}
      {Object.entries(galleries).map(([category, data]) => (
        <section key={category} className="mb-20">

          {/* TÍTULO */}
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-8">
            {data.title}
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {data.images.map((src, i) => (
              <div
                key={src}
                onClick={() => {
                  setCurrentGallery(category);
                  setIndex(i);
                }}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-neutral-900"
              >

                <Image
                  src={src}
                  alt="Figura"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="
                    object-cover
                    transition duration-500
                    group-hover:scale-110
                    group-hover:brightness-110
                  "
                />

                {/* overlay suave */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />

              </div>
            ))}

          </div>
        </section>
      ))}
    </div>
  );
};