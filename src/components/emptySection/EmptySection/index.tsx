import useSection from "@/hooks/useSection";

//(ฟังชั้นเปลี่ยนภาษา)
//import { useTranslation } from "react-i18next"; 

export const SECTION_NAME = "overview";

function EmptySection() {
  const { setSectionRef } = useSection();

  //(ฟังชั้นเปลี่ยนภาษา)
  //const { t } = useTranslation();
  //import { translateContent } from "@/lib/i18n";

  return (
      <section
        ref={(el) => setSectionRef(SECTION_NAME, el)}
        className="tw-h-[500px] tw-bg-black"
      >
        <div className="tw-mx-auto tw-w-full tw-max-w-[1440px] tw-px-5 lg:tw-px-5 xl:tw-px-20">Content here</div>
      </section>
  );
}

export default EmptySection;