import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketComponent } from './rocket.component';

describe('RocketComponent', () => {
    const title = 'Playground App';

    let component: RocketComponent;
    let fixture: ComponentFixture<RocketComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RocketComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RocketComponent);
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
