import { Demo } from "@repo/shared";
import { LandingPage } from "@repo/shared/dist/server";

export const metadata = {
  title: "React 18 Loaders",
};

/** next.js landing page */
export default function Page(): JSX.Element {
  return (
    <LandingPage title="Next.js Example">
      <Demo />
    </LandingPage>
  );
}
