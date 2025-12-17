import { motion } from 'framer-motion';
import { optimizeCloudinaryUrl } from '@/lib/cloudinaryOptimize';
import principalSponsorsImage from '@assets/princi_1762584098544.png';
import flower9 from '@assets/flower9_1759741371017.png';
import flower3 from '@assets/flower3_1759741371015.png';
import guestsImage from '@assets/guests_1762584098544.png';

const DressCodeSection = () => {
  const dressCodeColors = [
    { name: 'Beige', color: '#EDD5C9', hex: '#EDD5C9' },
    { name: 'Taupe', color: '#A39C8E', hex: '#A39C8E' },
    { name: 'Cream', color: '#FEF9F3', hex: '#FEF9F3' }
  ];

  const principalSponsorsColors = [
    { name: 'Gray', color: '#808080', hex: '#808080' }
  ];

  const entourageColors = [
    { name: 'Gray', color: '#808080', hex: '#808080' },
    { name: 'Champagne', color: '#F8E8D0', hex: '#F8E8D0' }
  ];

  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue bg-white relative overflow-hidden mt-[10px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          <h2 className="font-display font-light italic mb-8 text-[48px] text-[#636569]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
        </motion.div>

        {/* Modern Dress Code Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Principal Sponsors */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white shadow-teal border border-primary/20 rounded-xl p-8 hover-elegant transition-all duration-500 h-full relative">
              {/* Flower Decoration */}
              <img src={flower9} alt="" className="absolute top-2 right-2 w-16 md:w-20 opacity-80" />
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.3 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      PRINCIPAL SPONSORS
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-left px-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">FORMAL ATTIRE:</p>
                        <p className="text-sm text-foreground">Gray Color</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2">ENTOURAGE:</p>
                        <p className="text-sm text-foreground">Gray & Champagne</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={principalSponsorsImage}
                  alt="Principal Sponsors attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.5 }}
                />
                
                {/* Color Palette for Principal Sponsors */}
                <motion.div
                  className="mt-6 pt-6 border-t border-primary/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 8.7 }}
                >
                  <p className="text-sm font-semibold text-foreground mb-3">Color Reference</p>
                  <div className="flex justify-center gap-4">
                    {principalSponsorsColors.map((colorItem, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 border-border shadow-soft hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: colorItem.color }}
                        ></div>
                        <p className="text-xs text-foreground mt-1">{colorItem.name}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Guests */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white shadow-teal border border-primary/20 rounded-xl p-8 hover-elegant transition-all duration-500 h-full relative">
              {/* Flower Decoration */}
              <img src={flower3} alt="" className="absolute top-2 left-2 w-20 md:w-24 opacity-80 transform -rotate-12" />
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.6 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      GUESTS
                    </h3>
                    <div className="text-center px-4 mb-3">
                      <p className="text-sm text-foreground leading-relaxed">
                        Please wear beige, taupe, or cream in semi-formal attire.
                      </p>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={guestsImage}
                  alt="Guests attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.8 }}
                />

                {/* Color Palette for Guests */}
                <motion.div
                  className="mt-6 pt-6 border-t border-primary/20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 9.0 }}
                >
                  <p className="text-sm font-semibold text-foreground mb-3">Guest Color Palette</p>
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
                    {dressCodeColors.map((colorItem, index) => (
                      <div key={index} className="text-center group">
                        <div 
                          className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-xl border-2 border-border shadow-soft group-hover:scale-105 transition-transform duration-300"
                          style={{ backgroundColor: colorItem.color }}
                        ></div>
                        <p className="text-xs text-foreground mt-1">{colorItem.name}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Important Reminders */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.7 }}
        >
          <div className="bg-white shadow-teal border border-primary/20 rounded-xl p-8">
            <h3 className="text-xl font-body font-medium text-foreground mb-4 text-center">
              Important Reminders
            </h3>
            <p className="text-sm text-foreground text-center leading-relaxed">
              In keeping with the formality of the event, we kindly ask that guests refrain from wearing jeans, denim, slippers or rubber shoes.
            </p>
          </div>
        </motion.div>

        
      </div>
    </motion.section>
  );
};

export default DressCodeSection;