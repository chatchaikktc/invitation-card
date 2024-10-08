import ContactSection from "@/components/footer/ContactSection";
import FooterCollapsibleList from "@/components/footer/FooterCollapsibleList";
import FooterLinkList from "@/components/footer/FooterLinkList";
import SocialSection from "@/components/footer/SocialSection";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="tw-bg-bright-gray tw-pt-10">
      <Container>
        <FooterCollapsibleList />
        <div className="tw-flex md:tw-mb-4 md:tw-justify-between">
          <FooterLinkList />
          <ContactSection />
        </div>
        <SocialSection />
      </Container>
    </footer>
  );
}
