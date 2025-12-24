'use client';

import { useState, useEffect, FormEvent } from 'react';
import { Section } from '@/shared/ui/Section';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Textarea } from '@/shared/ui/Textarea';
import { GuestbookEntry } from '@/shared/types/index.ts';
import { collection, addDoc, query, orderBy, getDocs, limit } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase';
import { MessageSquare } from 'lucide-react';

export const Guestbook = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const q = query(
        collection(db, 'guestbook'),
        orderBy('createdAt', 'desc'),
        limit(20)
      );
      const snapshot = await getDocs(q);
      const entriesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
      })) as GuestbookEntry[];
      setEntries(entriesData);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setLoading(true);
    try {
      await addDoc(collection(db, 'guestbook'), {
        name: name.trim(),
        message: message.trim(),
        createdAt: new Date(),
      });

      setName('');
      setMessage('');
      await fetchEntries();
    } catch (error) {
      console.error('Error adding entry:', error);
      alert('Failed to add entry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="guestbook">
      <div className="space-y-12 max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Guest <span className="text-emerald-400">Book</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg">
            Leave a message and let me know you were here!
          </p>
        </div>

        {/* Form */}
        <Card>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Your Name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Textarea
              label="Message"
              placeholder="Leave your thoughts..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={3}
            />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Posting...' : 'Sign Guestbook'}
            </Button>
          </form>
        </Card>

        {/* Entries */}
        <div className="space-y-4">
          {entries.length === 0 ? (
            <Card className="text-center">
              <MessageSquare className="w-12 h-12 text-emerald-400/30 mx-auto mb-3" />
              <p className="text-gray-400 font-mono">
                No entries yet. Be the first to sign!
              </p>
            </Card>
          ) : (
            entries.map((entry) => (
              <Card key={entry.id} hover={false}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400 font-mono font-bold">
                      {entry.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono font-bold text-white">
                        {entry.name}
                      </span>
                      <span className="text-gray-500 text-sm font-mono">
                        {entry.createdAt?.toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-400 break-words">
                      {entry.message}
                    </p>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </Section>
  );
};