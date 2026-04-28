  "use client";

  import { galleries } from "@/data/galleries";
  import Image from "next/image";
  import { useState } from "react";
  import { motion } from "framer-motion";
  import "yet-another-react-lightbox/styles.css";
  import dynamic from "next/dynamic";

  const Lightbox = dynamic(
    () => import("yet-another-react-lightbox"),
    { ssr: false }
  );

  export const Gallery = () => {
    const [currentGallery, setCurrentGallery] = useState(null);
    const [index, setIndex] = useState(-1);

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

        {Object.entries(galleries).map(([category, data]) => (

          <section key={category} className="mb-24 animate-fade-in animate-duration-400">

            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-primary tracking-tight">
                {data.title}
              </h2>

              <div className="mt-3 flex items-center gap-3">
                <div className="h-[2] w-10 bg-primary/60" />
                  <span className="font-display text-white/40 text-sm tracking-wide uppercase">
                  Galería
                </span>
              </div>
            </div>


            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="grid grid-cols-2 md:grid-cols-5 gap-5"
            >

              {data.images.map((src, i) => (

                <motion.div
                  key={`${category}-${i}-${src}`}
                  onClick={() => {
                    setCurrentGallery(category);
                    setIndex(i);
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.95 },
                    show: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-neutral-900"
                >

                  <Image
                    src={src}
                    alt="Figura"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority={category === "anime" && i === 4}
                    className="object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                </motion.div>

              ))}
            </motion.div>
          </section>

        ))}
      </div>
    );
  };