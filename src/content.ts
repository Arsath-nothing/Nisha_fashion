// Edit this file to update website copy and image paths.
// Add local images to public/images/ and reference them as /images/file-name.jpg.
export const siteContent = {
  brand: {
    name: 'Nisha',
    category: 'Fashions',
    tagline: 'Designed for You. Crafted for Excellence.',
  },
  navigation: [
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Industries', href: '#industries' },
    { label: 'Our process', href: '#process' },
    { label: 'Gallery', href: '#gallery' },
  ],
  images: {
    hero: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=90',
    about:
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1100&q=85',
    industries:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1300&q=85',
  },
  hero: {
    eyebrow: 'MADE TO FIT YOUR BUSINESS',
    titleStart: 'Custom uniforms.',
    titleEmphasis: 'Exceptional',
    titleEnd: 'quality.',
    description:
      'Your garment manufacturing partner for schools, institutions, businesses, and industries. Thoughtful design, reliable production, made around you.',
    quoteButton: 'Request a quote',
    productsButton: 'Explore products',
    scrollLabel: 'SCROLL TO DISCOVER',
    imageAlt: 'Careful garment making in a tailoring studio',
    index: '01 — 04',
  },
  brandStrip: [
    'MADE FOR THE WAY YOU WORK',
    'DESIGNED FOR YOU',
    'CRAFTED FOR EXCELLENCE',
    'MADE FOR THE WAY YOU WORK',
  ],
  about: {
    eyebrow: 'A PARTNER IN EVERY STITCH',
    headingStart: 'Good uniforms',
    headingBeforeEmphasis: 'make a ',
    headingEmphasis: 'team.',
    imageAlt: 'A considered, well-made outfit',
    imageCaption: 'Made with care.',
    imageCaptionEmphasis: 'Made for you.',
    imageIndex: 'N° 01 / THE MAKING',
    description:
      'Nisha Fashions creates customised garments and uniforms for teams that need clothing to work as hard as they do. From the first fabric choice to the final finish, we shape every order around your requirements.',
    features: [
      {
        title: 'Designed around you',
        description: 'Custom styles, sizing, fabric, and colour choices.',
      },
      {
        title: 'Made for your team',
        description: 'Bulk orders with attention to stitching and finish.',
      },
      {
        title: 'Finished your way',
        description: 'Branding and embroidery options can be discussed.',
      },
    ],
    link: 'Discover how we work',
  },
  products: {
    eyebrow: 'MADE FOR EVERY DAY',
    headingStart: 'Uniforms for ',
    headingEmphasis: 'every role.',
    description:
      'From the classroom to the workplace, explore garments made to match your people, purpose, and brief.',
    enquireLabel: 'Enquire now',
    items: [
      {
        number: '01',
        title: 'School uniforms',
        description: 'Everyday essentials designed for comfort, movement, and lasting wear.',
        image:
          'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=880&q=85',
        alt: 'Students wearing coordinated school clothing',
      },
      {
        number: '02',
        title: 'College uniforms',
        description: 'A considered look for campuses, departments, and student communities.',
        image:
          'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=880&q=85',
        alt: 'Students together on a college campus',
      },
      {
        number: '03',
        title: 'Corporate uniforms',
        description: 'Polished workwear that brings a consistent look to your team.',
        image:
          'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=880&q=85',
        alt: 'Colleagues collaborating in a professional workplace',
      },
      {
        number: '04',
        title: 'Industrial workwear',
        description: 'Practical garments made around the demands of the working day.',
        image:
          'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=880&q=85',
        alt: 'Worker in a production environment',
      },
      {
        number: '05',
        title: 'Healthcare uniforms',
        description: 'Comfort-first scrubs and uniforms for care teams and clinics.',
        image:
          'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=880&q=85',
        alt: 'Healthcare professional in a clinical setting',
      },
      {
        number: '06',
        title: 'Hospitality uniforms',
        description: 'Welcoming, well-finished apparel for service and guest-facing teams.',
        image:
          'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=880&q=85',
        alt: 'Professional hospitality setting',
      },
      {
        number: '07',
        title: 'T-shirts & polos',
        description: 'Custom teamwear for events, everyday use, and brand moments.',
        image:
          'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=880&q=85',
        alt: 'A neatly folded selection of t-shirts',
      },
      {
        number: '08',
        title: 'Shirts & more',
        description: 'Made-to-order shirts, trousers, and garments to suit your brief.',
        image:
          'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=880&q=85',
        alt: 'A carefully tailored shirt',
      },
    ],
  },
  industries: {
    eyebrow: 'WHO WE WORK WITH',
    headingStart: 'One partner.',
    headingEmphasis: 'Many uniforms.',
    description:
      'Different teams have different needs. We work with organisations looking for garments made to suit their people and everyday work.',
    button: 'Tell us about your team',
    items: [
      { title: 'Schools & institutions', detail: 'Uniforms for students and staff.' },
      { title: 'Colleges & universities', detail: 'Coordinated apparel for campus life.' },
      { title: 'Offices & companies', detail: 'A consistent look for your people.' },
      { title: 'Factories & industry', detail: 'Workwear shaped around the job.' },
      { title: 'Hospitals & clinics', detail: 'Comfortable clothing for care teams.' },
      { title: 'Hotels & hospitality', detail: 'Thoughtful uniforms for service teams.' },
    ],
  },
  process: {
    eyebrow: 'SIMPLE BY DESIGN',
    headingStart: 'From first idea',
    headingBeforeEmphasis: 'to ',
    headingEmphasis: 'finished order.',
    description:
      'A clear, collaborative process keeps your order moving from the first conversation to delivery coordination.',
    steps: [
      {
        number: '01',
        title: 'Tell us what you need',
        description:
          'Share your garment type, quantities, timeline, and any design references.',
      },
      {
        number: '02',
        title: 'Choose your details',
        description: 'Discuss available fabrics, colours, sizing, finishing, and branding.',
      },
      {
        number: '03',
        title: 'Review the quote',
        description: 'We’ll confirm the requirements and provide a quote for your order.',
      },
      {
        number: '04',
        title: 'Production & delivery',
        description:
          'Once approved, your order moves into production and delivery coordination.',
      },
    ],
  },
  gallery: {
    eyebrow: 'A CLOSER LOOK',
    headingStart: 'Details make ',
    headingEmphasis: 'the difference.',
    note: 'MATERIAL / MAKING / FINISHING',
    images: [
      {
        image:
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1050&q=85',
        alt: 'Hands carefully stitching a garment',
        label: 'The craft',
      },
      {
        image:
          'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1050&q=85',
        alt: 'A selection of textiles and fabric colours',
        label: 'The materials',
      },
      {
        image:
          'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1050&q=85',
        alt: 'A finished garment, ready to wear',
        label: 'The finish',
      },
    ],
  },
  callToAction: {
    eyebrow: 'YOUR NEXT ORDER STARTS HERE',
    headingStart: "Let's make something",
    headingEmphasis: 'that fits.',
    button: 'Start a conversation',
  },
  contact: {
    eyebrow: 'REQUEST A QUOTE',
    headingStart: 'Tell us about',
    headingEmphasis: 'your order.',
    description:
      'Share a few details and we’ll be ready to discuss your garment, quantity, and requirements.',
    note: 'Not sure where to start? A rough idea of the product and quantity is a great first step.',
    nameLabel: 'Your name',
    namePlaceholder: 'Name',
    emailLabel: 'Work email',
    emailPlaceholder: 'you@company.com',
    organisationLabel: 'Organisation',
    organisationPlaceholder: 'Company or institution',
    categoryLabel: 'Product category',
    categoryPlaceholder: 'Select a category',
    quantityLabel: 'Estimated quantity',
    quantityPlaceholder: 'e.g. 150 pieces',
    detailsLabel: 'Tell us a little more',
    detailsPlaceholder:
      'Garment types, timeline, customisation, or anything else we should know...',
    submitButton: 'Send enquiry',
    requiredNote: 'Fields marked * are required.',
    notConfigured:
      'Quote requests are not configured yet. Set VITE_CONTACT_EMAIL in your .env file.',
    emailOpening: 'Your email app is opening with your quote request.',
  },
  footer: {
    exploreLabel: 'EXPLORE',
    talkLabel: "LET'S TALK",
    aboutLink: 'About us',
    processLink: 'Our process',
    quoteLink: 'Request a quote',
  },
} as const
