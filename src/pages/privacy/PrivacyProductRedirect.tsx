import {useEffect, useState} from 'react';
import {Navigate, useParams} from 'react-router-dom';
import { DEFAULT_LANG } from '@/constants/translations';

function detectActiveLang(): 'en' | 'es' | 'it' {
    try {
        const saved = typeof window !== 'undefined' ? localStorage.getItem('iog26.lang') : null;
        if (saved === 'en' || saved === 'es' || saved === 'it') return saved;
    } catch (error){
        console.error('Error detecting language:', error);
    }
    return DEFAULT_LANG;
}

const PrivacyProductRedirect = () => {
    const {product} = useParams();
    const [target, setTarget] = useState<string | null>(null);

    useEffect(() => {
        const lang = detectActiveLang();
        const chosenProduct = product ?? 'iog26';
        setTarget(`/privacy/${chosenProduct}/${lang}/v1`);
    }, [product]);

    if (!target) return null;

    return (
        <Navigate to={target} replace/>
    );
}

export default PrivacyProductRedirect;