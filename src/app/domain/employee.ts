export class Employee {
        id:   number;
        name: string;
        phone: number;
        address: Address;

        constructor() {
            this.id = 0;
            this.name = '';
            this.phone = 0;
            this.address = new Address() 
        }
  }

    export class Address {
            city: string;
            address_line1: string;
            address_line2: string;
            postal_code: string;

            constructor() {
                this.city ='';
                this.address_line1 ='';
                this.address_line2 = '';
                this.postal_code = '';
            }
        
    }