export interface Country {
    name: {
    common: string
    official: string
    }
    area: number
    region: string
    flags: {
        png: string
        svg: string
    }
    capital: string
    languages: Record<string, string>
    cca3: string  // code unique du pays
    cca2: string
    currencies: Record<string, { name: string; symbol: string }>
    subregion: string
    landlocked: boolean
    borders: string[]
    tld: string[]
}