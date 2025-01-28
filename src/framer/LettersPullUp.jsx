'use client';

import { motion, useInView } from 'framer-motion';
import * as React from 'react';
 
export function LettersPullUp({
  text,

}) {
  const splittedText = text.split('');
 
  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex ">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className={
            'text-2xl text-justify text-slate-50 font-custom sm:text-4xl font-medium  md:text-5xl md:leading-[4rem]'
            }
        >
          {current == ' ' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}