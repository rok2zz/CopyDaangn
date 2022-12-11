export interface Product {
    id: string
    name: string
    price: number
    description: string
    category: string
    registered_date?: number

    likes: number
    chats: number
    views?: number

    images: string[]

    registered_by: User

    is_hidden?: boolean
}

export interface User {
    name?: string
    location: string
    temperature?: number
    thumbnail?: string
}

export interface QueryID {
    name: string
    query: Query
}

export interface Query {
    id: string
    address?: string
}

export interface Keyword {
    word: string
    changes: number
}

export interface linkAddress {
    address: string
    name: string
}

export interface link {
    inPage: string
    inPageLink: string
    outPage: string
    outPageLink: string
    managePage: string
    managePageLink: string
}

export interface download {
    downloadImage: string
    downloadLink: string 
}

export interface info {
    bold: string
    regular: string
}

export interface inquiry {
    inquiry: string
}

export interface read {
    address: string
    info: string
}