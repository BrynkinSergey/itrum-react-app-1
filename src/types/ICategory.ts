export interface ICategory {
  id: string
  title: string
  descendants?: ICategory[]
}
