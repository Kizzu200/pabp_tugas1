import { Product, ProductsResponse } from '@/types/product';

const API_BASE_URL = 'https://dummyjson.com';

// Fetch all products (untuk SSG)
export async function getAllProducts(): Promise<ProductsResponse> {
  const res = await fetch(`${API_BASE_URL}/products?limit=30`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return res.json();
}

// Fetch single product (untuk SSR)
export async function getProductById(id: string): Promise<Product> {
  const res = await fetch(`${API_BASE_URL}/products/${id}`, {
    cache: 'no-store', // Memastikan data selalu fresh (SSR)
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  
  return res.json();
}

// Fetch products by category (untuk filter)
export async function getProductsByCategory(category: string): Promise<ProductsResponse> {
  const res = await fetch(`${API_BASE_URL}/products/category/${category}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch products by category');
  }
  
  return res.json();
}

// Fetch all categories
export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${API_BASE_URL}/products/categories`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  
  return res.json();
}

// Search products
export async function searchProducts(query: string): Promise<ProductsResponse> {
  const res = await fetch(`${API_BASE_URL}/products/search?q=${query}`);
  
  if (!res.ok) {
    throw new Error('Failed to search products');
  }
  
  return res.json();
}
