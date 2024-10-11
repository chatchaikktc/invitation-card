import { useMediaQuery as useReactResponsive } from "react-responsive";

export const useMediaQuery = () => {
  const isSm = useReactResponsive({
    query: `(min-width: 375px)`,
  });

  const isMd = useReactResponsive({
    query: `(min-width: 768px)`,
  });

  const isLg = useReactResponsive({
    query: `(min-width: 1024px)`,
  });

  return { isSm, isMd, isLg };
};
