import { Navigation } from '@/widgets/Navigation/Navigation';
import { Guestbook } from '@/widgets/Guestbook/Guestbook';
import { Footer } from '@/widgets/Footer/Footer';

export default function GuestbookPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen">
        <Guestbook />
      </main>
      <Footer />
    </>
  );
}