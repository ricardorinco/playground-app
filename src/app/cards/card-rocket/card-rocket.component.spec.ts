import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRocketComponent } from './card-rocket.component';

describe('CardRocketComponent', () => {
    const title = 'Playground App';

    let component: CardRocketComponent;
    let fixture: ComponentFixture<CardRocketComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardRocketComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CardRocketComponent);
        component = fixture.componentInstance;
        component.title = title;

        fixture.detectChanges();
    });

    it('should create the rocket component', () => {
        expect(component).toBeTruthy();
    });

    it('should render the title in span', () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('span').textContent).toContain(`${title} is running!`);
    });
});
