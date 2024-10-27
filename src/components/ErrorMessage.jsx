import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

const ErrorMessage = () => {
return (
    iziToast.error({
        title: 'Error',
        message: 'Whoops, something went wrong! Please try reloading this page!',
    })
)
}

export default ErrorMessage