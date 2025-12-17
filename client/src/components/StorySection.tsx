import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

// Story image from Cloudinary
const storyCoupleImage = 'https://res.cloudinary.com/dhmpt6d6k/image/upload/v1765958423/our_story_jqgsab.jpg';

const StorySection = () => {
  return (
    <motion.section 
      id="story" 
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.5 }}
      data-testid="section-story"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 3.8 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-center text-foreground mb-3" data-testid="text-story-title">
          OUR STORY
        </h2>
        <p className="text-center text-sm sm:text-base text-foreground/60 italic">God allowed our paths to cross in 2016, and today we walk together in faith</p>
      </motion.div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 4 }}
        >
          {/* Left Side - Text Content */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 relative">
            {/* Decorative Icon */}
            <div className="mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>

            {/* Complete Story */}
            <div className="space-y-4 text-base text-foreground/90 leading-relaxed" data-testid="text-story-content">
              <p>
                God allowed our paths to cross at a Global Pastor's & Worker's Conference in 2016. Who would have thought that meeting would lead to a wedding?
              </p>
              
              <p>
                Our Commitment: We promise to walk in the calling God has given us, trusting that together we can do greater things, empowered by the love and support we share.
              </p>
              
              <p>
                <span className="font-semibold">Colossians 3:14 (KJV)</span>
                <br/>
                "And above all these things put on charity, which is the bond of perfectness"
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-first lg:order-last">
            <img
              src={storyCoupleImage}
              alt="Our Love Story"
              className="w-full h-auto rounded-2xl shadow-lg"
              data-testid="img-story-background"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StorySection;
