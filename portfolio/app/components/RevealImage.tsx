import React from 'react';

// We choose native CSS scroll-driven animations (animation-timeline: view()) 
// because it runs entirely on the browser's compositor thread, providing a 
// perfectly smooth "build" effect without any JavaScript overhead (no scroll 
// listeners, no requestAnimationFrame, no state updates). It gracefully falls 
// back to the existing IntersectionObserver `.fade-up` behavior via CSS @supports.

interface RevealImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

export default function RevealImage({ className = "", wrapperClassName = "", ...props }: RevealImageProps) {
  return (
    <div className={`reveal-image-wrapper fade-up ${wrapperClassName}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={`reveal-image ${className}`} {...props} />
    </div>
  );
}
