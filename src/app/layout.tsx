import type { Metadata } from 'next'
import './globals.css'
import { BackgroundGrid } from '@/shared/ui/BackgroundGrid'
import { CustomCursor } from '@/shared/ui/CustomCursor'

export const metadata: Metadata = {
  title: '김근영 - Frontend Developer',
  description: 'Professional Frontend Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className='flex flex-col w-full'>
        <BackgroundGrid/>
        <main>
          <CustomCursor />
          {children}
        </main>
      </body>
    </html>
  )
}