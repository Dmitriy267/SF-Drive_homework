import {Controller, Get, Post, Put, Delete, Body, Param, HttpCode } from '@nestjs/common';
import {PersonsService} from './persons.service';
import {Person} from './person.interface'
@Controller ('persons')
export class PersonsController {
	constructor (private personsService: PersonsService){}
	@Get()
	getPersons(){
		return this.personsService.getPersons();
	}
	@Get(':id')
	getPerson(@Param()params){
		console.log('Get person ', params.id);
		return this.personsService.getPerson(Number(params.id));
	}
	@Post()
	@HttpCode(204)
	createPerson(@Body() person:Person){
		console.log('Create person ', person);
		return this.personsService.createPerson(person);
	}
	@Put()
	updatePerson(@Body() person:Person){
		console.log('Update person ', person);
		return this.personsService.updatePerson(person);
	}
	@Delete(':id')
	deletePerson(@Param()params){
	console.log('Delete person ', params);	
	return this.personsService.deletePerson(Number(params.id));
	}
}