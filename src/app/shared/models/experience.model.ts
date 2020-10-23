export interface IExperience {
    _id: string;
    image: string;
    title: string;
    description: string;
    place: string;    
    users: number;
    score?: number;
    price?: string;
    __v: number;
}