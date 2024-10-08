import { useMediaQuery as useReactResponsive } from "react-responsive";

export const useMediaQuery = () => {
  const isMd = useReactResponsive({
    query: `(min-width: 768px)`,
  });

  const isLg = useReactResponsive({
    query: `(min-width: 1024px)`,
  });

  return { isMd, isLg };
};
