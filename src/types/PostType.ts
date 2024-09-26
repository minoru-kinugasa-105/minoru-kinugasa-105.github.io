export default interface Post {
    slug: string;
    title: string;
    content: string;
    thumbnail: string;
    posted: string;
    description: string;
    isBig?: boolean;
    tag: {
        name: string;
        color: string;
    }[];
    author: {
        image: string;
        name: string;
        intro: string;
        twitter: string;
        mail: string;
    };
}
