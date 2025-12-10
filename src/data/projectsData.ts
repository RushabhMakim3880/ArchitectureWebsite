export interface Project {
    id: number;
    title: string;
    category: string; // Matches the categories in CategoryList
    location: string;
    year: string;
    area: string;
    client: string;
    image: string;
    description: string;
}

export const CATEGORIES_INFO: Record<string, string> = {
    'Private Homes': 'Our residential projects are designed to be personal sanctuaries, blending privacy with openness to nature.',
    'Public Buildings': 'We design public spaces that foster community interaction and serve as landmarks of civic pride.',
    'Civic Projects': 'Architecture for the people, focusing on accessibility, sustainability, and cultural relevance.',
    'Interiors': 'Interior spaces that harmonize with the architectural shell, prioritizing comfort and material honesty.',
    'Health & Wellness': 'Spaces designed to heal and rejuvenate, integrating natural elements to promote well-being.',
    'Hospitality': 'Creating memorable guest experiences through immersive and culturally rooted design.',
    'Education': 'Learning environments that inspire curiosity and collaboration among students and educators.',
    'Offices': 'Modern workspaces that boost productivity and collaboration while ensuring employee well-being.',
    'Adaptive Reuse': 'Breathing new life into old structures, preserving history while meeting contemporary needs.',
};

export const PROJECTS: Project[] = [
    // Private Homes
    {
        id: 1,
        title: 'Leaf House',
        category: 'Private Homes',
        location: 'Alibaug, India',
        year: '2020',
        area: '8,000 sq.ft',
        client: 'Private',
        image: '/images/categories/private_home.jpg',
        description: 'The Leaf House is a retreat that merges seamlessly with its tropical surroundings. The roof structure mimics the veins of a leaf, channeling rainwater and providing deep shade.'
    },
    {
        id: 2,
        title: 'Boat Club Apartments',
        category: 'Private Homes',
        location: 'Chennai, India',
        year: '2021',
        area: '25,000 sq.ft',
        client: 'Private',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200',
        description: 'Luxury apartments designed to offer the spaciousness of a villa with the convenience of urban living. Large terraces act as hanging gardens.'
    },
    // Hospitality
    {
        id: 3,
        title: 'The Rain Tree Hotel',
        category: 'Hospitality',
        location: 'Chennai, India',
        year: '2023',
        area: '45,000 sq.ft',
        client: 'Rain Tree Hotels',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200',
        description: 'A boutique hotel that celebrates local culture. The design integrates traditional materials with modern comforts.'
    },
    {
        id: 4,
        title: 'Eco Resort Coorg',
        category: 'Hospitality',
        location: 'Coorg, India',
        year: '2022',
        area: '12 Acres',
        client: 'EcoStays',
        image: 'https://images.unsplash.com/photo-1571896349842-6e53ce41e86a?q=80&w=1200',
        description: 'An eco-sensitive resort built with minimal impact on the surrounding coffee plantation. The cottages are elevated to preserve the forest floor.'
    },
    // Workspaces / Offices
    {
        id: 5,
        title: 'Nirvana Film Studio',
        category: 'Offices',
        location: 'Bangalore, India',
        year: '2022',
        area: '12,000 sq.ft',
        client: 'Nirvana Films',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200',
        description: 'A creative workspace designed to foster collaboration. The central courtyard acts as the heart of the studio, bringing in light and air.'
    },
    // Education
    {
        id: 6,
        title: 'City Library',
        category: 'Education',
        location: 'Pune, India',
        year: '2019',
        area: '30,000 sq.ft',
        client: 'Municipal Corp',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200',
        description: 'A modern library designed as a community hub. The reading spaces are flooded with soft northern light, ideal for study.'
    },
    // Interiors
    {
        id: 7,
        title: 'Urban Loft',
        category: 'Interiors',
        location: 'Mumbai, India',
        year: '2021',
        area: '3,500 sq.ft',
        client: 'Private',
        image: '/images/categories/interiors.jpg',
        description: 'An industrial-chic loft in the heart of Mumbai. Existing structural elements were exposed and celebrated.'
    },
    // Health & Wellness
    {
        id: 8,
        title: 'Serenity Spa',
        category: 'Health & Wellness',
        location: 'Kerala, India',
        year: '2023',
        area: '5,000 sq.ft',
        client: 'AyurHealth',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200',
        description: 'A wellness center inspired by traditional architecture. Water bodies and courtyards create a calming atmosphere.'
    },
    // Civic
    {
        id: 9,
        title: 'Community Center',
        category: 'Civic Projects',
        location: 'Ahmedabad, India',
        year: '2020',
        area: '15,000 sq.ft',
        client: 'City Council',
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200',
        description: 'A multi-purpose community center that serves as a gathering space for events and recreation.'
    },
    // Public Buildings
    {
        id: 10,
        title: 'Museum of Modern Art',
        category: 'Public Buildings',
        location: 'Delhi, India',
        year: '2019',
        area: '50,000 sq.ft',
        client: 'Govt. of India',
        image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=1200',
        description: 'A monolithic structure designed to house contemporary Indian art. The facade interacts with the changing daylight.'
    },
    // Adaptive Reuse
    {
        id: 11,
        title: 'Old Mill Warehouse',
        category: 'Adaptive Reuse',
        location: 'Mumbai, India',
        year: '2021',
        area: '10,000 sq.ft',
        client: 'Creative Commons',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200',
        description: 'Converting a century-old textile mill into a vibrant coworking space, preserving the original brickwork and trusses.'
    },
    {
        id: 12,
        title: 'Minimalist Office',
        category: 'Offices', // Mapped to Workspace
        location: 'Gurgaon, India',
        year: '2023',
        area: '8,000 sq.ft',
        client: 'TechStart',
        image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200',
        description: 'A clean, distraction-free environment designed for a high-growth tech startup.'
    },
    {
        id: 13,
        title: 'Boutique Showroom',
        category: 'Interiors', // Mapped to Retail
        location: 'Delhi, India',
        year: '2022',
        area: '2,000 sq.ft',
        client: 'Fashion House',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200',
        description: 'A gallery-like retail space where the clothes are treated as art objects.'
    }
];

export const getProjectsByCategory = (category: string) => {
    if (category === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === category);
};

export const getCategoryDescription = (category: string) => {
    return CATEGORIES_INFO[category] || 'Explore our portfolio of diverse projects.';
};
