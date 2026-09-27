/* =========================================================================
   ABOUT PAGE — CONTENT CONFIG
   -------------------------------------------------------------------------
   This is the ONLY file you need to edit to change any text or image on the
   About Us page. Nothing here is wired to layout logic — just edit the
   strings, arrays and image paths below and the page updates.

   • Images: use a path under /public (e.g. '/images/projects/xxx/hero.jpg')
     or paste any full https:// image URL.
   • Team photos: leave `image` empty ('') to show a clean initials avatar,
     or point it at a photo you add under /public/images/team/.
   • Multi-line body copy: each array entry becomes its own paragraph.
   ========================================================================= */

export interface AboutValue {
  title: string;
  text: string;
}

export interface AboutTeamMember {
  name: string;
  role: string;
  /** Small pills shown under the name (qualifications, experience, etc.). */
  credentials: string[];
  /** Each string is a paragraph. */
  bio: string[];
  /** Photo path, or '' to use an initials avatar. */
  image: string;
  linkedin?: string;
}

export interface AboutContent {
  hero: {
    eyebrow: string;
    /** Each string is a line in the big animated headline. */
    title: string[];
    tagline: string;
    image: string;
    imageAlt: string;
  };
  studio: {
    eyebrow: string;
    title: string[];
    ghost: string;
    lead: string;
    body: string[];
    disciplines: string[];
    image: string;
    imageAlt: string;
  };
  philosophy: {
    eyebrow: string;
    title: string[];
    ghost: string;
    paragraphs: string[];
    images: { src: string; alt: string }[];
  };
  vision: {
    eyebrow: string;
    ghost: string;
    statement: string;
    image: string;
    imageAlt: string;
  };
  values: {
    eyebrow: string;
    intro: string;
    items: AboutValue[];
  };
  team: {
    eyebrow: string;
    title: string[];
    ghost: string;
    members: AboutTeamMember[];
  };
  specialist: {
    title: string[];
    ghost: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };
}

export const ABOUT: AboutContent = {
  /* ---------------------------------------------------------------- HERO */
  hero: {
    eyebrow: 'About Casa Kala',
    title: ['We Shape Spaces', 'That Endure'],
    tagline: 'Interior architecture for people, places and possibilities.',
    image: '/images/projects/the-quiet-apartment/hero.jpg',
    imageAlt: 'A warm, light-filled living space designed by Casa Kala',
  },

  /* -------------------------------------------------------------- STUDIO */
  studio: {
    eyebrow: 'Who We Are',
    title: ['The Studio'],
    ghost: 'Studio',
    lead: 'Casa Kala is a Dubai-based interior design and turnkey studio crafting refined residential, commercial and hospitality spaces.',
    body: [
      'From first concept to final handover, we design and deliver in-house — interiors, joinery, landscaping and project management under one roof. We produce photoreal 3D visuals so you can experience a space before a single wall is built, then bring it to life with the same team that imagined it.',
      'We are deliberately selective about the work we take on, capping the number of live projects at any one time so every space receives the attention, craft and standard it deserves.',
    ],
    disciplines: [
      'Interior Design',
      'Turnkey Renovation',
      'Joinery & Fit-out',
      'Landscaping',
      'Project Management',
      'Residential & Commercial',
    ],
    image: '/images/projects/serene-curves-residence/hero.jpg',
    imageAlt: 'A curved, cove-lit living room in warm neutral tones',
  },

  /* ---------------------------------------------------------- PHILOSOPHY */
  philosophy: {
    eyebrow: 'How We Think',
    title: ['Our', 'Philosophy'],
    ghost: 'Philosophy',
    paragraphs: [
      'We are driven by a simple belief: great design should feel effortless. Every project is built on service, honesty and craft — meeting and surpassing what our clients expect, whatever the scale.',
      'That principle runs through everything we do. We conduct our work in line with a clear vision and a set of core values, so that what Casa Kala stands for is consistent in every space we touch.',
    ],
    images: [
      {
        src: '/images/projects/courtyard-house/hero.jpg',
        alt: 'A dining space washed in warm courtyard light',
      },
      {
        src: '/images/projects/grand-palazzo-villa/2.jpg',
        alt: 'A formal living room with refined material detailing',
      },
    ],
  },

  /* -------------------------------------------------------------- VISION */
  vision: {
    eyebrow: 'Our Vision',
    ghost: 'Vision & Values',
    statement:
      'To help our clients shape spaces that reflect who they are — and to become the studio the region trusts first for thoughtful, enduring interiors.',
    image: '/images/projects/verde-aesthetics-clinic/1.jpg',
    imageAlt: 'Designers reviewing material samples over a workspace',
  },

  /* -------------------------------------------------------------- VALUES */
  values: {
    eyebrow: 'Our Values',
    intro:
      'Our values rest on six guiding principles. They underpin everything we do — as a studio and as individuals.',
    items: [
      {
        title: 'Craft',
        text: 'An obsession with the details you feel more than see.',
      },
      {
        title: 'Excellence',
        text: 'We hold every element of our work to an exacting standard.',
      },
      {
        title: 'Integrity',
        text: 'We value ethical conduct — as individuals and as a studio.',
      },
      {
        title: 'Innovation',
        text: 'We bring original ideas into considered, buildable reality.',
      },
      {
        title: 'People',
        text: 'We design for the people who live and work in our spaces.',
      },
      {
        title: 'Sustainability',
        text: 'Choices that respect people and place, for the long term.',
      },
    ],
  },

  /* ---------------------------------------------------------------- TEAM */
  team: {
    eyebrow: 'The People',
    title: ['Management', 'Team'],
    ghost: 'Team',
    // Replace names, roles, bios and photos with your real team details.
    members: [
      {
        name: 'Founder & Creative Director',
        role: 'Founder & Creative Director',
        credentials: ['15+ Yrs Exp', 'Interior Architecture'],
        bio: [
          'As Founder & Creative Director, they set the design direction of the studio and safeguard its standard — pairing a strong creative vision with disciplined, hands-on delivery.',
          'Under their leadership, Casa Kala has designed and delivered turnkey residential, hospitality and commercial spaces across the UAE, each reflecting the studio’s commitment to craft and considered detail.',
        ],
        image: '',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Design Director',
        role: 'Design Director',
        credentials: ['Interiors', 'FF&E'],
        bio: [
          'The Design Director leads the studio’s creative output — from concept and space planning to material palettes, joinery detailing and the final styling that gives each project its character.',
          'They translate a client’s brief and personality into a coherent design language, ensuring every room feels intentional, warm and uniquely theirs.',
        ],
        image: '',
        linkedin: 'https://linkedin.com',
      },
      {
        name: 'Project & Operations Director',
        role: 'Project & Operations Director',
        credentials: ['Delivery', 'Turnkey'],
        bio: [
          'The Project & Operations Director is the engine behind delivery — turning concepts into flawlessly executed spaces through precise planning, procurement and site management.',
          'They oversee end-to-end execution, resolving on-ground complexity while upholding the quality, timelines and finishing standards that define Casa Kala.',
        ],
        image: '',
        linkedin: 'https://linkedin.com',
      },
    ],
  },

  /* ---------------------------------------------------------- SPECIALIST */
  specialist: {
    title: ['The', 'Specialists'],
    ghost: 'Specialists',
    subtitle:
      'Meet the team behind the work — the designers, makers and managers who bring your interiors to life.',
    image: '/images/projects/classic-bedroom-suites/hero.jpg',
    imageAlt: 'The Casa Kala team collaborating on a project',
  },
};
