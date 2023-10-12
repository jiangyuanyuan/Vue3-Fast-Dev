import { createI18n } from 'vue-i18n';
import ZH from './zh-CN.js';
import EN from './en-US.js';


const messages = {
  'zh-CN': { ...ZH  },
  'en-US': { ...EN  }
};

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'zh-CN',
  messages
});
export default i18n;
