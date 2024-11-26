import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, ChefHat, Users, Calendar, Award } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import AnimatedSection from './components/AnimatedSection';
import ServiceCard from './components/ServiceCard';
import ReferenceCard from './components/ReferenceCard';
import PeterImage from './images/Peter.png';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <LoadingScreen />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="font-sans text-gray-900"
        >
          {/* Hero Section */}
          <div className="relative h-screen">
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80")',
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>
            <div className="relative h-full flex items-center justify-center text-white px-4">
              <div className="max-w-4xl mx-auto text-center">
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-5xl md:text-7xl font-light mb-6"
                >
                  Dein Premium Catering Partner in Tirol & Bayern
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-xl md:text-2xl mb-8 font-light"
                >
                  Große Events? Herausfordernde Locations? Lass uns gemeinsam etwas Besonderes schaffen.
                </motion.p>
                <motion.button
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium 
                    hover:bg-gray-100 transition-colors duration-300"
                >
                  Jetzt anfragen
                </motion.button>
              </div>
            </div>
          </div>

          {/* Introduction Section */}
          <AnimatedSection className="py-24 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl mb-8 font-light">Servus! Schön, dass du da bist.</h2>
              <p className="text-xl leading-relaxed text-gray-700">
                Seit 2020 sorge ich, Peter Mayer, mit meinem Team für unvergessliche Catering-Erlebnisse 
                bei deinen Events. Egal ob Firmenfeier, Messeauftritt oder Großveranstaltung – wir machen's möglich.
              </p>
            </div>
          </AnimatedSection>

          {/* What We Do Section */}
          <AnimatedSection className="py-24 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl mb-16 text-center font-light">
                Das kannst du von uns erwarten:
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { 
                    icon: Users, 
                    title: 'Flexible Teamgröße', 
                    desc: 'Von 7 bis 50 Profis – immer passend für dein Event' 
                  },
                  { 
                    icon: ChefHat, 
                    title: 'Kreative Küche', 
                    desc: 'Von Tiroler Klassikern bis internationale Highlights' 
                  },
                  { 
                    icon: Calendar, 
                    title: 'Perfekte Organisation', 
                    desc: 'Auch bei 5.000 Gästen behalten wir den Überblick' 
                  },
                  { 
                    icon: Award, 
                    title: 'Persönliche Betreuung', 
                    desc: 'Du hast direkten Draht zu mir als Chef' 
                  }
                ].map((item, i) => (
                  <ServiceCard
                    key={i}
                    icon={item.icon}
                    title={item.title}
                    description={item.desc}
                    delay={i * 0.1}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Reference Section */}
          <AnimatedSection className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl mb-16 text-center font-light">Das haben wir schon bewegt:</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'IAA FRANKFURT',
                    subtitle: 'AUTOMOTIVE PREMIUM',
                    image: 'https://images.unsplash.com/photo-1621111848501-8d3634f82336?auto=format&fit=crop&q=80',
                    points: [
                      'Exklusiv-Catering für Audi & Lamborghini',
                      'VIP-Bereiche & Live-Cooking Stationen',
                      '24 Profis für deine Gäste im Einsatz'
                    ]
                  },
                  {
                    title: 'ZILLERTALER EVENTS',
                    subtitle: 'REGIONALE EXZELLENZ',
                    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80',
                    points: [
                      'Events bis 800 Personen',
                      'Tiroler Gastlichkeit meets internationale Küche',
                      'Indoor & Outdoor Konzepte'
                    ]
                  },
                  {
                    title: 'MEYER WERFT',
                    subtitle: 'UNSER GRÖSSTES PROJEKT',
                    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80',
                    points: [
                      '5.000 Gäste täglich',
                      '50 Mitarbeiter im Einsatz',
                      'Präzise Logistik unter besonderen Bedingungen'
                    ]
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <div className="text-amber-600 text-sm mb-4">{item.subtitle}</div>
                      <ul className="space-y-2">
                        {item.points.map((point, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-amber-600 mr-2">•</span>
                            <span className="text-gray-600">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Blog Section */}
          <AnimatedSection className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl mb-16 text-center font-light">Aktuelles aus unserer Küche</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Nachhaltiges Catering',
                    date: '15. März 2024',
                    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                    excerpt: 'Wie wir Nachhaltigkeit in unsere Catering-Services integrieren und dabei Qualität gewährleisten.'
                  },
                  {
                    title: 'Trends im Event Catering',
                    date: '1. März 2024',
                    image: 'https://images.unsplash.com/photo-1587899897387-091ebd01a6b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                    excerpt: 'Die neuesten Catering-Trends für Ihre Veranstaltung - von Food Stations bis hin zu interaktiven Kocherlebnissen.'
                  },
                  {
                    title: 'Regionale Zutaten',
                    date: '20. Februar 2024',
                    image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
                    excerpt: 'Warum wir auf lokale Produzenten setzen und wie das den Geschmack unserer Gerichte verbessert.'
                  }
                ].map((post, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-amber-600 mb-2">{post.date}</div>
                      <h3 className="text-xl font-medium mb-2">{post.title}</h3>
                      <p className="text-gray-600">{post.excerpt}</p>
                      <button className="mt-4 text-amber-600 font-medium hover:text-amber-700 transition-colors duration-300">
                        Weiterlesen →
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Section */}
          <AnimatedSection className="py-24 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl mb-16 text-center font-light">
                Lass uns über dein Event sprechen!
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <div className="mb-8">
                    <img 
                      src={PeterImage} 
                      alt="Peter Mayer" 
                      className="w-48 h-48 rounded-full object-cover mx-auto mb-6 shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl mb-6 font-medium">Kontaktinformationen</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-amber-600 mr-4" />
                      <span>+43 676 5191901</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 text-amber-600 mr-4" />
                      <span>info@vermittlung-pm.at</span>
                    </div>
                  </div>
                </div>
                <motion.form 
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Dein Name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Deine E-Mail"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Deine Nachricht"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                    ></textarea>
                  </div>
                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-300"
                  >
                    Nachricht senden
                  </motion.button>
                </motion.form>
              </div>
            </div>
          </AnimatedSection>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-lg font-medium mb-4">Leistungen</h4>
                <ul className="space-y-2">
                  <li>Premium Catering</li>
                  <li>Messecatering</li>
                  <li>Firmencatering</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Unternehmen</h4>
                <ul className="space-y-2">
                  <li>Referenzen</li>
                  <li>Über uns</li>
                  <li>Kontakt</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Rechtliches</h4>
                <ul className="space-y-2">
                  <li>Impressum</li>
                  <li>Datenschutz</li>
                  <li>AGB</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Kontakt</h4>
                <p className="text-gray-400">
                  Peter Mayer<br />
                  Premium Catering Services<br />
                  Tirol & Bayern
                </p>
              </div>
            </div>
          </footer>
          <WhatsAppWidget />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;