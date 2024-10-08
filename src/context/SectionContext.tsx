import { createContext, useEffect, useRef, useState } from "react";

interface SectionContextType {
  sections: React.MutableRefObject<Record<string, HTMLElement>>;
  setSectionRef: (name: string, sectionEl: HTMLElement | null) => void;
  activeSection: string | null;
}

interface SectionProviderProps {
  children: React.ReactNode;
}

export const SectionContext = createContext<SectionContextType>({
  sections: { current: {} },
  setSectionRef: () => {},
  activeSection: null,
});

let observer: IntersectionObserver;

export const SectionProvider = ({ children }: SectionProviderProps) => {
  const sections = useRef<Record<string, HTMLElement>>({});
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const setSectionRef: SectionContextType["setSectionRef"] = (
    name,
    sectionEl
  ) => {
    if (sectionEl !== null) {
      sections.current[name] = sectionEl;
      sectionEl.id = name;
    }
  };

  useEffect(() => {
    observer =
      observer ||
      new IntersectionObserver(
        (entries) => {
          const visibleSection = entries.find((entry) => entry.isIntersecting)
            ?.target;

          if (visibleSection) {
            setActiveSection(visibleSection.id);
          }
        },
        { rootMargin: "-50% 0% -49% 0%" }
      );

    observer.disconnect();
    Object.values(sections.current).forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return (
    <SectionContext.Provider value={{ sections, setSectionRef, activeSection }}>
      {children}
    </SectionContext.Provider>
  );
};
