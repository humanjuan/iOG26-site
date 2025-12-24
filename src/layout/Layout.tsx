import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { injectJSONLD, removeJSONLD, setOgImage, setTwitterCard } from '@/seo/seo';
import { BASE_URL, BRAND_NAME, ORG_NAME, CREATOR_NAME, DEFAULT_OG_IMAGE, SOCIAL_LINKS } from '@/seo/constants';

const Layout = () => {
    useEffect(() => {
        // Base social meta defaults
        setTwitterCard('summary_large_image');
        setOgImage(DEFAULT_OG_IMAGE);

        // Organization JSON-LD
        injectJSONLD('ld-org', {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: ORG_NAME,
            url: BASE_URL,
            logo: `${BASE_URL}/logo.webp`,
            sameAs: [
                SOCIAL_LINKS.website,
                SOCIAL_LINKS.github,
                SOCIAL_LINKS.x,
                SOCIAL_LINKS.linkedIn,
            ].filter(Boolean),
            founder: CREATOR_NAME,
        });

        // WebSite JSON-LD with SearchAction (placeholder target)
        injectJSONLD('ld-website', {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: BRAND_NAME,
            url: BASE_URL,
            potentialAction: {
                '@type': 'SearchAction',
                target: `${BASE_URL}/?q={search_term_string}`,
                'query-input': 'required name=search_term_string'
            }
        });

        return () => {
            removeJSONLD('ld-org');
            removeJSONLD('ld-website');
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
            <Outlet/>
        </div>
    );
};

export default Layout;