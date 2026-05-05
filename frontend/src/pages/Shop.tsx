import { PlaceholderPage } from "@/components/site/PlaceholderPage";
import { useT } from "@/i18n/context";

const Shop = () => {
  const t = useT();
  return (
    <PlaceholderPage
      eyebrow={t.nav.shop}
      title="Our showrooms, online & in person."
      subtitle="A curated experience for every product family is on the way. Visit any of our flagship locations for live spec sheets and physical samples."
    />
  );
};
export default Shop;
