import { person, newsletter, social, home, about, blog, work, gallery, contact, hobbies } from './content';
import { createI18nContent } from './content-i18n';
import { i18n } from './config';

const renderContent = (t) => {
    if ( i18n ) {
        return { ...createI18nContent(t), hobbies };
    } else {
        return {
            person,
            social,
            newsletter,
            contact,
            home,
            about,
            blog,
            work,
            gallery,
            hobbies
        }
    }
};

export { renderContent };