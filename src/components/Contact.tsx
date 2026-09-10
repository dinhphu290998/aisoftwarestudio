"use client";

import { Mail, MapPin, Phone, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/aisoftwaresupport@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        e.currentTarget.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full max-w-7xl px-6 py-32 z-10 relative border-t border-white/5">
      <div className="flex flex-col md:flex-row gap-16 justify-between">
        {/* Left Side: Info */}
        <div className="flex-1">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Let's Talk
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-lg text-lg mb-12"
          >
            Whether you have a question, a project in mind, or just want to say hi, our inbox is always open. We'll try our best to get back to you!
          </motion.p>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium mb-1">Email Us</p>
                <a href="mailto:aisoftwaresupport@gmail.com" className="text-lg font-semibold text-white hover:text-blue-400 transition-colors">
                  aisoftwaresupport@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium mb-1">Call Us</p>
                <a href="tel:0397460055" className="text-lg font-semibold text-white hover:text-emerald-400 transition-colors">
                  039 746 0055
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium mb-1">Location</p>
                <p className="text-lg font-semibold text-white">
                  Vietnam
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex-1"
        >
          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl flex flex-col gap-6 relative overflow-hidden">
            
            {status === "success" && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">Thanks for reaching out. We'll get back to you shortly.</p>
              </motion.div>
            )}

            <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
            
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Contact Message from AI Software Studio" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-400 font-medium px-1">Your Name</label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="John Doe" 
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-400 font-medium px-1">Your Email</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="john@example.com" 
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm text-slate-400 font-medium px-1">Message</label>
              <textarea 
                name="message"
                required
                placeholder="How can we help you?" 
                rows={4}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
              />
            </div>
            
            {status === "error" && (
              <p className="text-red-400 text-sm px-1">Oops! Something went wrong. Please try again or email us directly.</p>
            )}

            <button 
              type="submit" 
              disabled={status === "loading"}
              className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 group transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

