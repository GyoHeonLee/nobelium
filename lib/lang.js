import BLOG from '@/blog.config'

const lang = {
  en: {
    NAV: {
      INDEX: 'Blog',
      PORTFOLIO: 'Portfolio',
      SEARCH: 'Search',
      RESUME: 'Resume'
    },
    PAGINATION: {
      PREV: 'Prev',
      NEXT: 'Next'
    },
    POST: {
      BACK: 'Back',
      TOP: 'Top'
    }
  },
  'zh-CN': {
    NAV: {
      INDEX: '博客',
      PORTFOLIO: '订阅',
      SEARCH: '搜索',
      RESUME: '关于'
    },
    PAGINATION: {
      PREV: '上一页',
      NEXT: '下一页'
    },
    POST: {
      BACK: '返回',
      TOP: '回到顶部'
    }
  },
  'zh-HK': {
    NAV: {
      INDEX: '網誌',
      PORTFOLIO: '訂閱',
      SEARCH: '搜尋',
      RESUME: '關於'
    },
    PAGINATION: {
      PREV: '上一頁',
      NEXT: '下一頁'
    },
    POST: {
      BACK: '返回',
      TOP: '回到頂端'
    }
  },
  'zh-TW': {
    NAV: {
      INDEX: '部落格',
      PORTFOLIO: '訂閱',
      SEARCH: '搜尋',
      RESUME: '關於'
    },
    PAGINATION: {
      PREV: '上一頁',
      NEXT: '下一頁'
    },
    POST: {
      BACK: '返回',
      TOP: '回到頂端'
    }
  },
  ja: {
    NAV: {
      INDEX: 'ブログ',
      PORTFOLIO: '購読',
      SEARCH: '検索',
      RESUME: 'このサイトについて'
    },
    PAGINATION: {
      PREV: '前ページ',
      NEXT: '次ページ'
    },
    POST: {
      BACK: '戻る',
      TOP: 'トップに戻る'
    }
  },
  es: {
    NAV: {
      INDEX: 'Blog',
      PORTFOLIO: 'Portfolio',
      SEARCH: 'Buscar',
      RESUME: 'Acerca de mí'
    },
    PAGINATION: {
      PREV: 'Anterior',
      NEXT: 'Siguiente'
    },
    POST: {
      BACK: 'Atrás',
      TOP: 'Arriba'
    }
  }
}

export const fetchLocaleLang = () => {
  switch (BLOG.lang.toLowerCase()) {
    case 'zh-cn':
    case 'zh-sg':
      return lang['zh-CN']
    case 'zh-hk':
      return lang['zh-HK']
    case 'zh-tw':
      return lang['zh-TW']
    case 'ja':
    case 'ja-jp':
      return lang.ja
    case 'es':
    case 'es-ES':
      return lang.es
    case 'en':
    case 'en-us':
    default:
      return lang.en
  }
}
