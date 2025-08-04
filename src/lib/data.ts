
import { navLinks as navLinksWithIcons, services, industries, portfolio, blogPosts, homePageFaqs } from '@/lib/constants';
import { type NavLink } from './types';

// A version of navlinks without the icon components for use in non-tsx files if needed.
export const navLinks: NavLink[] = navLinksWithIcons.map(link => {
    if (link.items) {
        return {
            ...link,
            items: link.items.map(({ icon, ...item }) => item)
        };
    }
    return link;
});

export { services, industries, portfolio, blogPosts, homePageFaqs };
