import Menu from "@/components/secondaryMenuSection/Menu";
import Navigation from "@/components/secondaryMenuSection/Navigation";
import Container from "@/components/ui/Container";
import useSection from "@/hooks/useSectionHeader";
import { twMerge } from "@/lib/twMerge";

import { SECTION_NAME as KEYVISUAL_SECTION_NAME } from "@/components/heroSection/HeroSection";

interface NavigationItemProps {
  sectionName: string;
}


function SecondaryMenuSection() {
  return (
    <>
    <HeaderSection sectionName={KEYVISUAL_SECTION_NAME} />
      
    </>
    
  );
}

export default SecondaryMenuSection;

function HeaderSection({sectionName }: NavigationItemProps) {
  const { activeSection } = useSection();

  return (
    <header 
    className={twMerge(
      " tw-z-[8] tw-bg-white tw-py-2.5 lg:tw-py-0",
      sectionName != activeSection &&  "tw-secondary-sticky" ||  "tw-hidden"
    )}
    >
      <Container>
        <div className="lg:tw-hidden">
          <Menu />
        </div>
        <div className="tw-hidden lg:tw-block">
          <Navigation />
        </div>
      </Container>
    </header>
  );
}