import { ContextApi } from '@pancakeswap/localization'
import { FooterLinkType } from '@pancakeswap/uikit'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Documentation'),
        href: 'https://docs.planetopiaswap.xyz/contact-us',
        // isHighlighted: true,
      },
      // {
      //   label: t('Brand'),
      //   href: 'https://docs.planetopiaswap.xyz/brand',
      // },
      {
        label: t('Medium'),
        href: 'https://medium.com/pancakeswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.planetopiaswap.xyz/contact-us/telegram',
      },
      // {
      //   label: t('Litepaper'),
      //   href: 'https://v2litepaper.planetopiaswap.xyz/',
      // },
      // {
      //   label: '—',
      // },
      // {
      //   label: t('Online Store'),
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.planetopiaswap.xyz/contact-us/customer-support',
      },
      // {
      //   label: t('Troubleshooting'),
      //   href: 'https://docs.planetopiaswap.xyz/help/troubleshooting',
      // },
      {
        label: t('Guides'),
        href: 'https://docs.planetopiaswap.xyz/get-started',
      },
    ],
  },
  // {
  //   label: t('Developers'),
  //   items: [
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/pancakeswap',
  //     },
  //     {
  //       label: t('Documentation'),
  //       href: 'https://docs.planetopiaswap.xyz',
  //     },
  //     {
  //       label: t('Bug Bounty'),
  //       href: 'https://docs.planetopiaswap.xyz/code/bug-bounty',
  //     },
  //     {
  //       label: t('Audits'),
  //       href: 'https://docs.planetopiaswap.xyz/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
  //     },
  //     {
  //       label: t('Careers'),
  //       href: 'https://docs.planetopiaswap.xyz/hiring/become-a-chef',
  //     },
  //   ],
  // },
]