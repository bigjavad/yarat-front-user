import { enqueueSnackbar, OptionsWithExtraProps } from 'notistack';

type SnackbarType = 'success' | 'error' | 'warning' | 'info';
type SnackbarPosition = {
    horizontal?: 'left' | 'center' | 'right';
    vertical?: 'top' | 'bottom';
};

class SnackbarService {
    showSnackbar(
        message: string,
        type: SnackbarType = 'info',
        duration: number = 3000,
        position: SnackbarPosition = { horizontal: 'right', vertical: 'top' }
    ): void {
        const options: OptionsWithExtraProps<SnackbarType> = {
            variant: type,
            autoHideDuration: duration,
            anchorOrigin: {
                horizontal: position.horizontal || 'right',
                vertical: position.vertical || 'top',
            },
        };

        enqueueSnackbar(message, options);
    }
}

export const snackbarService = new SnackbarService();
