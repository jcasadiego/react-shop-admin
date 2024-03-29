const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`,
        refreshToken: `${API}/api/${VERSION}/auth/refresh-token`,
    },
    products: {
        getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
        postProduct: `${API}/api/${VERSION}/products`,
        getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
        putProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
        deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    },
    users: {
        getUsers: (limit, offset) => `${API}/api/${VERSION}/users?limit=${limit}&offset=${offset}`,
        postUsers: `${API}/api/${VERSION}/users`,
        getUser: (id) => `${API}/api/${VERSION}/users/${id}`,
        putUser: (id) => `${API}/api/${VERSION}/users/${id}`,
        deleteUser: (id) => `${API}/api/${VERSION}/users/${id}`,
        postUser: `${API}/api/${VERSION}/users/is-available`,
    },
    categories: {
        getCategories: (limit, offset) => `${API}/api/${VERSION}/categories?limit=${limit}&offset=${offset}`,
        postCategories: `${API}/api/${VERSION}/categories`,
        getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
        putCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
        deleteCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
        getCategoryProducts: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
    },
    files: {
        postFile: `${API}/api/${VERSION}/files/upload`,
        getFile: (filename) => `${API}/api/${VERSION}/files/${filename}`,
    }
};

export default endPoints;