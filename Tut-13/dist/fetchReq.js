const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data fetched successfully:", data);
    }
    catch (error) {
        console.log("Error:", error.message);
    }
};
fetchData();
export {};
//# sourceMappingURL=fetchReq.js.map