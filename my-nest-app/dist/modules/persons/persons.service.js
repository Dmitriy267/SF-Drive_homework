"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonsService = void 0;
const common_1 = require("@nestjs/common");
let PersonsService = class PersonsService {
    constructor() {
        this.persons = [
            {
                id: 1,
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
    }
    getPersons() {
        return this.persons;
    }
    getPerson(id) {
        return this.persons.find(person => person.id === id);
    }
    createPerson(person) {
        const newPerson = Object.assign(Object.assign({}, person), { id: Date.now() });
        this.persons.push(newPerson);
        return newPerson;
    }
    updatePerson(person) {
        const existingPerson = this.persons.find(({ id }) => person.id === id);
        existingPerson.name = person.name;
        existingPerson.login = person.login;
        existingPerson.mail = person.mail;
        return existingPerson;
    }
    deletePerson(id) {
        this.persons = this.persons.filter(person => person.id !== id);
    }
};
PersonsService = __decorate([
    common_1.Injectable()
], PersonsService);
exports.PersonsService = PersonsService;
//# sourceMappingURL=persons.service.js.map