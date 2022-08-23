import dynamic from 'next/dynamic';

export const Jarallax = dynamic(() => import('./Jarallax'), {
  ssr: false,
});

export { JarallaxImage } from './JarallaxImage';
