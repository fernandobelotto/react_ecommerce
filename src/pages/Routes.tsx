import {
    BrowserRouter,
    Routes as ReactRoutes,
    Route
} from "react-router-dom";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import ErrorPage from "./ErrorPage";
import ProducListPage from "./ProducListPage";
import SuccessPage from "./SuccessPage";

export default function Routes() {
    return (
        <>
            <BrowserRouter>
                <ReactRoutes>
                    <Route path="/" element={<ProducListPage />} />
                    <Route path="/:productId" element={<ProducListPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/success" element={<SuccessPage />} />
                    <Route path="/error" element={<ErrorPage />} />
                </ReactRoutes>
            </BrowserRouter>
        </>
    )
}

