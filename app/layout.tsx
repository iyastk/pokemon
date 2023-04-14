import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata = {
  title: "Pokemon",
  description: "A simple website to list out pokemon and its generations and evolutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation></Navigation>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
