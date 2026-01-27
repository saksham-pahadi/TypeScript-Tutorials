function isAdmin(user) {
    return user.role === "admin";
}
function publishPost(post) {
    return {
        ...post,
        isPublished: true,
        updatedAt: new Date()
    };
}
const user = {
    id: 1,
    name: "Saksham",
    email: "saksham@gmail.com",
    role: "admin",
    isActive: true,
    createdAt: new Date()
};
const post = {
    id: 101,
    title: "TypeScript is Goated",
    content: "Why TS makes JS better...",
    authorId: user.id,
    isPublished: true,
    createdAt: new Date()
};
const product = {
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
export { isAdmin, publishPost }; // Type alias for allowed operations
//# sourceMappingURL=interface.js.map