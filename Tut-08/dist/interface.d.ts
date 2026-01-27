interface User {
    readonly id: number;
    name: string;
    email: string;
    password?: string;
    role: "user" | "admin";
    isActive: boolean;
    createdAt: Date;
}
interface Post {
    readonly id: number;
    title: string;
    content: string;
    authorId: User["id"];
    tags?: string[];
    isPublished: boolean;
    createdAt: Date;
    updatedAt?: Date;
}
interface Product {
    readonly id: number;
    name: string;
    description: string;
    price: number;
    discount?: number;
    inStock: boolean;
    category: string;
    images: string[];
    createdAt: Date;
}
declare function isAdmin(user: User): boolean;
declare function publishPost(post: Post): Post;
export { isAdmin, publishPost };
export type { User, Post, Product };
//# sourceMappingURL=interface.d.ts.map