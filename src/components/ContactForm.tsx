'use client';
import { useState } from 'react';
import ContactSuccessToast from './ContactSuccessToast';
import { sendContactEmail } from '@/actions/sendContactEmail';
import { useRouter } from 'next/navigation';

declare global {
  interface Window {
    grecaptcha?: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<'success' | 'error' | ''>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!window.grecaptcha) {
      setStatus('error');
      return;
    }

    try {
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: 'submit' }
      );

      const formData = new FormData(event.currentTarget);
      formData.append('recaptcha', token);

      const result = await sendContactEmail({ message: '' }, formData);

      setStatus(result.message.toLowerCase().includes('success') ? 'success' : 'error');

      if (result.message.toLowerCase().includes('success')) {
        setTimeout(() => router.push('/thank-you'), 2000);
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 md:px-8 lg:px-10 bg-base-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <ContactSuccessToast status={status} />
        <form onSubmit={handleSubmit} className="bg-base-200 shadow-md p-6 rounded-xl space-y-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="form-control w-full">
              <label className="label justify-start">
                <span className="label-text font-semibold">Preferred Name</span>
              </label>
              <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
            </div>

            <div className="form-control w-full">
              <label className="label justify-start">
                <span className="label-text font-semibold">Your Email</span>
              </label>
              <input type="email" name="email" placeholder="you@example.com" className="input input-bordered w-full" required />
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label justify-start">
              <span className="label-text font-semibold">Your Phone (optional)</span>
            </label>
            <input type="tel" name="phone" placeholder="+44 1234 00123" className="input input-bordered w-full" />
          </div>

          <div className="form-control w-full">
            <label className="label justify-start">
              <span className="label-text font-semibold">LinkedIn Profile (optional)</span>
            </label>
            <input type="url" name="linkedin" placeholder="https://linkedin.com/in/yourname" className="input input-bordered w-full" />
          </div>

          <div className="form-control w-full">
            <label className="label justify-start">
              <span className="label-text font-semibold">Your Message</span>
            </label>
            <textarea name="message" className="textarea textarea-bordered w-full h-32" placeholder="What would you like to say?"></textarea>
          </div>

          <div className="form-control w-full">
            <button type="submit" className="btn btn-primary w-full sm:w-fit">
              Send Message
            </button>
          </div>
        </form>

        <p className="text-xs text-center text-base-content/70 mt-4">
          This site is protected by reCAPTCHA and the Google{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Privacy Policy</a>{' '}
          and{' '}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Terms of Service</a>{' '}
          apply.
        </p>
      </div>
    </section>
  );
}
