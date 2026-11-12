const API_URL = "https://v2.api.noroff.dev/online-shop";

export async function getProducts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(
        `API request failed: ${response.status} ${response.statusText}`,
      );
    }

    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}
