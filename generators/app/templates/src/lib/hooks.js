// Patched useMediaQuery for SSR
// Until https://github.com/contra/react-responsive/issues/162 resolved
import { useLayoutEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function useBreakpoint(query, fallback = true, callback) {
  const [browserFlushed, setBrowserFlushed] = useState(false);
  const matched = useMediaQuery({ query }, undefined, callback);
  useLayoutEffect(() => setBrowserFlushed(true), []);

  if (typeof window !== 'undefined' && browserFlushed) {
    return matched;
  }
  return fallback;
}
