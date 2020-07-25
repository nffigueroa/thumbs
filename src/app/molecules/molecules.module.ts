import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import {
    MenuComponent,
    InfoStarSquareComponent,
    RemainingChartComponent,
    BlockComponent,
    FooterComponent,
    SquareMainComponent
} from '.';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
    declarations: [
        MenuComponent,
        InfoStarSquareComponent,
        RemainingChartComponent,
        BlockComponent,
        FooterComponent,
        SquareMainComponent],
    entryComponents: [],
    imports: [CommonModule, AtomsModule],
    exports: [
        MenuComponent,
        InfoStarSquareComponent,
        RemainingChartComponent,
        BlockComponent,
        FooterComponent,
        SquareMainComponent
    ],
    providers: [],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class MoleculesModule { }
