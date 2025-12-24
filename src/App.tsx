import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout.tsx'
import '@/styles/index.css'
import Landing from "./layout/Landing.tsx";
import PrivacyProductRedirect from '@/pages/privacy/PrivacyProductRedirect.tsx';
import PrivacyIOG26ES from '@/pages/privacy/iog26/v1/es/Privacy.tsx';
import PrivacyIOG26EN from '@/pages/privacy/iog26/v1/en/Privacy.tsx';
import PrivacyIOG26IT from '@/pages/privacy/iog26/v1/it/Privacy.tsx';
import NotFound from '@/pages/NotFound.tsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Landing />} />
                    <Route path="/privacy/:product" element={<PrivacyProductRedirect />} />
                    <Route path="/privacy/iog26/es/v1" element={<PrivacyIOG26ES />} />
                    <Route path="/privacy/iog26/en/v1" element={<PrivacyIOG26EN />} />
                    <Route path="/privacy/iog26/it/v1" element={<PrivacyIOG26IT />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
