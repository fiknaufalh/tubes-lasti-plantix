import { Route, Routes } from "react-router-dom";
import PageManageOrder from "./pages/PageManageOrder";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PageManageOrder />} />
        </Routes>
    );
}