'use client';

import { useEffect, useRef, useCallback } from 'react';

export const useInfiniteGrid = ({
  loading,
  hasMore,
  loadMore,
  threshold = 200,
}: {
  loading: boolean;
  hasMore: boolean;
  loadMore: () => void;
  threshold?: number;
}) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !loading && hasMore) {
        loadMore();
      }
    },
    [loading, hasMore, loadMore]
  );

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: `${threshold}px`,
      threshold: 0.1,
    });

    if (lastItemRef.current) observer.current.observe(lastItemRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [handleObserver, threshold]);

  return { lastItemRef };
};