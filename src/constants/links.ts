export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.humanjuan.iog26';
export const GITHUB_URL = 'https://github.com/humanjuan/iOG26';
export const BUY_ME_A_COFFEE_URL = 'https://buymeacoffee.com/humanjuan';

export type ExternalLinkKey = 'googlePlay' | 'github' | 'buyMeACoffee';

export const EXTERNAL_LINKS: Record<ExternalLinkKey, string> = {
  googlePlay: GOOGLE_PLAY_URL,
  github: GITHUB_URL,
  buyMeACoffee: BUY_ME_A_COFFEE_URL,
};
