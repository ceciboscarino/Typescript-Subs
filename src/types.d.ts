export interface Sub{
    nick: string,
    subMonths: number,
    avatar: string,
    description?: string 
  }

  export type SubsResponseFromApi = Array<{
    username: string,
    age: number,
    image: string,
    lastName: string 
  }>