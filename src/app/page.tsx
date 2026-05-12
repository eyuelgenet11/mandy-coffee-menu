'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData, MenuItem as MenuItemType } from '@/data/menu';
import { translations } from '@/data/translations';
import MenuItem from '@/components/MenuItem';
import ItemDetail from '@/components/ItemDetail';
import styles from './page.module.css';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState<keyof typeof translations>('en');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<'feedback' | 'contact' | 'review' | null>(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const t = translations[lang];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSidebarOpen(false);
    // Mock submission delay
    setTimeout(() => {
      setShowSuccess(true);
      setActiveForm(null);
      setRating(0); // Reset rating
      setTimeout(() => setShowSuccess(false), 3500);
    }, 500);
  };

  const filteredItems = searchQuery 
    ? menuData.flatMap(c => c.items).filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.nameAm?.includes(searchQuery)
      )
    : menuData.find(c => c.id === activeCategory)?.items || [];

  const featuredItems = menuData.flatMap(c => c.items).filter(i => i.featured);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'hot-drinks': 
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
            <path d="M6 2v3M10 2v3M14 2v3" />
          </svg>
        );
      case 'cold-beverages': 
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 2H9a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
            <path d="M9 10h6M9 14h6" />
            <path d="M12 2v3" />
          </svg>
        );
      case 'mojito': 
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 2h10l-2 18H9L7 2z" />
            <path d="M12 2l2 4" />
            <path d="M11 10h2M11 14h2" />
          </svg>
        );
      case 'juices': 
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />
            <path d="M12 8V2l4 2" />
            <path d="M12 12h.01" />
          </svg>
        );
      case 'snacks': 
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 15c0 2.8 2.2 5 5 5h8c2.8 0 5-2.2 5-5v-3H3v3z" />
            <path d="M3 12c0-2.8 2.2-5 5-5h8c2.8 0 5 2.2 5 5" />
            <path d="M8 7V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
          </svg>
        );
      case 'drinks': 
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="7" y="2" width="10" height="20" rx="2" />
            <path d="M7 6h10M7 18h10" />
            <path d="M12 2v2" />
          </svg>
        );
      default:
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div 
          key="splash"
          className={styles.splash}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={styles.splashContent}
          >
            <div className={styles.logoCircleLarge}>
              <img src="/logo.png" alt="Mandy Coffee Logo" className={styles.logoImg} />
            </div>
            <div className={styles.splashText}>
              <h1>{t.brandName}</h1>
              <p>{t.brandSubtitle}</p>
            </div>
            <div className={styles.loader}>
              <div className={styles.loaderBar}></div>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.main 
          key="main"
          className={styles.main}
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
      {/* Animated Background Particles */}
      <div className={styles.particlesContainer}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: Math.random() * 0.3 + 0.1,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: ['-10%', '110%'],
              x: [
                (Math.random() * 100) + '%', 
                (Math.random() * 100 + (Math.random() > 0.5 ? 10 : -10)) + '%'
              ],
              rotate: 360
            }}
            transition={{ 
              duration: Math.random() * 20 + 20, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * -20
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className={styles.header}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.brand}
        >
          <button className={styles.menuToggle} onClick={() => setIsSidebarOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <div className={styles.logoCircle}>
            <img src="/logo.png" alt="Mandy Coffee Logo" className={styles.logoImg} />
          </div>
          <div className={styles.brandText}>
            <h1>{t.brandName}</h1>
            <p>{t.brandSubtitle}</p>
          </div>
        </motion.div>

        <div className={styles.headerActions}>
          <button 
            className={`${styles.viewToggle} ${viewMode === 'list' ? styles.viewToggleActive : ''}`}
            onClick={() => setViewMode(prev => prev === 'grid' ? 'list' : 'grid')}
            title="Toggle View"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
          </button>
          <div className={styles.langSelector}>
            <button 
              className={styles.langToggle} 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              <span>{lang.toUpperCase()}</span>
            </button>
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div 
                  className={`glass ${styles.langMenu}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {(Object.keys(translations) as Array<keyof typeof translations>).map((l) => (
                    <button 
                      key={l} 
                      className={`${styles.langOption} ${lang === l ? styles.langOptionActive : ''}`}
                      onClick={() => { setLang(l); setIsLangMenuOpen(false); }}
                    >
                      {l === 'en' ? 'English' : 
                       l === 'am' ? 'አማርኛ' : 
                       l === 'ar' ? 'العربية' : 
                       l === 'fr' ? 'Français' :
                       l === 'es' ? 'Español' :
                       l === 'zh' ? '中文' :
                       'Deutsch'}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.searchContainer}
        >
          <div className={styles.searchWrapper}>
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder={t.searchPlaceholder} 
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>
        
        {/* Layout Toggle & Category Navigation */}
        <div className={styles.navHeader}>
          <nav className={styles.nav}>
            <div className={styles.navScroll}>
              {menuData.map((category) => (
                <button
                  key={category.id}
                  className={`${styles.navButton} ${activeCategory === category.id ? styles.navActive : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className={styles.navIcon}>{getCategoryIcon(category.id)}</span>
                  <span className={styles.navLabel}>
                    {lang === 'am' ? category.nameAm : 
                     lang === 'ar' ? category.nameAr : 
                     lang === 'fr' ? category.nameFr : 
                     lang === 'es' ? category.nameEs :
                     lang === 'zh' ? category.nameZh :
                     lang === 'de' ? category.nameDe :
                     category.name}
                  </span>
                </button>
              ))}
            </div>
          </nav>

        </div>
      </header>
      
      {/* Featured Section */}
      {!searchQuery && featuredItems.length > 0 && (
        <section className={styles.featuredSection}>
          <div className={styles.sectionHeader}>
            <h2>{t.chefsSpecials}</h2>
            <div className={styles.line}></div>
          </div>
          <div className={styles.featuredScroll}>
            {featuredItems.map((item, idx) => (
              <motion.div 
                key={`featured-${item.name}`}
                className={`glass ${styles.featuredCard}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                onClick={() => setSelectedItem(item)}
              >
                <div className={styles.featuredImage}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    onError={(e) => (e.currentTarget.src = '/images/espresso.jpg')} 
                  />
                  <div className={styles.featuredBadge}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <span>{t.special}</span>
                  </div>
                </div>
                <div className={styles.featuredInfo}>
                  <h3>{lang === 'am' && item.nameAm ? item.nameAm : item.name}</h3>
                  <div className={styles.featuredPrice}>
                    <span>{item.price}</span>
                    <small>ETB</small>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Menu Grid */}
      <section className={styles.menuSection}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={`${styles.menuSection} ${viewMode === 'list' ? styles.listView : ''}`}
          >
            <div className={styles.grid}>
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <MenuItem 
                    key={item.name} 
                    item={item} 
                    lang={lang}
                    onClick={() => setSelectedItem(item)}
                    viewMode={viewMode}
                  />
                ))
              ) : (
                <div className={styles.noResults}>
                  <p>No items found matching your search.</p>
                  <button onClick={() => setSearchQuery('')}>Clear search</button>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <ItemDetail 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
            lang={lang}
          />
        )}
      </AnimatePresence>



      {/* Floating Contact Button */}
      <motion.a
        href="tel:0911686977"
        className={styles.fab}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </motion.a>

      {/* Sidebar Drawer */}
      <AnimatePresence>
        {isSidebarOpen && (
          <div className={styles.sidebarOverlay} onClick={() => setIsSidebarOpen(false)}>
            <motion.div 
              className={`glass ${styles.sidebar}`}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={e => e.stopPropagation()}
            >
              <div className={styles.sidebarHeader}>
                <div className={styles.sidebarLogo}>
                  <img src="/logo.png" alt="Logo" />
                </div>
                <button className={styles.sidebarClose} onClick={() => setIsSidebarOpen(false)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <nav className={styles.sidebarNav}>
                <button className={styles.sidebarItem} onClick={() => setIsSidebarOpen(false)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
                  <span>{t.menu}</span>
                </button>
                <button className={styles.sidebarItem} onClick={() => { setActiveForm('feedback'); setIsSidebarOpen(false); }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  <span>{t.feedback}</span>
                </button>
                <button className={styles.sidebarItem} onClick={() => { setActiveForm('contact'); setIsSidebarOpen(false); }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>{t.contactUs}</span>
                </button>
                <button className={styles.sidebarItem} onClick={() => { setActiveForm('review'); setIsSidebarOpen(false); }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <span>{t.review}</span>
                </button>
              </nav>

              <div className={styles.sidebarFooter}>
                <div className={styles.socialIcons}>
                  <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                  <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                  <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg></a>
                  <a href="#"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg></a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Form Modals */}
      <AnimatePresence>
        {activeForm && (
          <div className={styles.formOverlay} onClick={() => setActiveForm(null)}>
            <motion.div 
              className={`glass ${styles.formModal}`}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <div className={styles.formHeader}>
                <h2>{activeForm === 'feedback' ? t.feedback : activeForm === 'contact' ? t.contactUs : t.review}</h2>
                <button className={styles.formClose} onClick={() => setActiveForm(null)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className={styles.form}>
                {activeForm === 'contact' && (
                  <>
                    <div className={styles.contactInfo}>
                      <div className={styles.infoItem}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        <span>0911686977</span>
                      </div>
                      <div className={styles.infoItem}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        <span>www.mandy-coffee.com</span>
                      </div>
                    </div>
                    <button type="button" className={styles.formSubmit} onClick={() => setActiveForm(null)}>
                      {lang === 'en' ? 'Close' : 'ዝጋ'}
                    </button>
                  </>
                )}

                {activeForm === 'feedback' && (
                  <>
                    <div className={styles.inputGroup}>
                      <label>{t.name}</label>
                      <input type="text" required placeholder="John Doe" />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>{t.email} ({lang === 'en' ? 'Optional' : 'አማራጭ'})</label>
                      <input type="email" placeholder="john@example.com" />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>{t.message}</label>
                      <textarea rows={4} required placeholder="..."></textarea>
                    </div>
                  </>
                )}

                {activeForm === 'review' && (
                  <div className={styles.inputGroup} style={{ alignItems: 'center', gap: '2rem' }}>
                    <label style={{ fontSize: '1.2rem' }}>{t.rating}</label>
                    <div className={styles.starRating}>
                      {[1, 2, 3, 4, 5].map(star => (
                        <span 
                          key={star} 
                          className={`${styles.star} ${(hoverRating || rating) >= star ? styles.starActive : ''}`}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setRating(star)}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeForm !== 'contact' && (
                  <button type="submit" className={styles.formSubmit}>
                    {t.submit}
                  </button>
                )}
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Success Animation Overlay */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            className={styles.successOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={`glass ${styles.successModal}`}
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: -50, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <motion.div 
                className={styles.checkCircle}
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </motion.div>
              <h2>{t.thankYou}</h2>
              <p>{t.orderSuccess}</p>
              
              <motion.div className={styles.sparkle} animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ top: '10%', left: '20%' }} />
              <motion.div className={styles.sparkle} animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} style={{ top: '30%', right: '15%' }} />
              <motion.div className={styles.sparkle} animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} style={{ bottom: '20%', left: '30%' }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
          <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <img src="/logo.png" alt="Mandy Coffee" />
            </div>
            <div className={styles.footerText}>
              <h3>MANDY COFFEE</h3>
              <p>The Boutique Taste</p>
            </div>
          </div>
          <div className={styles.footerInfo}>
            <div className={styles.footerInfoItem}>
              <p>Hours</p>
              <span>8:00 AM - 10:00 PM</span>
            </div>
            <div className={styles.footerInfoItem}>
              <p>Location</p>
              <span>Bole, Addis Ababa</span>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2024 Mandy Coffee House. Crafted for excellence.</p>
        </div>
      </footer>
    </motion.main>
      )}
    </AnimatePresence>
  );
}

