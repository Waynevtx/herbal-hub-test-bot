interface Translations {
  [key: string]: {
    en: string;
    zh: string;
  };
}

export const translations: Translations = {
  home: {
    en: 'Home',
    zh: '首页',
  },
  shop: {
    en: 'Shop',
    zh: '商店',
  },
  about: {
    en: 'About',
    zh: '关于',
  },
  contact: {
    en: 'Contact',
    zh: '联系',
  },
  search: {
    en: 'Search...',
    zh: '搜索...',
  },
  cart: {
    en: 'Cart',
    zh: '购物车',
  },
  menu: {
    en: 'Menu',
    zh: '菜单',
  },
  categories: {
    en: 'Categories',
    zh: '分类',
  },
  sortBy: {
    en: 'Sort by:',
    zh: '排序:',
  },
};