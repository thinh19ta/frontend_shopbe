import { Helmet } from "react-helmet";

export default function UseScript() {
    return (
        <Helmet>
            <script src="assets/js/vendor/jquery-1.12.0.min.js"></script>
            <script src="assets/js/vendor/jquery-migrate-1.4.1.min.js"></script>
            <script src="assets/js/vendor/modernizr-2.8.3.min.js"></script>
            <script src="assets/js/popper.min.js"></script>
            <script src="assets/js/bootstrap.min.js"></script>
            <script src="assets/js/plugins.js"></script>
            <script src="assets/js/ajax-mail.js"></script>
            <script src="assets/js/main.js"></script>
        </Helmet>
    )
}