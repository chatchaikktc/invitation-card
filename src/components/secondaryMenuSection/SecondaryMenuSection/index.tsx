import Menu from "@/components/secondaryMenuSection/Menu";
import Navigation from "@/components/secondaryMenuSection/Navigation";
import Container from "@/components/ui/Container";

function SecondaryMenuSection() {
  return (
    
    <header className="tw-secondary-sticky tw-z-[8] tw-bg-white tw-py-2.5 lg:tw-py-0 tw-shadow-md">
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

export default SecondaryMenuSection;

