import React, { useRef, useEffect, ReactNode } from 'react';

import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.css';

export default function Jarallax({
  className = '',
  children,
  ...props
}: {
  className?: string;
  children: ReactNode;
}) {
  const $el = useRef<HTMLDivElement>(null);

  // Init Jarallax.
  useEffect(() => {
    if ($el.current) {
      jarallax($el.current, props);
    }

    // Destroy Jarallax.
    return function destroy() {
      if ($el.current) {
        jarallax($el.current, 'destroy');
      }
    };
  }, []);

  // Update options.
  useEffect(() => {
    if ($el.current) {
      jarallax($el.current, 'destroy');
      jarallax($el.current, props);
    }
  }, [props]);

  return (
    <div ref={$el} className={`jarallax ${className}`}>
      {children}
    </div>
  );
}
