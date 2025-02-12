import { Config } from './types';

export const config: Config = {
  footer: {
    id: 'footer',
    info: 'MESSAGE US. Get in touch below. Ask any question or get a free quote',
    logo: {
      alt: 'logo',
      src: '/path/to/logo.png',
    },
    copyright: 'All Rights Reserved',
    newsletter: {
      button: {
        label: 'Subscribe',
        action: '#',
      },
      heading: 'Subscribe to Our Newsletter',
      placeholder: 'Enter your email',
    },
    quickLinks: [
      {
        id: 2,
        link: '#about',
        label: 'About',
      },
      {
        id: 3,
        link: '#services',
        label: 'Services',
      },
      {
        id: 4,
        link: '#blog',
        label: 'Blog',
      },
      {
        id: 5,
        link: '#quote',
        label: 'Quote',
      },
    ],
    companyInfo: {
      name: 'Afroofingand Sidinginc',
      email: 'afroofingandsidingc.2021@gmail.com',
      phone: '510-934-6098',
      address: 'San Pablo, California',
    },
    companyName: 'Afroofingand Sidinginc',
    socialLinks: {
      twitter: 'https://twitter.com/afroofing',
      facebook: 'https://www.facebook.com/profile.php?id=100095237134959',
      instagram: 'https://instagram.com/afroofing',
      pinterest: 'https://pinterest.com/afroofing',
    },
  },
  header: {
    navbar: {
      logo: {
        alt: 'logo',
        src: '/path/to/logo.png',
      },
      navItems: [
        {
          id: 1,
          link: '#home',
          label: 'Home',
        },
        {
          id: 2,
          link: '#about',
          label: 'About',
        },
        {
          id: 3,
          link: '#services',
          label: 'Services',
        },
        {
          id: 4,
          link: '#blog',
          label: 'Blog',
        },
        {
          id: 5,
          link: '#quote',
          label: 'Quote',
        },
      ],
      companyName: 'Afroofingand Sidinginc',
      contactButton: {
        link: '#contact',
        label: 'Contact Our Experts',
      },
    },
    topBar: {
      heading: 'Afroofingand Sidinginc',
      socialLinks: {
        twitter: 'https://twitter.com/afroofing',
        facebook: 'https://www.facebook.com/profile.php?id=100095237134959',
        instagram: 'https://instagram.com/afroofing',
        pinterest: 'https://pinterest.com/afroofing',
      },
    },
  },
  faqSection: {
    id: 'faq',
    faqs: [
      {
        answer:
          'Yes, we have extensive experience in both residential and commercial roofing. Whether you need a new roof for your home or your business facility, we can provide the expertise and materials required to ensure a durable and high-quality roof.',
        question: 'Do you offer both residential and commercial roofing services?',
      },
      {
        answer:
          'We work with a variety of roofing materials including asphalt shingles, metal roofing, flat roofing, tile, and more. We can help you choose the best material based on your needs, budget, and the architectural style of your property.',
        question: 'What types of roofing materials do you work with?',
      },
      {
        answer:
          'You can request a roofing inspection or estimate by contacting us through our website, phone, or email. We will schedule an appointment to assess your roofing needs and provide a detailed estimate for the work required.',
        question: 'How do I request a roofing inspection or estimate?',
      },
      {
        answer:
          'The cost of a roofing project is influenced by several factors including the size of the roof, the type of materials used, the complexity of the roof design, labor costs, and any additional features such as skylights or insulation.',
        question: 'What factors influence the cost of a roofing project?',
      },
      {
        answer:
          'The duration of a roofing project depends on the size and complexity of the roof. On average, a residential roofing project can take anywhere from a few days to a week. Commercial projects may take longer depending on the scope and scale.',
        question: 'How long does a typical roofing project take to complete?',
      },
    ],
    heading: 'Most Asked Roofing Questions',
    subheading: 'Your Questions Answered',
  },
  heroSection: {
    id: 'home',
    label: 'Your Top Choice for Quality and Reliability!',
    rating: {
      stars: 5,
      title: '500+ Satisfied Customers',
      users: ['/images/user1.jpg', '/images/user2.jpg', '/images/user3.jpg'],
    },
    heading: 'Expert Roofing Services in San Pablo, California',
    heroImage: {
      alt: '',
      src: '/images/hero.jpg',
    },
    subheading: '24/7 Emergency Service Available',
    callToAction: {
      link: '#services',
      label: 'Our Services',
    },
  },
  aboutSection: {
    id: 'about',
    info: 'Afroofingand Sidinginc offers a variety of roofing services, including residential, commercial, and industrial roofing. We specialize in shingles, flat, and specialty roofing. The company provides 24-hour emergency services, guarantees all work, and offers a roof maintenance program.',
    label: 'About Us',
    heading: 'Your Trusted Experts',
    aboutImage: {
      alt: 'about us',
      src: '/images/about.jpg',
    },
    callToAction: {
      link: '/call',
      label: 'Call Today!',
      phone: '510-123-4567',
    },
  },
  quoteSection: {
    id: 'quote',
    heading: 'Get Your Free Roofing Quote',
    subheading:
      'Just fill out your info and we will get back to you right away to schedule a time to set up a meeting.',
    callToAction: {
      link: '#',
      label: 'Get a Quote',
    },
  },
  statsSection: {
    id: 'reasons',
    stats: [
      {
        label: 'Years in Business',
        value: '15+',
      },
      {
        label: 'Happy Clients',
        value: '500+',
      },
      {
        label: 'Roofs Installed',
        value: '820+',
      },
    ],
    heading: 'Why Choose Afroofingand Sidinginc',
    subheading: 'Why choose us for your roofing needs?',
  },
  contactSection: {
    id: 'contact',
    heading: 'Contact Us',
    subheading: 'Reach Out Today',
    callToAction: {
      link: '#',
      label: 'Submit',
    },
  },
  gallerySection: {
    id: 'gallery',
    label: 'Photo Gallery',
    images: [
      {
        alt: 'gallery image',
        src: 'https://gateway.pinata.cloud/ipfs/QmPK5EGjzpxbBbuwjxAffi7vBBT3M4dD5XT1n79BUPPQUB',
      },
      {
        alt: 'gallery image',
        src: '/images/gallery2.jpg',
      },
      {
        alt: 'gallery image',
        src: 'https://gateway.pinata.cloud/ipfs/QmYpiFBFN2WHpqcXLRH3RNf1aJQcouzeci5oNQidbnLDR1',
      },
      {
        alt: 'gallery image',
        src: '/images/gallery1.jpg',
      },
      {
        alt: 'gallery image',
        src: 'https://gateway.pinata.cloud/ipfs/Qmbyh9k9yMFfqpYyen2rqQFt16hqYsEQQiWaZdJpjJqE8Z',
      },
      {
        alt: 'gallery image',
        src: 'https://gateway.pinata.cloud/ipfs/QmdbVCafqRa319Gn3jGX3FNCw6dd5K7hqW4TAdfJYUjVTf',
      },
    ],
    heading: 'See Our Work',
    subheading: 'A Showcase of Quality and Craftsmanship',
  },
  servicesSection: {
    id: 'services',
    label: 'Services',
    heading: 'Our Featured Roofing Services',
    services: [
      {
        id: '1',
        image: '/images/service3.jpg',
        title: 'Roof installation and replacement',
        subtitle: 'Expert solutions for new roofs or replacements',
        description:
          'Ensure your home is well-protected with our expert roof installation and replacement services. Whether you’re building a new home or upgrading an aging roof, we provide durable, weather-resistant roofing solutions that blend functionality with aesthetics. Trust us to keep your home safe and secure for years to come.',
      },
      {
        id: '2',
        image: '/images/service2.jpg',
        title: 'Roof repairs',
        subtitle: 'Reliable fixes to restore your roof’s integrity',
        description:
          'From minor leaks to significant structural damage, our comprehensive roof repair services are designed to address all your roofing concerns quickly and efficiently. Our experienced team uses high-quality materials and proven techniques to restore the integrity of your roof, ensuring it stands strong against the elements.',
      },
      {
        id: '3',
        image: '/images/service1.jpg',
        title: 'Roof inspections and maintenance',
        subtitle: 'Preventive care to extend your roof’s lifespan',
        description:
          'Prolong the life of your roof with our detailed inspection and maintenance services. Our thorough evaluations identify potential issues before they become costly repairs, while our preventive maintenance solutions ensure your roof stays in peak condition, providing peace of mind and lasting protection for your home.',
      },
    ],
    callToAction: {
      link: '/call',
      label: 'Call Today!',
      phone: '510-123-4567',
    },
  },
  locationsSection: {
    id: 'locations',
    label: 'Areas',
    heading: 'Areas We Serve',
    locations: [
      {
        name: 'San Pablo',
        latitude: 37.9622,
        longitude: -122.3456,
      },
      {
        name: 'Richmond',
        latitude: 37.9358,
        longitude: -122.3478,
      },
      {
        name: 'El Cerrito',
        latitude: 37.9158,
        longitude: -122.3117,
      },
      {
        name: 'Pinole',
        latitude: 38.0044,
        longitude: -122.2989,
      },
    ],
    subheading: 'Servicing San Pablo and surrounding areas.',
    initialView: {
      zoom: 10,
      latitude: 37.9622,
      longitude: -122.3456,
    },
  },
  beforeAfterSection: {
    id: 'beforeAfter',
    label: 'Before & After',
    heading: 'See How We Change Your Home',
    results: [
      {
        afterImg: '/images/after1.jpg',
        beforeImg: '/images/before1.jpg',
      },

      {
        afterImg: 'https://gateway.pinata.cloud/ipfs/QmeMFi6sqKYDNkSBmKSxh6bPChmL3BY3LPKuvYEHEw1Z7B',
        beforeImg: 'https://gateway.pinata.cloud/ipfs/QmVMX5WhzZCSu1kqRZDvCGgA67yRhY1tVoSFTLvCieP9Bi',
      },
      {
        afterImg: 'https://gateway.pinata.cloud/ipfs/Qmdimd8otKKiPzL82uLwEzbivewX8HtnfyMBFw6hXLWjqa',
        beforeImg: 'https://gateway.pinata.cloud/ipfs/QmfJmxwa6Gn6g2ZXun3LW5HibcvygQwjoTiyCXzadAW63N',
      },
      {
        afterImg: 'https://gateway.pinata.cloud/ipfs/QmduYRMacDvV7c775jLUDTVF2UguFGW8kJaZ7e6e76jSKF',
        beforeImg: 'https://gateway.pinata.cloud/ipfs/Qma5cStAAzxxpWR3R2L86RHuKf3n77DqwMXjRnSTuQ5RoX',
      },
    ],
    subheading: 'With some of our before and after images',
  },
  testimonialsSection: {
    id: 'testimonials',
    heading: 'Our Customers Love Us',
    testimonials: [
      {
        image: '/images/user1.jpg',
        author: 'Alice Baker',
        detail:
          'Afroofingand Sidinginc did an excellent job on my roof. The team was professional and they completed the job quickly and efficiently. Highly recommended!',
        companyName: 'Google',
      },
      {
        image: '/images/user2.jpg',
        author: 'Tom Olson',
        detail:
          'The quality of work from Afroofingand Sidinginc is outstanding. I appreciate their attention to detail and commitment to ensuring customer satisfaction.',
        companyName: 'Yelp',
      },
      {
        image: '/images/user3.jpg',
        author: 'Diane Ray',
        detail:
          'From start to finish, the service was top-notch. Afroofingand Sidinginc met all our expectations and more!',
        companyName: 'HomeAdvisor',
      },
      {
        image: '/images/user1.jpg',
        author: 'Sam Wilson',
        detail: 'Professional, courteous, and the results speak for themselves. My roof looks fantastic!',
        companyName: 'Facebook',
      },
      {
        image: '/images/user2.jpg',
        author: 'Emma Stone',
        detail:
          "If you're seeking quality roofing services, look no further than Afroofingand Sidinginc. Extremely happy with their work.",
        companyName: "Angie's List",
      },
    ],
  },
};
