import React from 'react'
import imagenes from '../exportImagenes/imagenes'
import "../styles/slider.css"
import { motion } from 'framer-motion'


export const Slider = () => {
  return (
    <motion.div className='slider-container'>
      <motion.div className='slider' drag="x"
        dragConstraints={{ right: 0, left: 5 }}>
        <motion.div layout transition={{ duration: 0.1 }} />

        {imagenes.map(image => (
          <motion.div className='item'>
            <img src={image} className="img-responsive" alt="" />
          </motion.div>
        ))}
      </motion.div>

    </motion.div>
  )
}
