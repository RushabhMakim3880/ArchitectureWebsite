export interface NewsItem {
    id: number;
    title: string;
    date: string;
    image: string;
    summary: string;
    content: string;
}

export const NEWS: NewsItem[] = [
    {
        id: 1,
        title: 'Designing for the Future: Interview with AD',
        date: 'Aug 2023',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop',
        summary: 'Our principal architect discusses the future of sustainable living.',
        content: `
            <p>In a recent interview with Architectural Digest, we explored the evolving landscape of residential architecture. The conversation touched upon the critical need for sustainable practices that go beyond mere energy efficiency.</p>
            <p>"Architecture must breathe," says our principal. "It is not enough to build walls; we must build ecosystems that interact with their environment."</p>
            <p>The interview highlights our recent project, The Leaf House, as a prime example of this philosophy, where the boundary between inside and outside is purposefully blurred to reduce reliance on artificial climate control.</p>
        `
    },
    {
        id: 2,
        title: 'Sustainable Practices in Modern Homes',
        date: 'Jul 2023',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop',
        summary: 'Exploring how modern homes can reduce their carbon footprint.',
        content: `
            <p>Sustainability is no longer a buzzword; it is a necessity. In this article, we break down five key strategies we employ in every residential project to ensure minimal environmental impact.</p>
            <ul>
                <li>Passive Solar Design</li>
                <li>Rainwater Harvesting Systems</li>
                <li>Use of Locally Sourced Materials</li>
                <li>Smart Energy Management</li>
                <li>Greywater Recycling</li>
            </ul>
            <p>By integrating these systems from the conceptual stage, we create homes that are not only beautiful but also responsible.</p>
        `
    },
    {
        id: 3,
        title: 'Leaf House featured in Dezeen',
        date: 'Jun 2023',
        image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=800&auto=format&fit=crop',
        summary: 'Our award-winning project gets global recognition.',
        content: `
            <p>We are thrilled to announce that The Leaf House has been featured in Dezeen, one of the world's most popular architecture and design magazines.</p>
            <p>The feature praises the project's innovative roof structure, which mimics the veins of a leaf to channel rainwater and provide shade. The article includes a full gallery of images and an exclusive video tour of the property.</p>
            <p>This recognition validates our team's hard work and dedication to pushing the boundaries of tropical modernism.</p>
        `
    },
    {
        id: 4,
        title: 'ABC Architect wins National Award',
        date: 'May 2023',
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop',
        summary: 'Recognized for excellence in institutional architecture.',
        content: `
            <p>We are honored to receive the National Award for Excellence in Architecture for our work on the City Library project.</p>
            <p>The jury commended the project for its "sensitive urban integration and creation of vibrant public spaces." The library has become a community hub, hosting over 500 visitors daily.</p>
            <p>We dedicate this award to our clients and partners who believed in our vision of a library as more than just a repository of books, but as a space for connection.</p>
        `
    },
];
