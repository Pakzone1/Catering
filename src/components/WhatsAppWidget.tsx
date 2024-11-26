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
        className="bg-[#25D366] hover:bg-[#20BA56] text-white p-4 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.463 3.488C18.217 1.24 15.231 0 12.05 0 5.495 0 .16 5.334.157 11.892c0 2.096.548 4.142 1.588 5.945L.138 24l6.272-1.646c1.73.943 3.68 1.44 5.64 1.442h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.181-1.237-6.167-3.485-8.415zM12.05 21.785h-.004c-1.774 0-3.513-.478-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374c-.99-1.574-1.512-3.393-1.511-5.26.002-5.45 4.437-9.884 9.89-9.884 2.64 0 5.122 1.03 6.988 2.898 1.866 1.869 2.893 4.352 2.892 6.993-.003 5.45-4.437 9.886-9.885 9.886zm5.42-7.417c-.298-.149-1.765-.87-2.039-.969-.274-.099-.474-.149-.673.15-.2.298-.771.969-.945 1.168-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.298-.018-.458.13-.607.134-.133.298-.347.446-.521.149-.174.198-.298.297-.497.099-.198.05-.372-.025-.521-.074-.149-.672-1.62-.921-2.218-.242-.582-.488-.503-.672-.513-.173-.009-.372-.011-.571-.011-.198 0-.522.074-.795.372-.274.298-1.044.97-1.044 2.366 0 1.397 1.019 2.745 1.167 2.944.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.273-.198-.571-.347z"
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default WhatsAppWidget; 