import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";
import App from "./App";
import BookmarkPage from "./BookmarkPage";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import ErrorPage from "./ErrorPage";
import ProducDetailPage from "./ProducDetailPage";
import ProducListPage from "./ProducListPage";
import SuccessPage from "./SuccessPage";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ReactRoutes>
          <Route path="/" element={<App />}>
            <Route index element={<ProducListPage />} />
            <Route path="products/:id" element={<ProducDetailPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="bookmark" element={<BookmarkPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </ReactRoutes>
      </BrowserRouter>
    </>
  );
}
