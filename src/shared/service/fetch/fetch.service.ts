import {snackbarService} from "@/shared/service-ui/snackbar.service";
const API_URL = 'https://api.yaratmotors.com'

interface ErrorObject {
    message: string;
    statusCode?: number;

    [key: string]: any;
}

const handlerExceptionError = async (response: any) => {
    switch (response.status) {
        case 511:
            // showServerMessage(data);
            break;
        case 401:
            // showServerMessage(data);
            break;
        case 422:
            errorToast(await response.json());
            break;
        case 500:
            errorToast(await response.json());
            break;
        default:
            return null;
    }
    throw new Error(`HTTP error! status: ${response.status}`);
};

function errorToast(data: any): void {


}

export async function fetchData(url: string, method: string = "post", body = {}) {
    try {
        let response
        let headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'cache-control': 'no-cache'
        }


        if (method == 'get') {
            response = await fetch(API_URL + url, {
                    method,
                    headers,
                    cache: 'no-store',
                }
            );
        }
        if (method == 'post') {
            response = await fetch(API_URL + url, {
                    method,
                    headers,
                    body: JSON.stringify(body),
                    cache: 'no-store',
                }
            );
        }

        if (response?.status == 200 || response?.status == 201) {
            return await response?.json();
        }

        await handlerExceptionError(response)
        return [];

    } catch
        (data) {
        throw data
    }
}
