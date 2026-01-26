import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-slate-900">
        <Header />

        <main className="flex-1 max-w-7xl mx-auto px-6 py-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
