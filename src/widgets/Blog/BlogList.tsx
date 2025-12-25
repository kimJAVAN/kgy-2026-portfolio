'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Section } from '@/shared/ui/Section';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { BlogPost } from '@/shared/types/index';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase';
import { Calendar, Clock } from 'lucide-react';

export const BlogList = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // 인덱스 없이 작동 - orderBy 제거
        const snapshot = await getDocs(collection(db, 'blog-posts'));
        
        const postsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate(),
          updatedAt: doc.data().updatedAt?.toDate(),
        })) as BlogPost[];
        
        // JavaScript로 필터링 + 정렬
        const publishedPosts = postsData
          .filter(post => post.published !== false)
          .sort((a, b) => {
            if (!a.createdAt || !b.createdAt) return 0;
            return b.createdAt.getTime() - a.createdAt.getTime();
          });
        
        setPosts(publishedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <Section id="blog">
        <div className="text-center text-emerald-400 font-mono">Loading...</div>
      </Section>
    );
  }

  return (
    <Section id="blog">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dev <span className="text-emerald-400">Blog</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Thoughts, tutorials, and insights from my development journey
          </p>
        </div>

        {posts.length === 0 ? (
          <Card className="text-center">
            <p className="text-gray-400 font-mono">No posts yet. Stay tuned!</p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card 
                key={post.id} 
                className="group flex flex-col cursor-pointer"
                onClick={() => router.push(`/blog/${post.id}`)}
              >
                {post.imageUrl && (
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors font-mono">
                    {post.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.createdAt?.toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      5 min read
                    </span>
                  </div>

                  <p className="text-gray-400 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="mt-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/blog/${post.id}`);
                    }}
                  >
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};