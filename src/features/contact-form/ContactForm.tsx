'use client';

import { useState, FormEvent } from 'react';
import { Input } from '@/shared/ui/Input';
import { Textarea } from '@/shared/ui/Textarea';
import { Button } from '@/shared/ui/Button';
import { ContactFormData } from '@/shared/types/index';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase';

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Firebase에 저장
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: new Date(),
        notificationEmail: 'ookim7717@naver.com',
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <Input
        label="Name"
        type="text"
        placeholder="John Doe"
        value={formData.name}
        onChange={(e) => handleChange('name', e.target.value)}
        required
      />
      
      <Input
        label="Email"
        type="email"
        placeholder="john@example.com"
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
        required
      />
      
      <Textarea
        label="Message"
        placeholder="Your message..."
        value={formData.message}
        onChange={(e) => handleChange('message', e.target.value)}
        required
      />

      <Button
        type="submit"
        disabled={status === 'loading'}
        className="w-full"
      >
        {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
      </Button>

      {status === 'success' && (
        <p className="text-emerald-400 text-center font-mono text-sm">
          Message sent successfully!
        </p>
      )}
      
      {status === 'error' && (
        <p className="text-red-400 text-center font-mono text-sm">
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
};