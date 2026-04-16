import PublicFooter from "@/components/shared/public-footer";
import PublicNavbar from "@/components/shared/public-navbar";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicNavbar />
      <main className="grow">{children}</main>
      <PublicFooter />
    </div>
  );
}
