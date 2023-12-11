import './globals.css'
// import '../../fonts/stylesheet.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RC TRACKS',
  description: 'RC TRACKS website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      
      
      <script src="../path/to/flowbite/dist/flowbite.min.js" async ></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js" async ></script>
      </body>
    </html>
    
  )
}
