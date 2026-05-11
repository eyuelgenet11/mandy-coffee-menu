import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './MenuItem.module.css';
import { MenuItem as MenuItemType } from '@/data/menu';

interface MenuItemProps {
  item: MenuItemType;
  index?: number;
  onClick: (item: MenuItemType) => void;
  lang?: 'en' | 'am' | 'ar' | 'fr' | 'es' | 'zh' | 'de';
  viewMode?: 'grid' | 'list';
}

export default function MenuItem({ item, index = 0, onClick, lang = 'en', viewMode = 'grid' }: MenuItemProps) {
  const [imageError, setImageError] = useState(false);

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
      className={`glass ${styles.item} ${viewMode === 'list' ? styles.listItem : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
      onClick={() => onClick(item)}
    >
      <div className={styles.imageContainer}>
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
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>{getItemName()}</h3>
          <span className={styles.price}>{item.price} <small>ETB</small></span>
        </div>
        <p className={styles.description}>{getItemDescription()}</p>
      </div>
    </motion.div>
  );
}

