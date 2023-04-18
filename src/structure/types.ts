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

export interface LinkAddress {
    address: string
    name: string
}

export interface Link {
    inPage: string
    inPageLink: string
    outPage: string
    outPageLink: string
    managePage: string
    managePageLink: string
}

export interface Download {
    name: string
    image: string
    link: string 
}

export interface Info {
    bold: string
    regular: string
}

export interface Inquiry {
    inquiry: string
}

export interface Read {
    address: string
    info: string
}