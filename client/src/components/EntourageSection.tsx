import { motion } from 'framer-motion';

const EntourageSection = () => {
  const entourageData = {
    parents: [
      { label: "Parents of the Groom", names: ["Roble Dilag Andales SR.", "Elisam Dela Torre Andales"] },
      { label: "Parent of the Bride", names: ["Myrna D. Mangibin"] }
    ],
    principalSponsors: {
      title: "Principal Sponsors",
      couples: [
        { man: "Noel Tarucan", woman: "Hilda Tarucan" },
        { man: "Joseph Canillo", woman: "Girlie Canillo" },
        { man: "Haigie Harder", woman: "Rowena Harder" },
        { man: "Angelo Ragudo", woman: "Juvelyn Ragudo" },
        { man: "Jeffrey Chua", woman: "Jean Chua" },
        { man: "Joseph Doble", woman: "Kathryn Doble" },
        { man: "Donilo Salado", woman: "Gerlyn Salado" },
        { man: "Randy Caagbay", woman: "Maureen Caagbay" },
        { man: "Pastor Richard Gargoles", woman: "Ma'am Liafe Gargoles" },
        { man: "Pastor Allen Alimpuangon", woman: "Ma'am Jeancy Alimpuangon" },
        { man: "Daryl Pastor", woman: "Sheila Pastor" },
        { man: "Pastor John Michael Villegas", woman: "Ma'am Mary Joy Villegas" },
        { man: "Vic Amable", woman: "Chelsa Amable" },
        { man: "Stephen Chavez", woman: "Bernice Chavez" },
        { man: "Pastor Ronan Melendres", woman: "Ma'am May Melendres" },
        { man: "Joel Salibagat", woman: "Diosdada Salimbagat" },
        { man: "Pastor Sandy Villasis", woman: "Ma'am Teresa Villasis" },
        { man: "Freddie Mojana", woman: "Fililyn Mojana" },
        { man: "DJ Surdo Salanap", woman: "Doc Vergie Salanap" },
        { man: "Pastor Aben Reyes", woman: "Ma'am Heide Reyes" },
        { man: "Pastor John Deocampo", woman: "Ma'am Jerlyn Deocampo" },
        { man: "Mrs. Che Austral", woman: "" },
        { man: "Kgwd. Tessie Porceso", woman: "" },
        { man: "Mr. Duphin Pescadilla", woman: "" },
        { man: "Miss Shalyn Galanza", woman: "" }
      ]
    },
    secondarySponsors: {
      title: "Candle, Veil & Cord Sponsors",
      roles: [
        { role: "Candle", names: ["Mr. Darwin Belonio", "Mrs. Reggie Belonio"] },
        { role: "Veil", names: ["Mr. Jomarie Verwin", "Mrs. Jolina Verwin"] },
        { role: "Cord", names: ["Mr. Robert Balbon", "Mrs. Thelma Balbon"] }
      ]
    },
    bestMan: { name: "Pastor Mark Anthony Mahinay", role: "Best Man" },
    maidsOfHonor: [
      { name: "Vanissa Mae Mangibin", role: "Maid of Honor" },
      { name: "Vianca Mangibin", role: "Maid of Honor" }
    ],
    groomsmen: [
      "Andrei Jareno",
      "Ronel Dimatulac",
      "Joshua Soliva",
      "Daniel Mahinay",
      "James Luberas",
      "Arnel Veliganilao",
      "Reymart Rico",
      "Randy Mariano",
      "Noven Ayuban",
      "Mark Belleza",
      "Emil John Martir"
    ],
    bridesmaids: [
      "Robylyn Andales",
      "Ruby Sayson",
      "Joela Salimbagat",
      "Jeralyn Descartin",
      "Jela Salimbagat",
      "Bobelyn Elmido",
      "Queenie Donesa",
      "Luccelle Aligarbes",
      "Aljean Alimpuangon",
      "April Grace Alimpuangon",
      "Kris ann Matonding",
      "Vivian Girl Dolerio",
      "April Mae B"
    ],
    bearers: [
      { role: "Bible Bearer", names: ["Charles David Peñaflorida"] },
      { role: "Coin Bearer", names: ["Shekinah Joy Peñaflorida"] },
      { role: "Ring Bearer", names: ["Zyra Hope Peñaflorida"] }
    ],
    flowerMaidens: [
      "Esther Faith B. Canillo",
      "Hannah Beatrice B. Tarucan",
      "Joyce Carmela Gabrielle C. Labid",
      "Joanna Marie Posoc"
    ],
    littleBride: "Alwina D. Milleza",
    weddingOfficiants: [
      "Pastor Felixberto A. Peñaflorida",
      "Pastor Sandy Villasis"
    ]
  };

  return (
    <motion.section 
      id="entourage" 
      className="entourage-section section-hard-blue bg-white relative overflow-hidden py-8 md:py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-gold-bright mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
        >
          Entourage
        </motion.h2>

        {/* Parents */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {entourageData.parents.map((parent, index) => (
              <div key={index} className="text-center" data-testid={`parents-section-${index}`}>
                <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                  {parent.label}
                </h3>
                {parent.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`parent-name-${index}-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Principal Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="principal-sponsors-title">
            {entourageData.principalSponsors.title}
          </h3>
          <div className="max-w-4xl mx-auto space-y-1">
            {entourageData.principalSponsors.couples.map((couple, index) => (
              <div key={index} className={couple.woman ? "grid grid-cols-2 gap-4 md:gap-8" : "flex justify-center"}>
                {couple.woman ? (
                  <>
                    <p className="text-xs md:text-base lg:text-lg font-telma text-foreground text-right" data-testid={`principal-sponsor-man-${index}`}>
                      {couple.man}
                    </p>
                    <p className="text-xs md:text-base lg:text-lg font-telma text-foreground text-left" data-testid={`principal-sponsor-woman-${index}`}>
                      {couple.woman}
                    </p>
                  </>
                ) : (
                  <p className="text-xs md:text-base lg:text-lg font-telma text-foreground text-center" data-testid={`principal-sponsor-single-${index}`}>
                    {couple.man}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Secondary Sponsors */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.2 }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-4 md:mb-6 text-primary" data-testid="secondary-sponsors-title">
            {entourageData.secondarySponsors.title}
          </h3>
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {entourageData.secondarySponsors.roles.map((item, index) => (
              <div key={index} className="text-center" data-testid={`secondary-sponsor-${item.role.toLowerCase()}`}>
                <h4 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-1 md:mb-2 text-primary">
                  {item.role}
                </h4>
                {item.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid={`${item.role.toLowerCase()}-name-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Best Man and Maids of Honor */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.4 }}
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="best-man-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                {entourageData.bestMan.role}
              </h3>
              <p className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid="best-man-name">
                {entourageData.bestMan.name}
              </p>
            </div>
            <div className="text-center" data-testid="maid-of-honor-section">
              <h3 className="text-sm md:text-lg lg:text-xl font-display font-semibold mb-2 md:mb-3 text-primary">
                Maid of Honor
              </h3>
              {entourageData.maidsOfHonor.map((maid, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid={`maid-of-honor-${index}`}>
                  {maid.name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Groomsmen & Bridesmaids */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.6 }}
        >
          <div className="max-w-4xl mx-auto">
            {entourageData.groomsmen.length === entourageData.bridesmaids.length ? (
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="text-center" data-testid="groomsmen-section">
                  <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                    Groomsmen
                  </h3>
                  {entourageData.groomsmen.map((name, index) => (
                    <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1 text-right" data-testid={`groomsman-${index}`}>
                      {name}
                    </p>
                  ))}
                </div>
                <div className="text-center" data-testid="bridesmaids-section">
                  <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                    Bridesmaids
                  </h3>
                  {entourageData.bridesmaids.map((name, index) => (
                    <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1 text-left" data-testid={`bridesmaid-${index}`}>
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="text-center" data-testid="groomsmen-section">
                  <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                    Groomsmen
                  </h3>
                  {entourageData.groomsmen.map((name, index) => (
                    <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`groomsman-${index}`}>
                      {name}
                    </p>
                  ))}
                </div>
                <div className="text-center" data-testid="bridesmaids-section">
                  <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
                    Bridesmaids
                  </h3>
                  {entourageData.bridesmaids.map((name, index) => (
                    <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`bridesmaid-${index}`}>
                      {name}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Bearers */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.8 }}
        >
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {entourageData.bearers.map((item, index) => (
              <div key={index} className="text-center" data-testid={`bearer-${item.role.toLowerCase().replace(/\s+/g, '-')}`}>
                <h4 className="text-sm md:text-lg font-display font-semibold mb-2 text-primary">
                  {item.role}
                </h4>
                {item.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-xs md:text-base font-telma text-foreground" data-testid={`${item.role.toLowerCase().replace(/\s+/g, '-')}-name-${nameIndex}`}>
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Flower Maidens */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.0 }}
        >
          <div className="text-center" data-testid="flower-maidens-section">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
              Flower Maidens
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-3xl mx-auto">
              {entourageData.flowerMaidens.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground mb-1" data-testid={`flower-maiden-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Little Bride */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.2 }}
        >
          <div className="text-center" data-testid="little-bride-section">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
              Little Bride
            </h3>
            <p className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid="little-bride-name">
              {entourageData.littleBride}
            </p>
          </div>
        </motion.div>

        {/* Wedding Officiants */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.4 }}
        >
          <div className="text-center" data-testid="wedding-officiants-section">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-6 text-primary">
              Wedding Officiants
            </h3>
            <div className="space-y-1">
              {entourageData.weddingOfficiants.map((name, index) => (
                <p key={index} className="text-xs md:text-base lg:text-lg font-telma text-foreground" data-testid={`wedding-officiant-${index}`}>
                  {name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
