const API_URL = 'https://api.mamana.app/v1'
export const BASE_URL = 'https://api.mamana.app'


export async function fetchData(url: string, method: string = "post", body = {}) {

    try {
        let response

        const headers = {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'Cache-Control': 'no-cache'

        }

        if (method == 'get') {
            response = await fetch(API_URL + url, {
                    method,
                    headers,
                    cache: 'no-store',
                }
            );
        } else {
            response = await fetch(API_URL + url, {
                    method,
                    headers,
                    body: JSON.stringify(body),
                    cache: 'no-store',
                }
            );
        }

        if (response.status == 200 || response.status == 201)
            return await response.json();

        return [];

    } catch
        (data) {
        throw data
    }
}


