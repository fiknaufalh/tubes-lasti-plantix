import { Route, Routes } from "react-router-dom";
import PageSensor from "./pages/PageSensor";
import PageViewStatus from "./pages/PageViewStatus";
import PageWeather from "./pages/PageWeather";
import PageWelcome from "./pages/PageWelcome";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<PageWelcome />} />
            <Route path="/sensor" element={<PageSensor />} />
            <Route path="/status" element={<PageViewStatus />} />
            <Route path="/weather" element={<PageWeather />} />
        </Routes>
    );
}