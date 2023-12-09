import { Toaster } from "react-hot-toast";
import "../globals.css";
export const metadata = {
  title: "BentOak Test",
  description: "Generated Sasan Salehzadeh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen flex flex-col items-center justify-center">
          {children}
        </main>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
