import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { HeaderComponent, StarSquareComponent, AdBlockComponent, FooterComponent } from '.';
@NgModule({
    declarations: [
        HeaderComponent,
        StarSquareComponent,
        AdBlockComponent,
        FooterComponent],
    entryComponents: [],
    imports: [CommonModule, MoleculesModule],
    exports: [
        HeaderComponent,
        StarSquareComponent,
        AdBlockComponent,
        FooterComponent],
    providers: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class OrganismsModule { }
