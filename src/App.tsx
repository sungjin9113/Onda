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
  ArrowRight
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-800 hover:text-blue-600 font-bold transition-colors">서비스 소개</a>
            <a href="#process" className="text-slate-800 hover:text-blue-600 font-bold transition-colors">이용 방법</a>
            <a href="#reviews" className="text-slate-800 hover:text-blue-600 font-bold transition-colors">이용 후기</a>
            <a href="#faq" className="text-slate-800 hover:text-blue-600 font-bold transition-colors">자주 묻는 질문</a>
            <div className="flex items-center gap-4 ml-4">
              <span className="text-slate-900 font-bold flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-blue-500" />
                1600-6792
              </span>
              <a href="tel:1600-9762" className="bg-blue-500 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-block">
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
                  1600-6792
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
    <section 
      className="pt-32 pb-20 overflow-hidden relative bg-cover bg-center"
      style={{ backgroundImage: `url('https://i.pinimg.com/736x/c3/7d/44/c37d449007b76736b6d029f65b817da6.jpg')` }}
    >
      {/* Dimming overlay for readability */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white text-blue-600 font-bold text-sm mb-6 shadow-sm border border-sky-100">
              ✨ 프리미엄 정기청소 서비스
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tighter mb-6 leading-[1.2] break-keep">
              당신의 공간에 <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">새로운 활력</span>을 불어넣다
            </h1>
            <p className="text-lg md:text-xl text-slate-800 mb-10 leading-[1.6] tracking-tight break-keep font-medium max-w-2xl">
              전문적인 청소 매니저가 정기적으로 방문하여 항상 쾌적하고 완벽한 환경을 유지해 드립니다. 온다클린과 함께 일상의 여유를 되찾으세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:1600-9762" className="bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                무료 견적 받기 <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://www.ondaclean.kr/" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 border-2 border-sky-100 px-10 py-5 rounded-full font-bold text-xl hover:bg-sky-50 hover:border-blue-200 transition-all flex items-center justify-center shadow-sm">
                서비스 알아보기
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=1" alt="User" />
                <img className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=2" alt="User" />
                <img className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=3" alt="User" />
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="font-bold text-slate-900 text-base">15,000+</span> <span className="text-slate-800 font-medium">명의 고객이 만족했습니다</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { icon: <PhoneCall className="w-8 h-8 text-blue-500" />, title: "상담 및 문의", desc: "전화나 온라인으로 간편하게 청소 상담을 신청하세요." },
    { icon: <ClipboardList className="w-8 h-8 text-blue-500" />, title: "맞춤 견적 및 플랜", desc: "전문가가 공간을 분석하고 최적의 정기청소 플랜을 제안합니다." },
    { icon: <Sparkles className="w-8 h-8 text-blue-500" />, title: "정기 방문 청소", desc: "정해진 일정에 맞춰 전문 매니저가 방문하여 완벽하게 청소합니다." }
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
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
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Connecting lines for md+ screens */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-sky-100 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-sky-50 flex items-center justify-center mb-6 shadow-sm border border-sky-100 group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">{step.title}</h3>
              <p className="text-slate-800 text-base md:text-lg leading-[1.6] tracking-tight break-keep font-medium">{step.desc}</p>
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
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-200 rounded-3xl transform rotate-3 opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Cleaning professional" 
                className="relative rounded-3xl shadow-xl object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-sky-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">고객 만족도</p>
                    <p className="text-2xl font-extrabold text-slate-900">99.8%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.3] tracking-tighter break-keep">
              당신의 라이프스타일에 맞춘 <br/><span className="text-blue-500">완벽한 청소 솔루션</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-800 mb-10 leading-[1.6] tracking-tight break-keep font-medium">
              온다클린의 전문 청소팀은 고객님의 공간이 항상 최적의 상태를 유지할 수 있도록 신속하고 전문적이며 친절한 서비스를 제공합니다.
            </p>
            <ul className="space-y-6">
              {[
                "체계적인 교육을 이수한 검증된 청소 전문가",
                "인체와 환경에 무해한 친환경 청소 용품 사용",
                "만족하지 않으시면 다시 청소해드리는 100% 고객 만족 보장"
              ].map((item, i) => (
                <li key={i} className="flex items-start bg-white p-5 rounded-2xl shadow-sm border border-sky-100">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-0.5 mr-4 flex-shrink-0" />
                  <span className="text-lg md:text-xl text-slate-700 font-semibold tracking-tight break-keep">{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://www.ondaclean.kr/" target="_blank" rel="noopener noreferrer" className="mt-10 text-blue-600 font-bold text-lg inline-flex items-center hover:text-blue-800 transition-colors group">
              더 알아보기 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
    { icon: <Home />, title: "홈 클리닝", desc: "바쁜 현대인을 위한 집안 구석구석 꼼꼼한 주거 공간 청소" },
    { icon: <Sparkles />, title: "상업 공간 청소", desc: "매장, 카페, 식당 등 방문객에게 좋은 인상을 주는 청결 유지" },
    { icon: <Wind />, title: "에어컨/세탁기 분해청소", desc: "보이지 않는 곳의 곰팡이와 먼지까지 완벽하게 제거" },
    { icon: <Droplets />, title: "이사/입주 청소", desc: "새로운 시작을 위한 빈틈없는 공간 살균 및 딥 클리닝" },
    { icon: <ClipboardList />, title: "특수 청소", desc: "바닥 왁스 코팅, 카페트 클리닝 등 전문 장비가 필요한 청소" }
  ];

  return (
    <section id="services" className="py-24 bg-blue-600 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 tracking-tighter break-keep">우리의 서비스</h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-[1.6] tracking-tight break-keep">
            온다클린은 고객님의 다양한 니즈를 충족시키기 위해 포괄적인 청소 서비스를 제공합니다.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl hover:bg-white/20 transition-all cursor-pointer group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-inner">
                {React.cloneElement(service.icon, { className: "w-7 h-7" })}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
              <p className="text-blue-100 leading-[1.6] font-medium tracking-tight break-keep">{service.desc}</p>
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
            viewport={{ once: false, amount: 0.2 }}
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
            viewport={{ once: false, amount: 0.2 }}
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
    { name: "김지수", role: "스타트업 대표", content: "사무실 정기청소를 맡긴 후로 직원들의 만족도가 엄청나게 올라갔습니다. 항상 깨끗한 환경에서 일할 수 있어 업무 효율도 덩달아 상승했어요. 적극 추천합니다!", rating: 5 },
    { name: "이민호", role: "맞벌이 부부", content: "퇴근 후 집안일 스트레스가 사라졌어요. 매주 알아서 척척 청소해주시니 주말에는 온전히 쉬거나 가족과 시간을 보낼 수 있어서 너무 행복합니다.", rating: 5 },
    { name: "박소연", role: "카페 운영", content: "매장 청결이 생명인데, 온다클린 덕분에 항상 반짝거리는 매장을 유지하고 있습니다. 손님들도 매장이 깨끗하다고 칭찬을 많이 해주세요.", rating: 5 }
  ];

  return (
    <section id="reviews" className="py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 tracking-tighter break-keep">고객님들의 생생한 후기</h2>
          <p className="text-lg md:text-xl text-slate-800 max-w-2xl mx-auto leading-[1.6] tracking-tight break-keep font-medium">
            온다클린과 함께 쾌적한 일상을 경험하고 계신 고객님들의 이야기입니다.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {reviews.map((review, index) => (
            <motion.div key={index} variants={fadeInUp} className="bg-white p-8 rounded-3xl shadow-sm border border-sky-100 relative hover:shadow-md transition-shadow">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-700 text-lg mb-8 leading-[1.6] font-medium tracking-tight break-keep">"{review.content}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={`https://i.pravatar.cc/150?img=${index + 10}`} alt={review.name} className="w-14 h-14 rounded-full bg-sky-100 border-2 border-white shadow-sm" />
                <div>
                  <h4 className="font-bold text-lg text-slate-900 tracking-tight">{review.name}</h4>
                  <p className="text-base text-slate-500 font-medium tracking-tight">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-[1.3] tracking-tighter break-keep">
          지금 바로 깨끗한 공간을 <br className="hidden md:block"/>경험해보세요
        </h2>
        <p className="text-lg md:text-xl text-blue-50 mb-10 font-medium leading-[1.6] tracking-tight break-keep">
          간단한 정보 입력만으로 맞춤형 무료 견적을 받아보실 수 있습니다.
        </p>
        <a href="tel:1600-9762" className="bg-yellow-400 text-slate-900 px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-yellow-300 transition-all shadow-xl transform hover:-translate-y-1 hover:scale-105 inline-block">
          무료 견적 신청하기
        </a>
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
            <div className="inline-flex items-center justify-center bg-white p-3 rounded-xl mb-6">
              <img src="https://cdn.imweb.me/thumbnail/20240815/77005f7ea9df7.png" alt="온다클린" className="h-10 w-auto" />
            </div>
            <p className="mb-6 max-w-sm leading-[1.6] tracking-tight break-keep">
              프리미엄 정기청소 서비스 온다클린.<br/>
              당신의 공간에 새로운 활력을 불어넣습니다.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">
                <span className="font-bold">F</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">
                <span className="font-bold">I</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors cursor-pointer">
                <span className="font-bold">Y</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">서비스</h4>
            <ul className="space-y-3">
              <li><a href="https://www.ondaclean.kr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">오피스 청소</a></li>
              <li><a href="https://www.ondaclean.kr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">홈 클리닝</a></li>
              <li><a href="https://www.ondaclean.kr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">상업 공간 청소</a></li>
              <li><a href="https://www.ondaclean.kr/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">특수 청소</a></li>
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
          <p className="mt-4 md:mt-0">대표번호: 1600-6792 | 이메일: hello@ondaclean.com</p>
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
      <Process />
      <Features />
      <Services />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
