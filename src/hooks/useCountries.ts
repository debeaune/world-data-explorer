import { useState, useEffect } from 'react'
import type { Country } from '../types/country'
import countriesData from '../countries.json'


export function useCountries() {
    const [countries, setCountries] = useState<Country[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)


useEffect(() => {
    try {
        setCountries(countriesData as unknown as Country[])
        setLoading(false)
    } catch (e) {
        setError('Erreur lors du chargement des données')
    }
}, [])
    return { countries, loading, error }
}