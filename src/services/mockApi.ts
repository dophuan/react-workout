import axios from 'axios';

const sampleUrl = '/mockData';
const headers = {
  'Content-Type': 'application/json',
};

interface GetRecipeParams {
  page: number;
  search?: string;
  limit?: number;
  sortType?: string;
  sortBy?: string;
}
export const mockApi = axios.create({
  baseURL: 'http://localhost:8081/',
});

export function getSampleData(params?: GetRecipeParams) {
  return mockApi.get(sampleUrl, { params });
}

export async function postSampleData(formData: any) {
  return await mockApi.post(sampleUrl, formData, {
    headers: headers,
  });
}

export function getItemDetails(id: string) {
  return mockApi.get(`${sampleUrl}/${id}`);
}
