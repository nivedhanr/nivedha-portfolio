import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skill } from './skills.component';

describe('Skill', () => {
  let component: Skill;
  let fixture: ComponentFixture<Skill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Skill);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
