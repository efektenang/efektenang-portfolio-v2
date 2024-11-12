"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to the homepage...</p>
    </div>
  );
};

export default NotFound;
