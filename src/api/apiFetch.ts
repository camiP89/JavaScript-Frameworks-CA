export async function fetchData(url: string) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `API request failed: ${response.status} ${response.statusText}`,
      );
    }

    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
