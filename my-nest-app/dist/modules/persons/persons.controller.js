"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonsController = void 0;
const common_1 = require("@nestjs/common");
const persons_service_1 = require("./persons.service");
let PersonsController = class PersonsController {
    constructor(personsService) {
        this.personsService = personsService;
    }
    getPersons() {
        return this.personsService.getPersons();
    }
    getPerson(params) {
        console.log('Get person ', params.id);
        return this.personsService.getPerson(Number(params.id));
    }
    createPerson(person) {
        console.log('Create person ', person);
        return this.personsService.createPerson(person);
    }
    updatePerson(person) {
        console.log('Update person ', person);
        return this.personsService.updatePerson(person);
    }
    deletePerson(params) {
        console.log('Delete person ', params);
        return this.personsService.deletePerson(Number(params.id));
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "getPersons", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "getPerson", null);
__decorate([
    common_1.Post(),
    common_1.HttpCode(204),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "createPerson", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "updatePerson", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PersonsController.prototype, "deletePerson", null);
PersonsController = __decorate([
    common_1.Controller('persons'),
    __metadata("design:paramtypes", [persons_service_1.PersonsService])
], PersonsController);
exports.PersonsController = PersonsController;
//# sourceMappingURL=persons.controller.js.map