// app/loading.tsx
"use client";

import * as Progress from '@radix-ui/react-progress';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      <div className="lg:w-1/3 w-1/2">
        <Progress.Root className="relative overflow-hidden bg-neutral-800 rounded-full w-full h-4">
          <Progress.Indicator
            className="bg-dark-dark-violet h-full transition-transform ease-in-out"
            style={{ transform: `translateX(${progress - 100}%)` }}
          />
        </Progress.Root>
      </div>
    </div>
  );
}
