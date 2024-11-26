import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppWidget = () => {
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent('Hi, hötten eine Feier geplant von bis');
    window.open(`https://wa.me/436602360110?text=${text}`, '_blank');
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300"
      >
        <MessageCircle size={24} />
      </button>
    </motion.div>
  );
};

export default WhatsAppWidget; 