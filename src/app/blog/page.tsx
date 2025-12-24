import { Navigation } from '@/widgets/Navigation/Navigation';
import { BlogList } from '@/widgets/Blog/BlogList';
import { Footer } from '@/widgets/Footer/Footer';

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen">
        <BlogList />
      </main>
      <Footer />
    </>
  );
}