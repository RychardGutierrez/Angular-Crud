import { Component } from '@angular/core';
import { Employee } from "./models/employee";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeList: Employee[] = [
    { id: 1, name: "Ryan", country: "Bolivia" },
    { id: 2, name: "Ana", country: "Peru" },
    { id: 3, name: "Pedro", country: "Chile" },
  ];
  selectedEmployee: Employee = new Employee();

  addOrEdit() {
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeList.length + 1;
      this.employeeList.push(this.selectedEmployee);

    }
    this.selectedEmployee = new Employee();

  }

  openForEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }
  delete() {
    if (confirm("are you sure you want to delete it")) {
      this.employeeList = this.employeeList.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();  
    }
    
  }
}
