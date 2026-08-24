import "./globals.css";

export const metadata = {
  title: "Himasha Keshana Rathnayaka | Portfolio",
  description: "Digital Creator & Tech Solutions Specialist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white w-full m-0 p-0 overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}