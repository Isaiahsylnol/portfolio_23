// src/data/projectsData.js

export const projects = {
    petsnpals: {
      name: "Pets N Pals",
      tools: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
      description:
        "Aimed at empowering users to effortlessly discover a wealth of curated pet-related insights. The front-end and back-end technologies offer a streamlined experience. From the latest pet care tips and curated products to enlightening articles, the platform provides curated information for pet enthusiasts.",
      github: "https://github.com/Isaiahsylnol/pets_n_pals",
      demo: "https://test-frontend-lake.vercel.app/shop",
      images: [
        {
          src: "petsnpals_figma_2.png?updatedAt=1716899028194",
          alt: "News section and mobile cart screen",
        },
        {
          src: "petsnpals_figma.png?updatedAt=1716899044459",
          alt: "Products page and product detail screen",
        },
        {
          src: "petsnpals_figma_3.png?updatedAt=1716899060582",
          alt: "Pet services page and blog detail screen",
        },
      ],
    },
    movieRentalApp: {
      name: "Movie Rental Site",
      tools: ["React", "GraphQL", "MongoDB", "Tailwind CSS"],
      description:
        "This platform offers a movie rental experience, where users can access a wide range of films. GraphQL efficiently manages movie data retrieval, while Express and MongoDB provide a robust backend. Tailwind CSS ensures responsive design.",
      github: "https://github.com/Isaiahsylnol/rentalStoreWebApp",
      demo: "https://movie-app-2-13fb90b27d3b.herokuapp.com/",
      images: [
        {
          src: "figma_1.png?updatedAt=1683031736586",
          alt: "Landing page and movie detail page",
        },
        {
          src: "figma_2.png?updatedAt=1683031810966",
          alt: "Movie list page",
        },
        {
          src: "figma_3.png?updatedAt=1683031860728",
          alt: "Feature film secion and profile screen",
        },
        {
          src: "figma_4.png?updatedAt=1683031965710",
          alt: "User login screen",
        },
      ],
    },
    product: {
      name: "Product Management System",
      tools: ["Ionic", "Angular", "Database", "TypeScript", "Tailwind CSS"],
      description:
        "This app enables users to easily access information on existing products by SKU, assign products to bunk locations, create list and perform other essential tasks related to product management.",
      github: "https://github.com/Isaiahsylnol/product-manager-clone",
      images: [
        {
          src: "product_manager_1.png?updatedAt=1683061523238",
          alt: "Product Inquiry and product detail screens",
        },
        {
          src: "product_manager_2.png?updatedAt=1683061792511",
          alt: "Application hamburger menu and quick route selections screens",
        },
        {
          src: "product_manager_3.png?updatedAt=1683061926477",
          alt: "Maintain location and add product to location screens",
        },
      ],
      status: true,
    },
    atmosphereSite: {
      name: "Atmospere Site",
      tools: ["HTML5", "CSS3"],
      description:
        "Designed HTML5 and CSS app showcasing NASA's planetary media and atmospheric layers. Immersive interface offers educational exploration of celestial phenomena. Engaging visuals and interactive features provide insights into atmospheric science and celestial beauty.",
      github: "https://github.com/Isaiahsylnol/Atmosphere-site",
      demo: "https://isaiahsylnol.github.io/Atmosphere-site/",
      images: [
        {
          src: "atmosphere_1.jpg?updatedAt=1683033041284",
          alt: "Atmosphere layers page",
        },
        {
          src: "atmosphere_2.png?updatedAt=1683033129859",
          alt: "Media and sources page",
        },
        {
          src: "atmosphere_3.png?updatedAt=1683033185007",
          alt: "Landing page",
        },
      ],
    },
  };
  