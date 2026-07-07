import { useParams } from 'react-router-dom'
import { useCountries } from '../hooks/useCountries'
import { useNavigate } from 'react-router-dom'

function CountryDetail() {
    const { code } = useParams()
    const { countries } = useCountries()
    const navigate = useNavigate()

    const country = countries.find(c => c.cca3 === code)

    if (!country) return <p>Pays non trouvé</p>

    const borderNames = country.borders?.map(code => 
    countries.find(c => c.cca3 === code)?.name.common
    ).filter(Boolean).join(', ')

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <button 
                onClick={() => navigate(-1)}
                className="mb-6 px-4 py-2 bg-white shadow rounded-full text-gray-700 hover:shadow-md"
            >
                ← Retour
            </button>
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
                <img 
                    src={`https://flagcdn.com/w320/${country.cca2?.toLowerCase()}.png`}
                    alt={country.name.common}
                    className="w-64 rounded-lg shadow-md mb-6"
                />
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{country.name.common}</h1>
                <p className="text-gray-600 mb-2"><span className="font-semibold text-gray-800">Nom officiel :</span> {country.name.official}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold text-gray-800">Région :</span> {country.region}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold text-gray-800">Capitale :</span> {country.capital}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold text-gray-800">Superficie :</span> {country.area?.toLocaleString()} km²</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold text-gray-800">Langues :</span> {Object.values(country.languages || {}).join(', ')}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold text-gray-800">Sous-région :</span> {country.subregion}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold text-gray-800">Devise :</span> {Object.values(country.currencies || {}).map(c => `${c.name} (${c.symbol})`).join(', ')}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold text-gray-800">Domaine internet :</span> {country.tld?.join(', ')}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold text-gray-800">Enclavé :</span> {country.landlocked ? 'Oui' : 'Non'}</p>
                <p className="text-gray-600 mb-2"><span className="font-semibold text-gray-800">Pays frontaliers :</span> {borderNames || 'Aucun'}</p>
            </div>
        </div>
    )
}

export default CountryDetail