import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KGY ARCHIVE | FE Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-black text-green-500 overflow-x-hidden antialiased">
        {/* 스캔라인 레이어 */}
        <div className="scanlines fixed inset-0 pointer-events-none z-[100]"></div>
        
        {/* 실제 콘텐츠 */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}