'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db, storage } from '@/shared/lib/firebase';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { collection, addDoc, query, orderBy, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Container } from '@/shared/ui/Container';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Textarea } from '@/shared/ui/Textarea';
import { BlogPost } from '@/shared/types/index';
import { LogOut, Trash2, Upload } from 'lucide-react';

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Blog form
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        fetchPosts();
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchPosts = async () => {
    try {
      const q = query(collection(db, 'blog-posts'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate(),
      })) as BlogPost[];
      setPosts(postsData);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Login error:', error);
      alert('로그인 실패. 이메일과 비밀번호를 확인하세요.');
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setSubmitting(true);
    try {
      let imageUrl = '';

      // Upload image if exists
      if (imageFile) {
        const storageRef = ref(storage, `blog-images/${Date.now()}_${imageFile.name}`);
        await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(storageRef);
      }

      // Add post to Firestore
      await addDoc(collection(db, 'blog-posts'), {
        title,
        excerpt,
        content,
        imageUrl,
        createdAt: new Date(),
        updatedAt: new Date(),
        published: true,
      });

      // Reset form
      setTitle('');
      setExcerpt('');
      setContent('');
      setImageFile(null);
      await fetchPosts();
      alert('포스트가 성공적으로 작성되었습니다!');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('포스트 작성 실패. 다시 시도해주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeletePost = async (postId: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    try {
      await deleteDoc(doc(db, 'blog-posts', postId));
      await fetchPosts();
      alert('포스트가 삭제되었습니다.');
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('삭제 실패. 다시 시도해주세요.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-emerald-400 font-mono">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black p-4">
        <Card className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-emerald-400 mb-6 font-mono text-center">
            Admin Login
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <Container>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-emerald-400 font-mono">
            Admin Dashboard
          </h1>
          <Button variant="secondary" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Create Post Form */}
          <Card>
            <h2 className="text-xl font-bold text-emerald-400 mb-6 font-mono">
              Create New Post
            </h2>
            <form onSubmit={handleSubmitPost} className="space-y-4">
              <Input
                label="Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <Textarea
                label="Excerpt (요약)"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={2}
                required
              />
              <Textarea
                label="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={8}
                required
              />
              <div>
                <label className="block text-emerald-400 font-mono text-sm mb-2">
                  Cover Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                  className="w-full bg-black/40 border border-emerald-500/30 rounded px-4 py-2.5 text-white font-mono"
                />
              </div>
              <Button type="submit" disabled={submitting} className="w-full">
                <Upload className="w-4 h-4 mr-2" />
                {submitting ? 'Publishing...' : 'Publish Post'}
              </Button>
            </form>
          </Card>

          {/* Posts List */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-emerald-400 font-mono">
              Published Posts ({posts.length})
            </h2>
            {posts.map((post) => (
              <Card key={post.id} hover={false}>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-white font-mono font-bold mb-1">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {post.createdAt?.toLocaleDateString()}
                    </p>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleDeletePost(post.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}