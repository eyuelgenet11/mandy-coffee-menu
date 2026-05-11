'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '@/data/menu';
import { translations } from '@/data/translations';
import styles from './ItemDetail.module.css';

interface ItemDetailProps {
  item: MenuItem;
  onClose: () => void;
  lang?: 'en' | 'am' | 'ar' | 'fr' | 'es' | 'zh' | 'de';
}

export default function ItemDetail({ item, onClose, lang = 'en' }: ItemDetailProps) {
  const [imageError, setImageError] = useState(false);
  const t = translations[lang];

  const getItemName = () => {
    if (lang === 'am' && item.nameAm) return item.nameAm;
    if (lang === 'ar' && item.nameAr) return item.nameAr;
    if (lang === 'fr' && item.nameFr) return item.nameFr;
    if (lang === 'es' && item.nameEs) return item.nameEs;
    if (lang === 'zh' && item.nameZh) return item.nameZh;
    if (lang === 'de' && item.nameDe) return item.nameDe;
    return item.name;
  };

  const getItemDescription = () => {
    if (lang === 'am' && item.descriptionAm) return item.descriptionAm;
    if (lang === 'ar' && item.descriptionAr) return item.descriptionAr;
    if (lang === 'fr' && item.descriptionFr) return item.descriptionFr;
    if (lang === 'es' && item.descriptionEs) return item.descriptionEs;
    if (lang === 'zh' && item.descriptionZh) return item.descriptionZh;
    if (lang === 'de' && item.descriptionDe) return item.descriptionDe;
    return item.description;
  };

  return (
    <motion.div 
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className={`glass ${styles.modal}`}
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.imageSection}>
          {item.image && !imageError ? (
            <img 
              src={item.image} 
              alt={item.name} 
              className={styles.image} 
              onError={() => setImageError(true)}
            />
          ) : (
            <div className={styles.imagePlaceholder}>
              <span>{item.name[0]}</span>
            </div>
          )}
          <div className={styles.categoryBadge}>{item.category}</div>
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.name}>{getItemName()}</h2>
            <div className={styles.price}>{item.price} <small>ETB</small></div>
          </div>
          
          <div className={styles.divider}></div>
          
          <div className={styles.descriptionSection}>
            <h3>{t.description}</h3>
            <p>{getItemDescription()}</p>
          </div>

          <div className={styles.actions}>
            <button className={styles.backButton} style={{ width: '100%' }} onClick={onClose}>
              {t.backToMenu}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
