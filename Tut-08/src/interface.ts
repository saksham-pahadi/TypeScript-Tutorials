interface User {
  readonly id: number;
  name: string;
  email: string;
  password?: string;      // optional (e.g., OAuth users)
  role: "user" | "admin"; // literal type
  isActive: boolean;
  createdAt: Date;
}

interface Post {
  readonly id: number;
  title: string;
  content: string;
  authorId: User["id"];   // reference to User
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

function isAdmin(user: User): boolean {
  return user.role === "admin";
}

function publishPost(post: Post): Post {
  return {
    ...post,
    isPublished: true,
    updatedAt: new Date()
  };
}


const user: User = {
  id: 1,
  name: "Saksham",
  email: "saksham@gmail.com",
  role: "admin",
  isActive: true,
  createdAt: new Date()
};




const post: Post = {
  id: 101,
  title: "TypeScript is Goated",
  content: "Why TS makes JS better...",
  authorId: user.id,
  isPublished: true,
  createdAt: new Date()
};



const product: Product = {
  id: 501,
  name: "Wireless Headphones",
  description: "Noise cancelling",
  price: 2999,
  inStock: true,
  category: "Electronics",
  images: ["img1.jpg", "img2.jpg"],
  createdAt: new Date()
};

console.log(isAdmin(user)); // true
console.log(publishPost(post)); // post with isPublished true and updatedAt set 
console.log(product); // product details
export {  isAdmin, publishPost };// Type alias for allowed operations
export type {User, Post, Product}; // Exporting interfaces
