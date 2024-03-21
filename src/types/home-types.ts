export interface ICountryData {
  updated: number
  country: string
  countryInfo: {
    flag: string
  }
  cases: number
  active: number
  recovered: number
  casesPerOneMillion: number
  population: number
}
