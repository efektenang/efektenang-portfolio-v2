"use client"

import { ArrowUpOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

export function GoToTopButton(): React.JSX.Element {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 1 * window.innerHeight;

      setShowButton(scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <div
          onClick={scrollToTop}
          className="h-11 w-11 flex items-center justify-center rounded-full bg-primary-color cursor-pointer transition-opacity duration-300"
          style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 99,
          }}>
          <ArrowUpOutlined className="text-white text-[25px]" />
        </div>
      )}
    </>
  );
}