import "./globals.css";

export const metadata = {
  title: 'CodeMeta Solutions',
  description: 'Découvrez les services de développement frontend de CodeMeta Solutions. Nous créons des expériences web exceptionnelles pour nos clients.',
  keywords : "développement frontend, sites web interactifs, conception UI/UX, SEO, débogage"
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}