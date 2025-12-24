'use client';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Section, Card } from '@/shared/ui';
import { ContactForm } from '@/features/contact-form/ContactForm';
import { SOCIAL_LINKS } from '@/shared/constants/data';

const ICON_MAP = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export const Contact = () => {
  return (
    <Section id="contact">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <h3 className="text-2xl font-bold text-emerald-400 mb-6 font-mono">
              Send Message
            </h3>
            <ContactForm />
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-2xl font-bold text-emerald-400 mb-6 font-mono">
                Connect With Me
              </h3>
              <div className="space-y-4">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = ICON_MAP[link.icon as keyof typeof ICON_MAP];
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded bg-black/40 border border-emerald-500/20 hover:border-emerald-500/50 transition-all group"
                    >
                      <div className="p-2 bg-emerald-500/10 rounded group-hover:bg-emerald-500/20 transition-colors">
                        <Icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-white font-mono">{link.name}</p>
                        <p className="text-gray-400 text-sm">{link.url.replace('https://', '').replace('mailto:', '')}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-emerald-400 mb-4 font-mono">
                Location
              </h3>
              <p className="text-gray-400">
                Based in Seoul, South Korea<br />
                Open to remote opportunities worldwide
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};