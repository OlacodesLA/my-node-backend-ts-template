import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const Gallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const norx = useTransform(scrollYProgress, [0, 1], ["1%", "95%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[200vh] bg-gradient-to-b from-purple-100 to-white"
    >
      <div className="sticky top-0  h-screen items-center  overflow-hidden">
        <div className="flex justify-center">
          <h2 className="relative font-christmas font-bold text-green-800 lg:text-6xl text-4xl h-fit w-fit text-center mt-24">
            Gallery{" "}
            <img
              src="/assets/hat.png"
              className="w-14 absolute -right-8 -top-2 rotate-6"
              alt=""
            />
          </h2>
        </div>
        <div className="flex my-10 ">
          <motion.div style={{ x }} className="flex gap-10">
            {cards.map((card: { id: number; url: string; title: string }) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

const Card = ({
  card,
}: {
  card: { id: number; url: string; title: string };
}) => {
  return (
    <div
      key={card.id}
      className="group relative h-[calc(100vh-200px)] w-[300px] overflow-hidden bg-neutral-200 rounded-md"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-3xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "https://images.unsplash.com/photo-1451772741724-d20990422508?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Image 1",
    id: 1,
  },
  {
    url: "https://images.unsplash.com/photo-1544546491-1ecfecfcc75a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Image 2",
    id: 2,
  },
  {
    url: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Image 3",
    id: 3,
  },
  {
    url: "https://images.unsplash.com/photo-1588158074612-37ee7e776f91?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Image 4",
    id: 4,
  },
  {
    url: "https://images.unsplash.com/photo-1576025916944-438d601fc0bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Image 5",
    id: 5,
  },
  {
    url: "https://images.unsplash.com/photo-1575383359917-e585c563a8e3?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Image 6",
    id: 6,
  },
  {
    url: "https://images.unsplash.com/photo-1607162502705-b3462b223df7?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Image 7",
    id: 7,
  },
];

const squareData = [
  {
    id: 1,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1544546491-1ecfecfcc75a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1588158074612-37ee7e776f91?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1576025916944-438d601fc0bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1575383359917-e585c563a8e3?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1607162502705-b3462b223df7?q=80&w=1904&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1545602334-0bf5a623bd94?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1482330454287-3cf6611d0bc9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1577201867028-6d7a8a243bd8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1543858710-af0479276bed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1577731046307-463386618eac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNocmlzdG1hcyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1482638591678-a11589a805f2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1575974645353-cd3e1f87ed04?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1480997287174-51a5ce0523ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
