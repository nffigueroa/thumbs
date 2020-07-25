import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    SloganComponent,
    ItemMenuComponent,
    TitleSquareComponent,
    SubtitleSquareComponent,
    ButtonSquareComponent,
    CharRectanguleComponent,
    RemainingChartComponent,
    TitleComponent,
    ParagraphComponent,
    LabelFooterComponent,
    LabelsComponent,
    VoteNowComponent
} from '.';

@NgModule({
    declarations: [SloganComponent,
        ItemMenuComponent,
        TitleSquareComponent,
        SubtitleSquareComponent,
        ButtonSquareComponent,
        CharRectanguleComponent,
        RemainingChartComponent,
        TitleComponent,
        ParagraphComponent,
        LabelFooterComponent,
        LabelsComponent,
        VoteNowComponent],
    entryComponents: [],
    imports: [CommonModule],
    exports: [SloganComponent,
        ItemMenuComponent,
        TitleSquareComponent,
        SubtitleSquareComponent,
        ButtonSquareComponent,
        CharRectanguleComponent,
        RemainingChartComponent,
        TitleComponent,
        ParagraphComponent,
        LabelFooterComponent,
        LabelsComponent,
        VoteNowComponent],
    providers: []
})

export class AtomsModule { }
