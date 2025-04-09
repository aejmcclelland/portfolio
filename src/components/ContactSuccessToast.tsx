'use client';
import { useEffect, useState } from 'react';

interface ContactSuccessToastProps {
  status: string;
}

export default function ContactSuccessToast({ status }: ContactSuccessToastProps) {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (status === 'success') {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
      {showToast && (
        <div
          className='bg-success text-success-content text-center p-6 rounded-lg shadow-md mb-6 transition-all duration-500 ease-in-out transform animate-slide-in'
          style={{ animation: 'slideOut 0.5s ease-in-out 2.5s forwards' }}>
          <h3 className='text-xl font-bold mb-2'>Thank you!</h3>
          <p>Your message has been sent. I&apos;ll be in touch soon.</p>
        </div>
      )}
    </>
  );
}
