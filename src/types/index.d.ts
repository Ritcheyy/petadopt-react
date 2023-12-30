import { StaticImageData } from "next/image";

export namespace appTypes {
  interface Category {
    id: number
    name: string
    type: string
    image: StaticImageData
  }

  type Categories = Category[]
}