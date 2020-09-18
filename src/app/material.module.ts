import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule ({
    imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDialogModule, MatProgressSpinnerModule],
    exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatListModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDialogModule, MatProgressSpinnerModule]
})

export class MaterialModule {}