import { IActor } from "./IActor"


export interface IFilms {
	id: number
	type: string
	video: string
	background: string
	seasons?: number
	image: string
	actors: IActor[]
	pictures: string[]
	name: string
	data: string
	country: string
	kind: string[]
	age: number
	time: number
	budget: string
	title: string
}