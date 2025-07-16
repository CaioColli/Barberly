export interface FormData {
    name: string,
    price: string,
    file: File | string
    [key: string]: string | File
}