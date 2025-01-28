"use client"
import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
 
export function RotateWords({
  text = "I",
  words = ["Code", "Design"],
  endtext = "for Web",
}) {
  const [index, setIndex] = React.useState(0)
 
React.useEffect(() => {
const interval = setInterval(() => {
setIndex((prevIndex) => (prevIndex + 1) % words.length)
}, 3000)
// Clean up interval on unmount
return () => clearInterval(interval)
}, [])
return (
 
<div className="text-4xl text-center text-slate-50 font-custom sm:text-4xl font-normal tracking-tighter md:text-6xl md:leading-[4rem] w-fit flex items-center jusitfy-center gap-2">
  {text}{' '}
  <AnimatePresence mode="wait">
    <motion.p
      key={words[index]}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.3 }}
      className=""
    >
      {words[index]}
    </motion.p>
  </AnimatePresence>
  {' '}{endtext}
</div>
) }