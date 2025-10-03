import "./globals.css"; // 🟢 Make sure this is here!
import Layout from "../components/Layout";
export const metadata = {
  title: "Home",
  description: "Landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
