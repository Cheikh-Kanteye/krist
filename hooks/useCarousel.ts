import { useState, useRef, useEffect } from "react";

const useCarousel = () => {
  const [hasPrevious, setHasPrevious] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Fonction pour gérer le défilement vers la droite ou la gauche
  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth / 2; // Scroll de la moitié de la largeur visible
      if (direction === "left") {
        carouselRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        carouselRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  // Mettre à jour l'état pour afficher/masquer les boutons de navigation
  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setHasPrevious(scrollLeft > 0);
      setHasNext(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    handleScroll(); // Vérifier à l'initialisation
  }, []);

  return {
    hasPrevious,
    hasNext,
    scroll,
    carouselRef,
    handleScroll,
  };
};

export default useCarousel;
