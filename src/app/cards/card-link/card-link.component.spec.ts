import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLinkComponent } from './card-link.component';

describe('CardLinkComponent', () => {
    const title = 'Learn Angular';
    const icon = 'M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z';
    const link = 'https://angular.io/tutorial';

    let component: CardLinkComponent;
    let fixture: ComponentFixture<CardLinkComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardLinkComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardLinkComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the card link component', () => {
        expect(component).toBeTruthy();
    });

    it('should render the card link component', () => {
        component.title = title;
        component.icon = icon;
        component.link = link;
        fixture.detectChanges();

        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('a').getAttribute('href')).toContain(link);
        expect(compiled.querySelector('a').getAttribute('target')).toContain('_blank');
        expect(compiled.querySelector('a svg path').getAttribute('d')).toContain(icon);
        expect(compiled.querySelector('a span').textContent).toContain(title);
    });
});
