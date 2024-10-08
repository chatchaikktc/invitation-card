import { SectionContext } from "@/context/SectionContext";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useContext } from "react";

const useSection = () => {
  const { sections, setSectionRef, activeSection } = useContext(SectionContext);
  const { isLg } = useMediaQuery();

  const scrollToSection = (
    name: string,
    options: { offset?: number; offsetLg?: number } = {}
  ) => {
    const { offset = 450, offsetLg = 100 } = options;
    const targetSection = sections.current[name];

    if (targetSection) {
      let offsetPosition =
        targetSection.getBoundingClientRect().top + window.pageYOffset;

      if (isLg) {
        offsetPosition = offsetPosition - offsetLg;
      } else {
        offsetPosition = offsetPosition - offset;
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return { sections, setSectionRef, scrollToSection, activeSection };
};

export default useSection;
