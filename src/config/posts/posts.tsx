
export interface PostMetadata {
    id: string;
    title: string;
    date: string;
    highlight: string;
}

const posts: PostMetadata[] = [
    {
        "id": "why-ai-suck",
        "title": "Why AI won't solve your problems",
        "date": "2026-06-28",
        "highlight": "Thoughts about pros and cons of using AI tools and future predictions."
    },
    {
        "id": "ai-and-unit-tests",
        "title": "AI and Unit Tests",
        "date": "2024-05-06",
        "highlight": "Exploring the intersection of AI and unit testing, and how AI can enhance the software development process."
    },
    {
        "id": "ios-performance-testing",
        "title": "iOS Performance Testing",
        "date": "2024-05-06",
        "highlight": "Techniques and best practices for testing the performance of iOS applications."
    },
]

export default posts;