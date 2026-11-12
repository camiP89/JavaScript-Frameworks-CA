//Noroff Base Url
export const API_BASE_URL = "https://v2.api.noroff.dev";

//Product Endpoints
export const ALL_PRODUCTS_ENDPOINT = `${API_BASE_URL}/online-shop`;

export const getSingleProductEndpoint = (productId: string) =>
  `${ALL_PRODUCTS_ENDPOINT}/${productId}`;
