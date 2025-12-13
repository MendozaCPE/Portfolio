import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, MapPin, Send } from 'lucide-react';
import { profile } from '../data/profile';
import { mockBackend } from '../services/mockBackend';
import { useState } from 'react';

export function Contact() {
  const socialLinks = profile.socials;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Extract form data here if using controlled inputs or FormData
      // For now we just call the mock backend
      await mockBackend.sendMessage({
        name: 'Test',
        email: 'test@test.com',
        subject: 'Test',
        message: 'Test'
      });
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-32 px-6 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[180px] rounded-full"></div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl mb-6">Let's Connect</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-white to-white/20 mx-auto mb-8"
          ></motion.div>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 md:p-10"
            >
              <h3 className="text-2xl md:text-3xl mb-8">Send a Message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-3 text-white/80">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:bg-white/10 outline-none transition-all backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-3 text-white/80">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:bg-white/10 outline-none transition-all backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-3 text-white/80">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:bg-white/10 outline-none transition-all backdrop-blur-sm"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-3 text-white/80">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:bg-white/10 outline-none transition-all backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 0 40px rgba(255,255,255,0.3)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-black hover:bg-white/90 transition-all rounded-xl flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Sending...' : formStatus === 'success' ? 'Message Sent!' : 'Send Message'}</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send size={20} />
                  </motion.div>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Social links */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8"
            >
              <h3 className="text-xl md:text-2xl mb-6">Connect Online</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      x: 10,
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      boxShadow: '0 10px 30px rgba(255,255,255,0.1)'
                    }}
                    className="flex items-center gap-4 p-4 border border-white/10 bg-white/5 hover:border-white/20 transition-all rounded-xl group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 border border-white/20 bg-white/5 rounded-lg"
                    >
                      <link.icon size={22} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="text-white/90 group-hover:text-white transition-colors">
                        {link.label}
                      </div>
                      <div className="text-white/40 text-sm">
                        {link.username}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0 20px 50px rgba(255,255,255,0.1)' }}
              className="border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="p-4 border border-white/20 bg-white/5 rounded-xl"
                >
                  <MapPin size={28} />
                </motion.div>
                <div>
                  <h3 className="text-xl mb-2">Location</h3>
                  <p className="text-white/60">
                    Available for remote opportunities worldwide
                  </p>
                  <p className="text-white/40 mt-1">
                    {profile.location.label}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0 20px 50px rgba(255,255,255,0.1)' }}
              className="border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                ></motion.div>
                <span className="text-green-400">Available for Projects</span>
              </div>
              <p className="text-white/60">
                {profile.status.text}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-white/10 text-center"
        >
          <p className="text-white/40">
            &copy; {new Date().getFullYear()} {profile.name}. Designed & Built with passion.
          </p>
          <p className="text-white/30 mt-2">
            Crafted with React, TypeScript & Tailwind CSS
          </p>
        </motion.div>
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-20 left-20 w-32 h-32 border border-white/5"
        style={{ transform: 'rotateX(45deg) rotateY(45deg)' }}
      ></motion.div>

      <motion.div
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-20 right-20 w-40 h-40 border border-white/5 rounded-full"
      ></motion.div>
    </section>
  );
}
