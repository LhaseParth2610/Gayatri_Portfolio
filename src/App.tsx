import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import DomeGallery from './components/DomeGallery';
import Masonry from './components/Masonry';
import TiltedCard from './components/TiltedCard';
import FocusCarousel from './components/FocusCarousel';

type ProjectType = {
  id: string;
  title: string;
  subtitle: string;
  concept: string;
  details: string;
  mainImage: string;
  folderImages: { src: string; label: string }[];
};

const projects: ProjectType[] = [
  {
    id: '01',
    title: "Metropolitan Muses",
    subtitle: 'Luxury with depth.',
    concept: 'In a world that never stops performing. Inspired by how luxury seduces it Explores the balance between structure and emotion within metropolitan life.',
    details: 'The garments reinterpret urban aesthetic with controlled silhouettes softened by drapes, textures. This theme bridges metropolitan minimalism with human tactility. Each garment carries a sense of precision with clean tailoring, sculpted cuts, structured yet soft textures.',
    mainImage: '/3.png',
    folderImages: [
      { src: '/m1.jpeg', label: 'Metropolitan Muse 1' },
      { src: '/m2.jpeg', label: 'Metropolitan Muse 2' },
      { src: '/m3.jpeg', label: 'Metropolitan Muse 3' },
      { src: '/m4.jpeg', label: 'Metropolitan Muse 4' },
      { src: '/10.png', label: 'Metropolitan Muse 5' }
    ]
  },
  {
    id: '02',
    title: 'Celestials Unbound',
    subtitle: 'Architects of the Universe',
    concept: 'Within the realm of the Architects of the Universe, a mystifying aura permeates the cosmos, where their divine touch shapes the universe just beyond the reach. Depicted through otherworldly structured silhouettes that depict power and control.',
    details: 'The use of lamé fabrics in a variety of metallic colours, the ruching, innovative pleating and quilting techniques help bring out the mysterious aura. Instilling a sense of unease, evoking a blend of curiosity and fear.',
    mainImage: '/image.png',
    folderImages: [
      { src: '/15 copy 2.png', label: 'Celestial Form 1' },
      { src: '/15.png', label: 'Celestial Form 2' },
      { src: '/16.png', label: 'Celestial Form 3' },
      { src: '/22.png', label: 'Celestial Form 4' },
      { src: '/23.png', label: 'Celestial Form 5' }
    ]
  },
  {
    id: '03',
    title: 'Project Menswear',
    subtitle: 'The Corporate Mutant',
    concept: 'The collection imagines a corporate individual navigating economic instability, changing work cultures, and personal expression.',
    details: 'Traditional office uniforms are reinterpreted into garments that appear with Adaptive functionality, casual and formal fusion, deconstructed corporate dressing, imperfect tailoring - timeless clothing during recession-driven consumption',
    mainImage: '/18.png',
    folderImages: [
      { src: '/8.jpg', label: 'Menswear Look 1' },
      { src: '/8 copy.png', label: 'Menswear Look 2' },
      { src: '/9.png', label: 'Menswear Look 3' },
      { src: '/000000.jpg', label: 'Menswear Look 4' },
      { src: '/1.jpg', label: 'Menswear Look 5' },
      { src: '/2.jpg', label: 'Menswear Look 6' },
      { src: '/3.jpg', label: 'Menswear Look 7' },
      { src: '/6.jpg', label: 'Menswear Look 8' },
      { src: '/13.png', label: 'Menswear Look 9' },
      { src: '/14 copy.png', label: 'Menswear Look 10' }
    ]
  },
  {
    id: '04',
    title: 'Womenswear',
    subtitle: 'Oriental Decadence & Mob Wife Core',
    concept: 'Imperial Noir explores the darker side of luxury through a palette of oxblood red, black lacquer, aged gold, and warm neutrals.',
    details: 'Inspired by Chinese artistic mystique, antique treasures, and cinematic glamour, the collection combines sensual silhouettes with dramatic surface textures. Lace, fur, and painterly motifs create depth and movement, while opulent accessories reinforce a mood of unapologetic sophistication and power.',
    mainImage: '/26.png',
    folderImages: [
      { src: '/27.png', label: 'Womenswear Look 1' },
      { src: '/28.png', label: 'Womenswear Look 2' },
      { src: '/29.png', label: 'Womenswear Look 3' },
      { src: '/31.png', label: 'Womenswear Look 4' },
      { src: '/32.png', label: 'Womenswear Look 5' }
    ]
  },
  {
    id: '05',
    title: 'Phool Patti',
    subtitle: 'Aligarh’s Delicate Craft',
    concept: 'This collection shares the story of creating a clothing collection that brings back Aligarh’s phool patti embroidery - a delicate craft of embroidery kept alive by local artisans for generations.',
    details: 'The collection celebrates summer with lightweight cotton and kota doria fabric, paired with the delicate beauty of phool patti embroidery. Soft, natural colors and subtle designs reflect the easygoing vibe of the season, creating clothes that are comfortable and inviting. The collection honors the skilled hands that keep traditional crafts alive today.',
    mainImage: '/33.png',
    folderImages: [
      { src: '/54.png', label: 'Phool Patti Look 1' },
      { src: '/55.png', label: 'Phool Patti Look 2' },
      { src: '/56.png', label: 'Phool Patti Look 3' },
      { src: '/57.png', label: 'Phool Patti Look 4' },
      { src: '/58.png', label: 'Phool Patti Look 5' },
      { src: '/59.png', label: 'Phool Patti Look 6' },
      { src: '/60.png', label: 'Phool Patti Look 7' },
      { src: '/61.png', label: 'Phool Patti Look 8' },
      { src: '/62.png', label: 'Phool Patti Look 9' }
    ]
  }
];

