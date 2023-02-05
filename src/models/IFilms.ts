import { IActor } from "./IActor"


export interface IFilms {
	id: number
	video: string
	background: string
	image: string
	actors:IActor[]
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