import { Route, Routes } from "react-router-dom";
import PageManageOrder from "./pages/PageManageOrder";
import PageViewStatus from "./pages/PageViewStatus";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PageManageOrder />} />
            <Route path="/status" element={<PageViewStatus />} />
        </Routes>
    );
}