const trendGalleryData: Record<string, { src: string; label: string }[]> = {
  'Elevating Discards': [
    { src: '/ed (2).png', label: 'Elevating Discards 2' },
    { src: '/ed (3).png', label: 'Elevating Discards 3' },
    { src: '/ed (4).png', label: 'Elevating Discards 4' },
    { src: '/ed (5).png', label: 'Elevating Discards 5' },
    { src: '/ed (6).png', label: 'Elevating Discards 6' },
    { src: '/ed (7).png', label: 'Elevating Discards 7' }
  ],
  'Heritage Revival': [
    { src: '/hr (1).png', label: 'Heritage Revival 1' },
    { src: '/hr (2).png', label: 'Heritage Revival 2' },
    { src: '/hr (3).png', label: 'Heritage Revival 3' },
    { src: '/hr (4).png', label: 'Heritage Revival 4' },
    { src: '/hr (5).png', label: 'Heritage Revival 5' },
    { src: '/hr (6).png', label: 'Heritage Revival 6' }
  ],
  'Bio-Life': [
    { src: '/bl (1).png', label: 'Bio-Life 1' },
    { src: '/bl (2).png', label: 'Bio-Life 2' },
    { src: '/bl (3).png', label: 'Bio-Life 3' },
    { src: '/bl (4).png', label: 'Bio-Life 4' },
    { src: '/bl (5).png', label: 'Bio-Life 5' },
    { src: '/bl (6).png', label: 'Bio-Life 6' }
  ]
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [selectedTrend, setSelectedTrend] = useState<{ title: string; images: { src: string; label: string }[] } | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSendInquiry = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const nameEl = document.getElementById('name') as HTMLInputElement;
    const emailEl = document.getElementById('email') as HTMLInputElement;
    const messageEl = document.getElementById('message') as HTMLTextAreaElement;

    if (!nameEl || !emailEl || !messageEl) return;

    try {
      const response = await fetch("https://formsubmit.co/ajax/pisegayatri111@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: nameEl.value,
          email: emailEl.value,
          message: messageEl.value,
          _subject: `New Portfolio Inquiry from ${nameEl.value}`
        })
      });

      if (response.ok) {
        setFormStatus('success');
        nameEl.value = '';
        emailEl.value = '';
        messageEl.value = '';
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (err) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen selection:bg-white selection:text-black font-sans bg-[#0f0e0e] text-[#e5e5e5]">
      {/* Expanded Project View via DomeGallery */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a] text-[#e5e5e5] overflow-y-auto"
          >
            <div className="fixed top-0 w-full p-6 md:px-12 flex justify-between items-center z-[110] mix-blend-difference pointer-events-none">
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#b09e8d] hover:text-white transition-colors pointer-events-auto bg-black/20 p-2 rounded-full backdrop-blur-sm"
              >
                <ArrowLeft size={16} />
                <span>Back to Collections</span>
              </button>
              <div className="pointer-events-auto text-xs uppercase tracking-[0.2em] opacity-50 hidden md:block">
                {selectedProject.title}
              </div>
            </div>

            <div className="w-full h-[82vh] relative cursor-grab active:cursor-grabbing border-b border-[#222]">
              {selectedProject.id === '03' || selectedProject.id === '04' || selectedProject.id === '05' ? (
                <>
                  <FocusCarousel
                    images={selectedProject.folderImages || []}
                  />
                  <div className="absolute bottom-6 inset-x-0 w-full text-center pointer-events-none z-40">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#b09e8d]/70">
                      Tap right image to navigate in order
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <DomeGallery
                    images={
                      selectedProject.folderImages && selectedProject.folderImages.length > 0
                        ? [
                            ...selectedProject.folderImages,
                            ...selectedProject.folderImages,
                            ...selectedProject.folderImages,
                            ...selectedProject.folderImages
                          ].slice(0, 20)
                        : Array(20).fill({ src: selectedProject.mainImage, label: selectedProject.title })
                    }
                    fit={0.65}
                    openedImageWidth="350px"
                    openedImageHeight="470px"
                  />
                  <div className="absolute bottom-6 inset-x-0 w-full text-center pointer-events-none z-40">
                    <p className="text-xs font-mono uppercase tracking-widest text-[#b09e8d]/70">
                      Drag to explore • Tap to enlarge
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="w-full px-6 md:px-12 lg:px-24 py-16 pb-32 text-left">
              {selectedProject.id === '03' ? (
                <>
                  <h2 className="font-editorial text-4xl md:text-6xl tracking-[0.15em] mb-6 text-white uppercase font-light">
                    {selectedProject.subtitle}
                  </h2>
                  <p className="font-editorial text-gray-200 leading-relaxed text-lg md:text-xl mb-6">
                    {selectedProject.concept}
                  </p>
                  <p className="font-editorial text-gray-400 leading-relaxed text-lg md:text-xl">
                    {selectedProject.details}
                  </p>
                </>
              ) : (
                <>
                  <h2 className="font-condensed text-5xl md:text-7xl tracking-[0.15em] mb-6 text-white uppercase">
                    {selectedProject.title}
                  </h2>
                  
                  {selectedProject.id === '01' && (
                    <div className="w-full h-[60vh] my-8 relative border border-[#222] bg-[#0a0a0a]">
                      <FocusCarousel
                        images={[
                          { src: '/4.png', label: 'Moodboard 1' },
                          { src: '/5.png', label: 'Moodboard 2' },
                          { src: '/6.png', label: 'Moodboard 3' },
                          { src: '/7.png', label: 'Moodboard 4' },
                          { src: '/8.png', label: 'Moodboard 5' }
                        ]}
                      />
                      <div className="absolute bottom-6 inset-x-0 w-full text-center pointer-events-none z-40">
                        <p className="text-xs font-mono uppercase tracking-widest text-[#b09e8d]/70">
                          Tap right image to navigate in order
                        </p>
                      </div>
                    </div>
                  )}

                  {selectedProject.id === '02' && (
                    <div className="w-full h-[60vh] my-8 relative border border-[#222] bg-[#0a0a0a]">
                      <FocusCarousel
                        images={[
                          { src: '/1.png', label: 'Moodboard 1' },
                          { src: '/2.png', label: 'Moodboard 2' },
                          { src: '/3 copy.png', label: 'Moodboard 3' },
                          { src: '/4 copy.png', label: 'Moodboard 4' }
                        ]}
                      />
                      <div className="absolute bottom-6 inset-x-0 w-full text-center pointer-events-none z-40">
                        <p className="text-xs font-mono uppercase tracking-widest text-[#b09e8d]/70">
                          Tap right image to navigate in order
                        </p>
                      </div>
                    </div>
                  )}

                  <p className="font-editorial italic text-gray-200 leading-relaxed text-2xl md:text-3xl mb-6">
                    {selectedProject.concept}
                  </p>
                  <p className="font-editorial text-gray-400 leading-relaxed text-xl md:text-2xl">
                    {selectedProject.details}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Trend Dome View via DomeGallery */}
      <AnimatePresence>
        {selectedTrend && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] bg-[#0a0a0a] text-[#e5e5e5] overflow-y-auto"
          >
            <div className="fixed top-0 w-full p-6 md:px-12 flex justify-between items-center z-[110] mix-blend-difference pointer-events-none">
              <button
                onClick={() => setSelectedTrend(null)}
                className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#b09e8d] hover:text-white transition-colors pointer-events-auto bg-black/20 p-2 rounded-full backdrop-blur-sm"
              >
                <ArrowLeft size={16} />
                <span>Back to Trends</span>
              </button>
              <div className="pointer-events-auto text-xs uppercase tracking-[0.2em] opacity-50 hidden md:block">
                Trend: {selectedTrend.title}
              </div>
            </div>

            <div className="w-full h-[82vh] relative border-b border-[#222]">
              <FocusCarousel
                images={selectedTrend.images || []}
              />
              <div className="absolute bottom-6 inset-x-0 w-full text-center pointer-events-none z-40">
                <p className="text-xs font-mono uppercase tracking-widest text-[#b09e8d]/70">
                  Tap right image to navigate in order
                </p>
              </div>
            </div>

            <div className="w-full px-6 md:px-12 lg:px-24 py-16 pb-32 text-left">
              <h2 className="font-condensed text-5xl md:text-7xl tracking-[0.15em] mb-6 text-white uppercase">{selectedTrend.title}</h2>
              <p className="font-editorial text-gray-400 leading-relaxed text-xl md:text-2xl">
                A thorough exploration into {selectedTrend.title.toLowerCase()}, examining the future of fashion identity and structural garments.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Content */}
      <div className={`${(selectedProject || selectedTrend) ? 'h-screen overflow-hidden' : ''}`}>
        {/* Navigation */}
        <nav className="fixed top-0 w-full p-6 md:px-12 flex justify-between items-center z-40 mix-blend-difference">
          <span className="font-serif tracking-widest text-sm uppercase">Gayatri Pise</span>
          <div className="flex space-x-8">
            <a href="#about" className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity">About</a>
            <a href="#projects" className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity hidden md:inline-block">Collections</a>
            <a href="#contact" className="text-xs uppercase tracking-widest hover:opacity-70 transition-opacity">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="h-screen w-full relative overflow-hidden bg-[#aab0a5]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            {/* The user can replace the src with their uploaded image url. Using a placeholder with a similar aesthetic or the collection's main image. */}
            <img
              src="/cover.jpeg"
              alt="Gayatri Pise Portfolio Cover"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="absolute inset-0 z-10 flex flex-col justify-center px-4 md:px-12 xl:px-24">
            <div className="w-full relative max-w-[1600px] mx-auto mt-[-5vh]">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-sans text-[#b30000] uppercase text-[11vw] md:text-[8vw] xl:text-[160px] font-black leading-[0.75] tracking-tighter m-0 p-0 text-left whitespace-nowrap"
              >
                The Designer's
              </motion.h1>

              <div className="flex flex-col items-end w-full relative mt-2 md:mt-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="font-sans text-[#b30000] uppercase text-[11vw] md:text-[8vw] xl:text-[160px] font-black leading-[0.75] tracking-tighter m-0 p-0 text-right z-10 mr-[-2vw] xl:mr-10"
                >
                  Cut
                </motion.h1>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-24 bg-[#0a0a0a] border-t border-[#222] relative overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-24">

            {/* Massive Overlapping Heading */}
            <h2 className="font-condensed text-[13vw] md:text-[16vw] leading-[0.75] tracking-tight uppercase text-[#b30000] font-black text-center select-none relative z-10 mb-[-5vw] md:mb-[-6vw] pointer-events-none">
              About Me
            </h2>

            {/* Two-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start relative z-0">
              {/* Left Column: Image with overlap */}
              <div className="md:col-span-5 relative">
                <div className="w-full aspect-[3/4] overflow-hidden bg-zinc-900 border border-[#222]">
                  <img
                    src="/gayatri.jpeg"
                    alt="Gayatri Pise"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Right Column: Paragraph Bio */}
              <div className="md:col-span-7 pt-[8vw] md:pt-[10vw] flex flex-col justify-between h-full">
                <div className="space-y-6 text-[#d5d5d5] font-editorial text-[22px] md:text-[28px] leading-relaxed">
                  <p>
                    Hi! I'm Gayatri Pise, a contemporary fashion designer, patternmaker, and visual storyteller holding a Bachelor of Design (B.Des) from the School of Fashion Technology (SOFT, 2026) and a Pearson BTEC Global qualification (2024). I explore the balance between deconstruction, modern structures, and raw human emotion within wearable art.
                  </p>
                  <p>
                    My design philosophy is highly concept-led and detail-conscious. Winner of the Best Concept Award at the Fashion Graduation Showcase (2024), my work has evolved through hands-on industry experience—including design internships at Bombay Shirt Company (2025) and bridal house Mala & Kinarry's (2024), alongside costume development for FTII film productions.
                  </p>
                  <p>
                    Fashion is structural, fashion is experimental, fashion is personal. Every collection is an open invitation to explore fashion beyond its surface.
                  </p>
                </div>

                <div className="mt-12 md:mt-24 flex justify-between items-center">
                  <a
                    href="/portfolio.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono uppercase tracking-[0.2em] text-[#b30000] hover:text-white border-b border-[#b30000] hover:border-white pb-1 transition-all duration-300"
                  >
                    View Portfolio
                  </a>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#b09e8d] hover:text-white transition-colors">
                    gayatripise.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Image Heavy Lookbook */}
        <section id="projects" className="py-20 border-t border-[#222]">
          <div className="px-6 md:px-12 mb-12 text-center">
            <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-[#b30000]">Collections</h2>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Fashion Showcase Series</p>
          </div>

          <div className="flex flex-col gap-32">
            {projects.map((item, index) => (
              <div key={item.id} className="relative group px-6 md:px-12">
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                  {/* Project Image Area */}
                  <div
                    className={`md:col-span-7 aspect-[16/9] md:aspect-auto h-auto md:h-[80vh] w-full overflow-hidden relative ${index % 2 !== 0 ? 'md:order-last' : ''} cursor-pointer group-hover:shadow-[0_0_50px_rgba(176,158,141,0.1)] transition-shadow duration-500`}
                    onClick={() => setSelectedProject(item)}
                  >
                    <img
                      src={item.mainImage}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] md:group-hover:scale-110"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0e] via-transparent to-transparent opacity-80 md:opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>

                    {/* Hover text: "See the whole collection" - visible in bottom-left on mobile by default, centered hover-only on desktop */}
                    <div className="absolute inset-0 flex items-end justify-start p-4 md:items-center md:justify-center md:p-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="px-3 py-1.5 md:px-12 md:py-6 outline-1 outline-white/20 bg-black/60 backdrop-blur-md text-[9px] md:text-md uppercase tracking-[0.2em] md:tracking-[0.3em] font-light text-white flex flex-row md:flex-col items-center space-x-1.5 md:space-x-0 space-y-0 md:space-y-3 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-700">
                        <span className="hidden md:inline">See the whole collection</span>
                        <span className="inline md:hidden">See Collection</span>
                        <ArrowUpRight size={12} className="text-[#b09e8d] md:w-[18px] md:h-[18px]" />
                      </div>
                    </div>
                  </div>

                  {/* Project Text Area */}
                  <div className="md:col-span-5 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="text-gray-600 font-serif text-3xl italic">{item.id}</span>
                      <div className="h-[1px] w-12 bg-[#333]"></div>
                    </div>

                    <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter mb-4 text-[#e5e5e5]">
                      {item.title}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#b09e8d] mb-8">{item.subtitle}</p>

                    <div className="space-y-6 text-gray-400 font-light leading-relaxed">
                      <p>{item.concept}</p>
                      <p>{item.details}</p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trend Forecast 2025 Section */}
        <section className="px-6 md:px-12 py-32 border-t border-[#222] bg-[#141212]">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-tighter mb-6">The Trend Forecast 2025</h2>
            <p className="text-sm font-light tracking-wide text-gray-400 leading-relaxed max-w-2xl mx-auto">
              These themes were obtained with a thorough offline & online research with surveys analysis and by using previous years fashion forecasts like PROMOSTYL, WGSN . Validating the trajectory of apparel trends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: 'Elevating Discards',
                desc: 'Transcending conventional boundaries of fashion, weaving a narrative that intertwines sustainability. Not just a trend; its a movement challenging disposable culture.',
                image: '/2 copy.png'
              },
              {
                title: 'Heritage Revival',
                desc: 'A delightful journey back in time, a celebration of craftsmanship that whispers tales of tradition and sustainable artisanal revival.',
                image: '/8 copy 2.png'
              },
              {
                title: 'Bio-Life',
                desc: 'Groundbreaking trend seamlessly combining innovation with eco-consciousness. Draws from bio yarns and lab-made fabrics creating simple, elegant silhouettes.',
                image: '/15 copy 3.png'
              }
            ].map((trend, i) => (
              <div key={trend.title} className="flex flex-col items-center">
                <TiltedCard
                  imageSrc={trend.image}
                  altText={trend.title}
                  captionText={`0${i + 1} • Click to explore Dome`}
                  containerHeight="480px"
                  containerWidth="100%"
                  imageHeight="360px"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end text-left select-none pointer-events-none">
                      <span className="text-[#b09e8d] font-mono text-sm tracking-widest block mb-2">0{i + 1}</span>
                      <h3 className="font-serif text-2xl uppercase tracking-tight text-white mb-2">{trend.title}</h3>
                      <p className="text-xs font-light text-gray-300 leading-relaxed opacity-90">{trend.desc}</p>
                    </div>
                  }
                  onClick={() => setSelectedTrend({ title: trend.title, images: trendGalleryData[trend.title] })}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Circular Gallery Section replaced with Masonry */}
        <section className="py-20 border-t border-[#222]">
          <div className="px-6 md:px-12 mb-12 text-center">
            <h2 className="font-serif text-4xl md:text-6xl uppercase tracking-tighter">
              btw not in the pitch, but
            </h2>
          </div>
          <div className="w-full px-6 md:px-12 max-w-7xl mx-auto">
            <Masonry
              items={[
                { id: '1', img: '/hb (3).jpeg', label: 'sports', height: 500 },
                { id: '2', img: '/hb (1).jpeg', label: 'embroidery', height: 350 },
                { id: '3', img: '/hb (2).jpeg', label: 'imaxxing', height: 450 },
                { id: '4', img: '/hb (4).jpeg', label: 'frames', height: 380 },
                { id: '5', img: '/hb (5).jpeg', label: 'meandering', height: 520 },
                { id: '6', img: '/hb (6).jpeg', label: 'cooking', height: 400 }
              ]}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover
              hoverScale={0.95}
              blurToFocus
              colorShiftOnHover={false}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 md:px-12 py-40 border-t border-[#222]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-6xl md:text-8xl uppercase tracking-tighter mb-16 text-center">Let's Connect</h2>
            <form className="space-y-16" onSubmit={handleSendInquiry}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative">
                  <input type="text" id="name" placeholder=" " required className="peer text-xl pb-4 border-b border-[#333] focus:border-white transition-colors bg-transparent w-full rounded-none" />
                  <label htmlFor="name" className="absolute left-0 top-0 text-xs uppercase tracking-widest text-gray-300 transition-all duration-300 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-xl peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-gray-300 cursor-text pointer-events-none">Your Name</label>
                </div>
                <div className="relative">
                  <input type="email" id="email" placeholder=" " required className="peer text-xl pb-4 border-b border-[#333] focus:border-white transition-colors bg-transparent w-full rounded-none" />
                  <label htmlFor="email" className="absolute left-0 top-0 text-xs uppercase tracking-widest text-gray-300 transition-all duration-300 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-xl peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-gray-300 cursor-text pointer-events-none">Your Email</label>
                </div>
              </div>
              <div className="relative">
                <textarea id="message" rows={4} placeholder=" " required className="peer text-xl pb-4 border-b border-[#333] focus:border-white transition-colors bg-transparent w-full resize-none rounded-none"></textarea>
                <label htmlFor="message" className="absolute left-0 top-0 text-xs uppercase tracking-widest text-gray-300 transition-all duration-300 -translate-y-8 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-xl peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-gray-500 peer-focus:-translate-y-8 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-gray-300 cursor-text pointer-events-none">Message Details</label>
              </div>

              {/* Form Status Messages */}
              {formStatus === 'success' && (
                <p className="text-emerald-500 text-sm tracking-wider uppercase text-center font-mono">
                  Inquiry sent successfully! Thank you.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-500 text-sm tracking-wider uppercase text-center font-mono">
                  Something went wrong. Please try again.
                </p>
              )}

              <div className="flex justify-center mt-16">
                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="text-xs uppercase tracking-[0.2em] px-12 py-5 border border-[#333] hover:bg-[#e5e5e5] hover:text-[#0f0e0e] transition-all duration-500 disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 md:px-12 py-12 border-t border-[#222] flex flex-col md:flex-row justify-between items-center bg-[#080808]">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <p className="font-serif text-xl tracking-widest uppercase mb-2">Gayatri Pise</p>
            <p className="text-xs uppercase tracking-widest text-[#666]">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-xs uppercase tracking-widest text-[#666]">
            <a href="tel:+919673862457" className="hover:text-[#e5e5e5] transition-colors">+91 9673862457</a>
            <a href="mailto:pisegayatri111@gmail.com" className="hover:text-[#e5e5e5] transition-colors">pisegayatri111@gmail.com</a>
            <a href="https://linkedin.com/in/gayatri-pise-570892277" target="_blank" rel="noreferrer" className="hover:text-[#e5e5e5] transition-colors">LinkedIn</a>
            <a href="https://behance.net/pisegayatri" target="_blank" rel="noreferrer" className="hover:text-[#e5e5e5] transition-colors">Behance</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

