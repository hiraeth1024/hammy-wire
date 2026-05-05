import { PlaceholderPage } from "@/components/site/PlaceholderPage";
import { useT } from "@/i18n/context";

const Contact = () => {
  const t = useT();
  return (
    <PlaceholderPage
      eyebrow={t.nav.contact}
      title="Talk to an engineer."
      subtitle="A full enquiry form, OEM portal and live chat are coming. For now, write us at sales@hammy.example or call +86 574 1234 5678."
    />
  );
};
export default Contact;
