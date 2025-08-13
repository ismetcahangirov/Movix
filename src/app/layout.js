import "./globals.css";


export const metadata = {
  title: "Movix | Filmlər, Seriallar və Treylərlər",
  description:
    "Movix ilə ən son filmləri, yüksək reytinqli serialları və eksklüziv treylerləri kəşf edin. TMDB API məlumatları ilə zəngin kino dünyasına dalın.",
  keywords: [
    "filmlər",
    "seriallar",
    "treyler",
    "kino",
    "top filmlər",
    "populyar filmlər",
    "yeni filmlər",
    "pulsuz film məlumatları",
    "TMDB"
  ],
  authors: [{ name: "Movix Team" }],
  openGraph: {
    title: "Movix | Filmlər, Seriallar və Treylərlər",
    description:
      "Movix ilə ən son filmləri, yüksək reytinqli serialları və eksklüziv treylerləri kəşf edin. TMDB API məlumatları ilə zəngin kino dünyasına dalın.",
    url: "https://movix-livid-one.vercel.app",
    siteName: "Movix",
    locale: "az_AZ",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <link
          rel="icon"
          href="../logo.svg"
          type="image/svg+xml"
        />
      </head>
      <body className={` font-montserrat antialiased bg-midnight flex flex-col justify-between h-screen`}>
        {children}
      </body>
    </html>
  );
}
