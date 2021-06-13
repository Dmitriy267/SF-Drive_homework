import { Person } from './person.interface';
export declare class PersonsService {
    private persons;
    getPersons(): Person[];
    getPerson(id: number): Person;
    createPerson(person: Person): {
        id: number;
        name: string;
        login: string;
        mail: string;
    };
    updatePerson(person: Person): Person;
    deletePerson(id: number): void;
}
