'use client';
import '@/styles/loading.scss';
import { HashLoader } from 'react-spinners';

export default function Loading() {
  return (
    <div className="loading">
      <HashLoader color="#bc947c" />
    </div>
  );
}
