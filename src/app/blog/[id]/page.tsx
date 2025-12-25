'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase';
import { Navigation } from '@/widgets/Navigation/Navigation';
import { Footer } from '@/widgets/Footer/Footer';
import { Container } from '@/shared/ui/Container';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { BlogPost } from '@/shared/types/index';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, 'blog-posts', params.id as string);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setPost({
            id: docSnap.id,
            ...data,
            createdAt: data.createdAt?.toDate(),
            updatedAt: data.updatedAt?.toDate(),
          } as BlogPost);
        } else {
          console.error('Post not found');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchPost();
    }
  }, [params.id]);

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <p className="text-emerald-400 font-mono">Loading...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <Card className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4 font-mono">
              Post Not Found
            </h2>
            <p className="text-gray-400 mb-6">
              The blog post you're looking for doesn't exist.
            </p>
            <Button onClick={() => router.push('/blog')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Card>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen">
        <Container>
          <div className="max-w-4xl mx-auto py-12">
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => router.push('/blog')}
              className="mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>

            {/* Cover Image */}
            {post.imageUrl && (
              <div className="w-full h-96 rounded-lg overflow-hidden mb-8">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <Card>
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex items-center gap-6 text-gray-400 font-mono text-sm mb-8 pb-8 border-b border-emerald-500/20">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.createdAt?.toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  5 min read
                </span>
              </div>

              {/* Excerpt */}
              {post.excerpt && (
                <div className="bg-emerald-500/10 border-l-4 border-emerald-500 p-6 mb-8 rounded">
                  <p className="text-lg text-emerald-100 italic">
                    {post.excerpt}
                  </p>
                </div>
              )}

              {/* Content */}
              <div className="prose prose-invert prose-emerald max-w-none">
                <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </div>
              </div>

              {/* Updated Date */}
              {post.updatedAt && post.updatedAt.getTime() !== post.createdAt?.getTime() && (
                <div className="mt-12 pt-8 border-t border-emerald-500/20">
                  <p className="text-sm text-gray-500 font-mono">
                    Last updated: {post.updatedAt.toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              )}
            </Card>

            {/* Navigation */}
            <div className="mt-12 flex justify-center">
              <Button onClick={() => router.push('/blog')}>
                View All Posts
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}