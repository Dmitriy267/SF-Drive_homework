import { PersonsService } from './persons.service';
import { Person } from './person.interface';
export declare class PersonsController {
    private personsService;
    constructor(personsService: PersonsService);
    getPersons(): Person[];
    getPerson(params: any): Person;
    createPerson(person: Person): {
        id: number;
        name: string;
        login: string;
        mail: string;
    };
    updatePerson(person: Person): Person;
    deletePerson(params: any): void;
}
