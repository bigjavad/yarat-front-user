import {snackbarService} from "@/shared/service-ui/snackbar.service";
import {getCookie} from "cookies-next";

const API_URL = 'https://api.yarat-motors.com'

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
    if (typeof data === 'string') {
        snackbarService.showSnackbar(data, 'error');
        return;
    }
    if (Array.isArray(data) && data.every(item => typeof item === 'string')) {
        data.forEach((message: string) => {
            snackbarService.showSnackbar(message, 'error');
        });
        return;
    }
    if (data && typeof data === 'object' && !Array.isArray(data) && data.message) {
        snackbarService.showSnackbar(data.message, 'error');
        return;
    }
    if (Array.isArray(data) && data.every(item => item && item.message)) {
        data.forEach((error: ErrorObject) => {
            snackbarService.showSnackbar(error.message, 'error');
        });
        return;
    }
    if (data && typeof data === 'object' && 'errors' in data && Array.isArray(data.errors)) {
        data.errors.forEach((error: ErrorObject) => {
            if (error.message) {
                snackbarService.showSnackbar(error.message, 'error');
            }
        });
        return;
    }
    console.warn('فرمت داده نامعتبر برای errorToast:', data);
    snackbarService.showSnackbar('خطای ناشناخته رخ داده است', 'error');
}

export async function fetchData(url: string, method: string = "post", body = {}) {
    try {
        let response
        let token
        token = getCookie('token');
        const headers = {
            'content-type': 'application/json',
            'accept': 'application/json',
            'cache-control': 'no-cache',
            'authorization': `Bearer ${token}`,
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
