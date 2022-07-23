import axios from "axios";
import { SearchResponse } from "../../types/home";

/**
 * @param searchKey
 * @param page
 */
 export async function getRepos(searchKey: string, page: number): Promise<SearchResponse | null> {
    try {
        console.log('process.env.REACT_APP_API_URL :>> ', process.env.REACT_APP_API_URL);
        let base_url = process.env.REACT_APP_API_URL
        const url = `${base_url}repo/search/${searchKey}/${page}`;
        const response = await axios.get<SearchResponse>(url);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
}