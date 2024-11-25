import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ReferenceCardProps {
  title: string;
  subtitle: string;
  image: string;
  points: string[];
  delay: number;
}

const ReferenceCard: React.FC<ReferenceCardProps> = ({ 
  title, 
  subtitle, 
  image, 
  points,
  delay 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group relative overflow-hidden rounded-lg shadow-lg"
    >
      <div className="aspect-w-16 aspect-h-9">
        <motion.img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end text-white">
        <motion.h3 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2 }}
          className="text-2xl font-medium mb-1"
        >
          {title}
        </motion.h3>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3 }}
          className="text-amber-400 mb-4"
        >
          {subtitle}
        </motion.p>
        <motion.ul 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.4 }}
          className="space-y-2"
        >
          {points.map((point, index) => (
            <li key={index} className="flex items-center">
              <ArrowRight className="w-4 h-4 mr-2 text-amber-400" />
              <span className="text-sm">{point}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default ReferenceCard;