import "./globals.css"; // 🟢 Make sure this is here!

export const metadata = {
  title: "Home",
  description: "Landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
