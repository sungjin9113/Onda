import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PhoneCall, 
  ClipboardList, 
  Sparkles, 
  CheckCircle2, 
  Droplets, 
  Wind, 
  Building2, 
  Home, 
  ChevronDown, 
  ChevronUp,
  Star,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Warehouse,
  MessageCircle
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring",
      damping: 25,
      stiffness: 100,
      duration: 0.8
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-sky-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="https://cdn.imweb.me/thumbnail/20240815/77005f7ea9df7.png" alt="온다클린" className="h-12 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center md:space-x-4 lg:space-x-8">
            <a href="#services" className="text-slate-800 hover:text-blue-600 font-bold transition-colors md:text-sm lg:text-base whitespace-nowrap">서비스 소개</a>
            <a href="#process" className="text-slate-800 hover:text-blue-600 font-bold transition-colors md:text-sm lg:text-base whitespace-nowrap">이용 방법</a>
            <a href="#reviews" className="text-slate-800 hover:text-blue-600 font-bold transition-colors md:text-sm lg:text-base whitespace-nowrap">이용 후기</a>
            <a href="#faq" className="text-slate-800 hover:text-blue-600 font-bold transition-colors md:text-sm lg:text-base whitespace-nowrap">자주 묻는 질문</a>
            <div className="flex items-center md:gap-2 lg:gap-4 md:ml-2 lg:ml-4">
              <span className="text-slate-900 font-bold flex items-center gap-2 md:text-xs lg:text-base whitespace-nowrap">
                <PhoneCall className="md:w-3 md:h-3 lg:w-4 lg:h-4 text-blue-500" />
                1600-9762
              </span>
              <a href="tel:1600-9762" className="bg-blue-500 text-white md:px-4 lg:px-6 py-2 md:py-2.5 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-block md:text-xs lg:text-base whitespace-nowrap">
                견적 문의
              </a>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-sky-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              <a href="#services" onClick={() => setIsOpen(false)} className="text-slate-800 font-bold py-2">서비스 소개</a>
              <a href="#process" onClick={() => setIsOpen(false)} className="text-slate-800 font-bold py-2">이용 방법</a>
              <a href="#reviews" onClick={() => setIsOpen(false)} className="text-slate-800 font-bold py-2">이용 후기</a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="text-slate-800 font-bold py-2">자주 묻는 질문</a>
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
                <span className="text-slate-900 font-bold flex items-center gap-2 justify-center">
                  <PhoneCall className="w-4 h-4 text-blue-500" />
                  1600-9762
                </span>
                <a href="tel:1600-9762" className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold text-center shadow-md block">
                  견적 문의
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-12 overflow-hidden relative">
      {/* Background image - high quality, as is */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/images/hero-bg.jpg')`,
          imageRendering: 'auto',
          transform: 'translateZ(0)'
        }}
      ></div>

      {/* Content container with text shadows for readability on the clear background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-blue-600 font-bold text-sm mb-6 shadow-md border border-sky-100">
              ✨ 프리미엄 정기청소 서비스
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tighter mb-6 leading-[1.2] break-keep [text-shadow:_0_4px_8px_rgba(0,0,0,0.5)]">
              관리의 차이가 <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 [text-shadow:none] drop-shadow-sm">공간의 가치</span>를 바꿉니다
            </h1>
            <p className="text-lg md:text-xl text-white mb-10 leading-[1.6] tracking-tight break-keep font-bold max-w-2xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
              표면이 아닌 내부까지, 경험 많은 정기관리 전문가가 <br className="hidden md:block" />체계적인 관리로 공간의 가치를 높입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:1600-9762" className="bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                견적 문의 하기 <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://www.ondaclean.kr/" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 border-2 border-sky-100 px-10 py-5 rounded-full font-bold text-xl hover:bg-sky-50 hover:border-blue-200 transition-all flex items-center justify-center shadow-sm">
                서비스 알아보기
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="text-lg md:text-xl">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 md:w-7 md:h-7 fill-current" />)}
                </div>
                <span className="font-bold text-white text-xl md:text-2xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">15,000+</span> <span className="text-white font-bold [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">명의 고객이 만족했습니다</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const galleryImages = [
    "https://i.pinimg.com/736x/b5/46/3e/b5463edbdddf3e10632321c9e4473378.jpg",
    "https://i.pinimg.com/736x/e0/4f/de/e04fde3194a36901d641d010e5491156.jpg",
    "https://i.pinimg.com/736x/69/68/f9/6968f9b20dfa6cee72c7b2ec7a3a0aee.jpg",
    "https://i.pinimg.com/736x/46/db/40/46db40eb7902682ee930eabbbd11e805.jpg",
    "https://i.pinimg.com/736x/5a/3b/57/5a3b57dffc5eb580e4f5d30bc16ab905.jpg",
    "https://i.pinimg.com/736x/82/2b/b6/822bb6d3d060af784082e1248a4e1d2c.jpg",
    "https://i.pinimg.com/736x/1d/1d/26/1d1d2600d62bc88e39e07a0d5724115a.jpg",
    "https://i.pinimg.com/736x/b4/28/52/b428525f3e7a86dae2a3fe9dcb109fae.jpg",
    "https://i.pinimg.com/736x/72/97/db/7297db049da1ae6057d4952c1004711e.jpg",
    "https://i.pinimg.com/736x/2e/ac/a6/2eaca6876368b39743dfb37200ac483b.jpg",
    "https://i.pinimg.com/736x/08/63/f3/0863f3cfe75af73e5a4013f1f04f2296.jpg",
    "https://i.pinimg.com/736x/3e/d6/3a/3ed63a138f09f1ba2fe1c98136991e82.jpg",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 tracking-tighter break-keep">청소 현장 사진</h2>
          <p className="text-lg md:text-xl text-slate-800 max-w-2xl mx-auto leading-[1.6] tracking-tight break-keep font-medium">
            온다클린의 작업 현장 사진 경험해보세요.
          </p>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {galleryImages.map((src, index) => (
            <motion.div 
              key={index}
              className="relative aspect-[4/3] overflow-hidden group cursor-pointer rounded-2xl shadow-lg border border-sky-100/30 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img 
                src={src} 
                alt={`Cleaning work ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { icon: <PhoneCall className="w-8 h-8 text-blue-500" />, title: "상담 및 문의", desc: <>전화나 온라인으로 간편하게<br />청소 상담을 신청하세요.</> },
    { icon: <ClipboardList className="w-8 h-8 text-blue-500" />, title: "맞춤 견적 및 플랜", desc: "전문가가 공간을 분석하고 최적의 정기청소 플랜을 제안합니다." },
    { icon: <Sparkles className="w-8 h-8 text-blue-500" />, title: "정기 방문 청소", desc: "정해진 일정에 맞춰 전문 매니저가 방문하여 완벽하게 청소합니다." }
  ];

  return (
    <section id="process" className="py-16 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 tracking-tighter break-keep">간편한 이용 방법</h2>
          <p className="text-lg md:text-xl text-slate-800 tracking-tight break-keep font-medium">단 3단계로 깨끗한 공간을 만들어보세요.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Connecting lines for md+ screens */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-sky-100 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-sky-50 flex items-center justify-center mb-6 shadow-sm border border-sky-100 group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">{step.title}</h3>
              <p className="text-slate-800 text-base md:text-lg leading-[1.6] tracking-tight break-keep font-medium text-center max-w-[260px] w-full mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[500px] w-full grid grid-cols-2 grid-rows-2 gap-4">
              {/* Grid Images Layout */}
              <motion.div 
                className="col-span-1 row-span-1 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, zIndex: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="https://i.pinimg.com/736x/c0/9c/89/c09c89f6efe6ccf66a9fdbf785694c0b.jpg" 
                  alt="Cleaning service 1" 
                  className="rounded-3xl shadow-lg object-cover h-full w-full border border-sky-100"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div 
                className="col-span-1 row-span-1 cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <img 
                  src="https://i.pinimg.com/736x/c3/7d/44/c37d449007b76736b6d029f65b817da6.jpg" 
                  alt="Cleaning service 2" 
                  className="rounded-3xl shadow-lg object-cover h-full w-full border border-sky-100"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div 
                className="col-span-1 row-span-1 cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img 
                  src="https://i.pinimg.com/736x/8f/40/3b/8f403b5a48fc773bd0495f009037ef3b.jpg" 
                  alt="Cleaning service 3" 
                  className="rounded-3xl shadow-lg object-cover h-full w-full border border-sky-100"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div 
                className="col-span-1 row-span-1 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <img 
                  src="https://i.pinimg.com/736x/72/47/4c/72474c70a819814d1a6b4c68ebfc0187.jpg" 
                  alt="Cleaning service 4" 
                  className="rounded-3xl shadow-lg object-cover h-full w-full border border-sky-100"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Satisfaction Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-sky-100 z-30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">고객 만족도</p>
                    <p className="text-xl font-extrabold text-slate-900">99.8%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.3] tracking-tighter break-keep">
              당신의 라이프스타일에 맞춘 <span className="text-blue-500">완벽한 청소 솔루션</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-800 mb-10 leading-[1.6] tracking-tight break-keep font-medium">
              온다클린의 전문 청소팀은 고객님의 공간이 항상 최적의 상태를 유지할 수 있도록 신속하고 전문적이며 친절한 서비스를 제공합니다.
            </p>
            <ul className="space-y-6">
              {[
                "체계적인 교육을 이수한 검증된 청소 전문가",
                "인체와 환경에 무해한 친환경 청소 용품 사용",
                "청소 미흡시 A/S 진행, 100% 고객 만족 보장"
              ].map((item, i) => (
                <li key={i} className="flex items-start bg-white p-5 rounded-2xl shadow-sm border border-sky-100">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-0.5 mr-4 flex-shrink-0" />
                  <span className="text-lg md:text-xl text-slate-700 font-semibold tracking-tight break-keep">{item}</span>
                </li>
              ))}
            </ul>
            <a href="tel:1600-9762" className="mt-10 bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 inline-flex items-center justify-center gap-2 group">
              견적 문의 하기 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Building2 />, title: "오피스 정기청소", desc: "쾌적한 업무 환경 조성을 위한 맞춤형 사무실 청소 서비스" },
    { icon: <Sparkles />, title: "상업 공간 청소", desc: "매장, 카페, 식당 등 방문객에게 좋은 인상을 주는 청결 유지" },
    { icon: <ShieldCheck />, title: "방역 및 소독", desc: "바이러스와 세균으로부터 안전한 공간을 위한 전문 방역 서비스" },
    { icon: <Warehouse />, title: "준공 및 공장 청소", desc: "대규모 시설 및 건축물 준공 후의 정밀 클리닝 서비스" }
  ];

  return (
    <section id="services" className="py-24 bg-sky-100 text-slate-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply opacity-40 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply opacity-25 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 tracking-tighter break-keep text-slate-900">온다클린만의 정기관리 서비스</h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-[1.6] tracking-tight break-keep font-medium">
            온다클린은 체계적인 정기관리로 공간의 위생 수준을 지속적으로 관리합니다.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="bg-white border border-sky-200 p-8 rounded-2xl hover:shadow-xl transition-all cursor-pointer group hover:-translate-y-1 shadow-md"
            >
              <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform shadow-inner">
                {React.cloneElement(service.icon, { className: "w-7 h-7" })}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight text-slate-900">{service.title}</h3>
              <p className="text-slate-600 leading-[1.6] font-medium tracking-tight break-keep">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <p className="text-xl mb-6 font-medium">어떤 청소 서비스가 필요하신가요?</p>
          <a href="tel:1600-9762" className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all shadow-lg transform hover:-translate-y-1 inline-block">
            맞춤 상담 신청하기
          </a>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "정기청소 주기는 어떻게 되나요?", a: "고객님의 라이프스타일과 공간의 특성에 따라 주 1회, 격주 1회, 월 1회 등 자유롭게 선택하실 수 있습니다. 상담을 통해 최적의 주기를 추천해 드립니다." },
    { q: "청소 도구는 직접 준비해야 하나요?", a: "아닙니다. 온다클린의 전문 매니저가 친환경 세제와 전문 청소 장비를 모두 지참하여 방문하므로 고객님께서 따로 준비하실 것은 없습니다." },
    { q: "결제 방식은 어떻게 되나요?", a: "신용카드, 계좌이체 등 다양한 결제 방식을 지원하며, 정기 결제를 등록하시면 매월 자동으로 결제되어 편리하게 이용하실 수 있습니다." },
    { q: "서비스 불만족 시 어떻게 하나요?", a: "온다클린은 100% 고객 만족 보장제를 실시하고 있습니다. 서비스 후 불만족스러운 부분이 있다면 24시간 내에 연락 주시면 무상으로 재청소를 진행해 드립니다." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            className="lg:w-1/3 mb-10 lg:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.3] tracking-tighter break-keep">
              자주 묻는 질문
            </h2>
            <p className="text-lg md:text-xl text-slate-800 mb-10 leading-[1.6] tracking-tight break-keep font-medium">
              고객님들이 가장 궁금해하시는 질문들을 모았습니다. 원하는 정보를 찾지 못하셨다면 언제든지 문의해 주세요.
            </p>
            <a href="tel:1600-9762" className="bg-sky-100 text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-200 transition-colors inline-block">
              고객센터 연락하기
            </a>
          </motion.div>
          
          <motion.div 
            className="lg:w-2/3 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-blue-500 bg-sky-50 shadow-sm' : 'border-slate-200 hover:border-blue-300'}`}
              >
                <button 
                  className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-bold text-lg md:text-xl tracking-tight break-keep pr-4 ${openIndex === index ? 'text-blue-700' : 'text-slate-900'}`}>{faq.q}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 md:px-8 md:pb-6 text-slate-800 text-base md:text-lg leading-[1.6] font-bold tracking-tight break-keep">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "김지수", role: "사무실 정기청소", content: "사무실 정기청소를 맡긴 후로 직원들의 만족도가 엄청나게 올라갔습니다. 항상 깨끗한 환경에서 일할 수 있어 업무 효율도 덩달아 상승했어요.", rating: 5 },
    { name: "이민호", role: "화장실 청소", content: "건물 화장실 청소가 항상 골칫거리였는데, 온다클린에 맡기고 나서는 악취도 사라지고 항상 쾌적하게 유지되고 있습니다.", rating: 5 },
    { name: "박소연", role: "병원 정기청소", content: "병원은 위생이 가장 중요한데, 구석구석 보이지 않는 곳까지 꼼꼼하게 소독하고 청소해주셔서 안심하고 진료에 집중할 수 있습니다.", rating: 5 },
    { name: "최영환", role: "계단 청소", content: "빌라 계단 청소를 정기적으로 받고 있습니다. 거미줄이나 먼지 없이 항상 깔끔하게 관리해주셔서 입주민들 모두 만족하고 있어요.", rating: 5 },
    { name: "정은지", role: "사무실 청소", content: "바닥 왁스 코팅부터 쓰레기 분리수거까지 완벽하게 처리해주십니다. 아침에 출근할 때마다 상쾌한 기분이 들어서 너무 좋습니다.", rating: 5 },
    { name: "강동원", role: "정기청소", content: "매주 정해진 시간에 정확히 방문하셔서 메뉴얼대로 깔끔하게 청소해주십니다. 믿고 맡길 수 있는 든든한 파트너입니다.", rating: 5 },
    { name: "윤미래", role: "병원 청소", content: "환자분들이 대기실이 너무 깨끗해졌다고 칭찬을 많이 하십니다. 전문적인 장비와 친환경 세제를 사용해주셔서 더욱 신뢰가 갑니다.", rating: 5 },
    { name: "송중기", role: "화장실 청소", content: "상가 공용 화장실이라 관리가 힘들었는데, 정기 청소 이후로는 컴플레인이 싹 사라졌습니다. 정말 감사합니다.", rating: 5 },
    { name: "한지민", role: "계단 청소", content: "오래된 상가 건물이라 계단이 항상 지저분했는데, 정기 청소를 시작하고 건물이 한층 밝아진 느낌입니다. 가성비 최고예요.", rating: 5 },
    { name: "유재석", role: "사무실 정기청소", content: "직원들이 청소 스트레스에서 벗어나 본업에만 집중할 수 있게 되었습니다. 꼼꼼한 마무리에 항상 감동받고 있습니다.", rating: 5 }
  ];

  return (
    <section id="reviews" className="py-24 bg-sky-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 tracking-tighter break-keep">고객님들의 생생한 후기</h2>
          <p className="text-lg md:text-xl text-slate-800 max-w-2xl mx-auto leading-[1.6] tracking-tight break-keep font-medium">
            온다클린과 함께 쾌적한 일상을 경험하고 계신 고객님들의 이야기입니다.
          </p>
        </motion.div>
      </div>
        
      <div className="relative w-full flex overflow-hidden group">
        <div 
          className="flex gap-6 md:gap-8 w-max px-4 animate-[marquee_80s_linear_infinite] md:group-hover:[animation-play-state:paused] active:[animation-play-state:paused]"
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-sky-100 relative hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.04] transition-all duration-700 ease-in-out w-[300px] md:w-[400px] shrink-0 flex flex-col cursor-pointer will-change-transform group/card">
              <div className="flex text-yellow-400 mb-6 group-hover/card:scale-110 transition-transform duration-500">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-700 text-base md:text-lg mb-8 leading-[1.6] font-medium tracking-tight break-keep flex-grow group-hover/card:text-slate-900 transition-colors duration-500">"{review.content}"</p>
              <div className="mt-auto">
                <h4 className="font-bold text-lg text-slate-900 tracking-tight">{review.name.charAt(0)}**</h4>
                <p className="text-base text-slate-500 font-medium tracking-tight">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section 
      className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://i.pinimg.com/originals/8c/04/ce/8c04ceb956b8dddf3c4d00c11226cedd.jpg')" }}
    >
      <div className="absolute inset-0 bg-slate-900/50"></div>
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.3] tracking-tighter break-keep">
          지금 바로 깨끗한 공간을 <br className="hidden md:block"/>경험해보세요
        </h2>
        <p className="text-lg md:text-xl text-blue-50 mb-10 font-medium leading-[1.6] tracking-tight break-keep">
          간단한 정보 입력만으로 맞춤형 무료 견적을 받아보실 수 있습니다.
        </p>
        <div className="flex justify-center items-start gap-4 md:gap-6 mt-8">
          <a href="https://blog.naver.com/ringto263" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
            <img src="https://i.pinimg.com/736x/fb/60/1e/fb601ecc676085051fb2b43b614efb20.jpg" alt="Icon 1" className="w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-xl object-cover" referrerPolicy="no-referrer" />
            <span className="text-white text-base md:text-lg font-medium tracking-wide">후기보기</span>
          </a>
          <a href="https://talk.naver.com/profile/w4150l" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
            <img src="https://i.pinimg.com/736x/b1/91/1e/b1911ec333093ac5346f1074a13240e1.jpg" alt="Icon 2" className="w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-xl object-cover" referrerPolicy="no-referrer" />
            <span className="text-white text-base md:text-lg font-medium tracking-wide">톡톡문의</span>
          </a>
          <a href="https://pf.kakao.com/_KuTxhb" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
            <img src="https://i.pinimg.com/736x/a5/88/f3/a588f3ea99008fa3b3623914ffdd0d8d.jpg" alt="Icon 3" className="w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-xl object-cover" referrerPolicy="no-referrer" />
            <span className="text-white text-base md:text-lg font-medium tracking-wide">카톡문의</span>
          </a>
          <a href="tel:1600-9762" className="flex flex-col items-center gap-2 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-xl overflow-hidden">
              <img src="https://i.pinimg.com/736x/84/2b/c4/842bc49911d4074c58a8a5eccbcdefd4.jpg" alt="Icon 4" className="w-full h-full object-cover scale-[1.25]" referrerPolicy="no-referrer" />
            </div>
            <span className="text-white text-base md:text-lg font-medium tracking-wide">전화상담</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-8 text-sm leading-[1.8] tracking-tight break-keep text-slate-400 space-y-1">
              <p className="font-bold text-slate-200 mb-6 text-lg tracking-normal">프리미엄 청소업체 온다클린</p>
              <p>- 상호명 : 주식회사 홈밸런스</p>
              <p>- 대표 : 정석환, 오형석</p>
              <p>- 사업자등록번호 : 380-81-03372</p>
              <p>- 서울특별시 강북구 덕릉로 1, 2층</p>
              <p>- 대표번호 : 1600-9762</p>
              <p>- 법인등록번호 : 110111-092211</p>
              <p>- 대표메일 : ondaclean91@gmail.com</p>
              <p>- 통신판매업신고번호 : 2025-서울강북-0434</p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">서비스</h4>
            <ul className="space-y-3">
              <li><a href="https://www.ondaclean.kr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">오피스 정기청소</a></li>
              <li><a href="https://www.ondaclean.kr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">상업 공간 청소</a></li>
              <li><a href="https://www.ondaclean.kr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">방역 및 소독</a></li>
              <li><a href="https://www.ondaclean.kr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">준공 및 공장 청소</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">고객지원</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">자주 묻는 질문</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">견적 문의</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">이용 약관</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2026 OndaClean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Gallery />
      <Process />
      <Features />
      <Services />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
      
      {/* Sticky Bottom Banner */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto pointer-events-auto">
          <div className="bg-white/95 backdrop-blur-xl border border-sky-200 py-2 md:py-2.5 px-4 md:px-8 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center justify-between gap-4 transition-all duration-700 group">
            <div className="flex items-center gap-4 md:gap-8 flex-1 min-w-0">
              {/* Refined Logo Container - Adjusted size - Hidden on mobile */}
              <div className="hidden md:flex bg-white p-1 rounded-full shadow-[0_2px_12px_rgba(255,255,255,0.5)] group-hover:scale-105 transition-transform duration-500 overflow-hidden w-[58px] h-[34px] md:w-[110px] md:h-[58px] items-center justify-center shrink-0 border border-sky-100/50">
                <img 
                  src="https://cdn.imweb.me/thumbnail/20240815/77005f7ea9df7.png" 
                  alt="Icon" 
                  className="w-full h-full object-contain" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              
              <div className="flex flex-1 items-center justify-center gap-4 md:gap-8 overflow-hidden">
                <div className="flex items-center gap-2 md:gap-4 whitespace-nowrap overflow-hidden">
                  {/* Phone Number with Icon */}
                  <a 
                    href="tel:1600-9762" 
                    className="flex items-center gap-1.5 text-xl md:text-2xl lg:text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-[linear-gradient(to_right,#f04444,#f0a044,#f0f044,#44f044,#4444f0,#a044f0,#f044f0,#f044f0)] bg-[length:200%_auto] animate-rainbow-fast drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] shrink-0"
                  >
                    <PhoneCall className="w-5 h-5 md:w-6 md:h-6 text-sky-600" />
                    1600-9762
                  </a>
                  
                  {/* Call Prompt - Hidden on mobile */}
                  <span className="hidden md:inline font-semibold text-base md:text-lg lg:text-xl tracking-tighter text-slate-900 shrink-0 drop-shadow-sm">
                    &lt;&lt; 지금바로 전화상담!
                  </span>

                  {/* Info Text */}
                  <span className="hidden md:inline font-bold text-xs sm:text-sm md:text-base lg:text-lg tracking-tight bg-clip-text text-transparent bg-[linear-gradient(to_right,#f04444,#f0a044,#f0f044,#44f044,#4444f0,#a044f0,#f044f0,#f044f0)] bg-[length:200%_auto] animate-rainbow-slow drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                    24시간 상담가능, 고객센터로 문의주시면 빠르게 상담해 드립니다!
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center shrink-0">
              <a 
                href="https://pf.kakao.com/_KuTxhb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative overflow-hidden flex items-center gap-2 bg-[#FEE500] text-[#191919] px-4 md:px-6 py-2 md:py-2.5 rounded-full font-extrabold text-xs md:text-sm shadow-lg hover:scale-105 hover:bg-[#ffeb33] active:scale-95 transition-all shrink-0 border border-black/5"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 w-1/3 h-full bg-white/30 blur-sm animate-shine pointer-events-none" />
                
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 fill-current relative z-10" />
                <span className="relative z-10">실시간 카톡상담</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
