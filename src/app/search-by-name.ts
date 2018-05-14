import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './domain/employee';
import * as _ from 'lodash';


@Pipe({name: 'searchByName'})
export class SearchByName implements PipeTransform {
    transform(employee: Employee[], searchText: string) {
        if(_.isEmpty(searchText) || _.isNull(searchText)) return employee;

        return _.filter(employee, ['name', searchText]);
    }

}