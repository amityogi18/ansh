import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import { Employee } from './domain/employee';


@Pipe({name: 'sortBy'})
export class SortBy implements PipeTransform {
    transform (employee: Employee[], searchField: string) {
        if(_.isEmpty(searchField) || _.isNull(searchField)) return employee;

        return _.sortBy(employee, [ searchField ]);
    }

}