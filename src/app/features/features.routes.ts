import { Routes } from "@angular/router";
import { EmployeeLayoutComponent } from "./layouts/employee-layout/employee-layout.component";
import { EmployeeListComponent } from "./employee/pages/employee-list/employee-list.component";
import { EmployeeFormComponent } from "./employee/pages/employee-form/employee-form.component";


export const FeaturesRoutes: Routes = [
    {
        path: '',
        component: EmployeeLayoutComponent,
        children: [
            {
                path: 'listpage',
                component: EmployeeListComponent
            },
            {
                path: 'formpage',
                component: EmployeeFormComponent
            },
            {
                path: '**',
                redirectTo: 'listpage'
            },
        ]
    },
    {
        path: "**",
        redirectTo: '/employee/listpage'
    }
]

export default FeaturesRoutes;