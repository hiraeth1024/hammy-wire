import { PlaceholderPage } from "@/components/site/PlaceholderPage";
import { useT } from "@/i18n/context";

const About = () => {
  const t = useT();
  return (
    <PlaceholderPage
      eyebrow={t.nav.about}
      title="Three decades of pure copper."
      subtitle="From a single workshop in Ningbo to fifty countries served — the full Hammy story is being written. Stay tuned."
    />
  );
};
export default About;
