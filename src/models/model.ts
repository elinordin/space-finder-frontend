//This file sets the types of our models, i.e. an important feature of Typescript

export interface User {
    name: string,
    email: string
}

export interface UserAttribute {
    key: string,
    value: string
}

export interface SpaceItem {
    id: string,
    name: string,
    location: string,
    photo?: string
}