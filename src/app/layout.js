import './globals.css'
import Container from '@/components/Container'

export const metadata = {
    title: 'Sam Carr - Web Developer',
    description: 'Created with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
            <Container>
                {children}
            </Container>
        </body>
    </html>
  )
}
