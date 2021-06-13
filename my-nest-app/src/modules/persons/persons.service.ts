import { Injectable } from '@nestjs/common';
import {Person} from './person.interface';

@Injectable()
export class PersonsService{
	private persons: Person []=[
	{
	id:1,
name: 'Alex',
login: 'AlexSkill',	
mail: 'Alex@mail.ru',
	},
	{
	id: 2,
name: 'Djon',
login: 'DjonDrive',
mail: 'Djongoog@gmail.ru',	
	}
	];
	getPersons(){
		return this.persons;
	}
	getPerson(id: number){
		return this.persons.find(person=>person.id===id);
	}
	createPerson (person: Person){
		const newPerson={
			...person,
			id:Date.now()
		};
		this.persons.push(newPerson)
		return newPerson;
	}
	updatePerson(person: Person){
		const existingPerson=this.persons.find(({id})=>person.id===id);
		existingPerson.name=person.name;
		existingPerson.login=person.login;
		existingPerson.mail=person.mail;
		return existingPerson;
		
	}
		deletePerson(id: number){
			this.persons=this.persons.filter(person=>person.id !==id)
		}
	
}