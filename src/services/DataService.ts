import { SpaceItem } from '../models/Model'

export class DataService {

    public async getSpaceItems():Promise<SpaceItem[]>{
        const result: SpaceItem[] = []
        result.push({
            id: '1', 
            name: 'Hotell Havsbaden',
            location: 'Grisslehamn',
        })

        result.push({
            id: '2', 
            name: 'Steam Hotel',
            location: 'Västerås',
        })

        result.push({
            id: '3', 
            name: 'Selma SPA',
            location: 'Sunne',
        })
        
        return result
    }

    public async reserveSpace(id: string):Promise<boolean> {
        if (id === '1') {
            return true
        } else {
            return false
        }
    }
}