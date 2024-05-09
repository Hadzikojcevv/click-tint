
import '../globals.css'

export const metadata = {
  title: 'Admin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{padding: 0 }}>
        {children}</body>
    </html>
  )
}
