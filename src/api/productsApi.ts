import {
  ALL_PRODUCTS_ENDPOINT,
  getSingleProductEndpoint,
} from "../constants/api";
import { fetchData } from "./apiFetch";

export async function fetchAllProducts() {
  return fetchData(ALL_PRODUCTS_ENDPOINT);
}

export function fetchSingleProductById(productId: string) {
  return fetchData(`${getSingleProductEndpoint(productId)}`);
}
