import {snackbarService} from "@/shared/service-ui/snackbar.service";

const API_URL = 'http://localhost:3000'

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
        default:
            return null;
    }

    // throw new Error(response);
};

function errorToast(data: any) {
    data.errors.map((res: any, key: number) => {
        snackbarService.showSnackbar(res.message, 'error');
    })
}

export async function fetchData(url: string, method: string = "post", body = {}) {
    try {
        let response;
        let token = '';


        const headers = {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            'Cache-Control': 'no-cache',
            'authorization': `Bearer ${token}`
        };

        if (method == 'get') {
            response = await fetch(API_URL + url, {
                method,
                headers,
                cache: 'no-store',
            });
        } else {
            response = await fetch(API_URL + url, {
                method,
                headers,
                body: JSON.stringify(body),
                cache: 'no-store',
            });
        }

        if (response.status == 200 || response.status == 201) {
            const data = await response.json();
            if (data.toast) {
                snackbarService.showSnackbar(data?.message, 'success');
            }
            return data;
        } else {
            await handlerExceptionError(response);
            return [];
        }
    } catch (data) {
        throw data;
    }
}


