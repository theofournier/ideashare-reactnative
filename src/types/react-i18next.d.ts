import { resources } from '../intl/i18n';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof resources['en'];
  }
}
