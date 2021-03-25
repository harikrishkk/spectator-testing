import { SumPipe } from './../../pipes/sum.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { TotalComponent } from './total.component';

describe('TotalComponent', () => {
  let spectator: Spectator<TotalComponent>;
  const createComponent = createComponentFactory({
    component: TotalComponent,
    declarations: [SumPipe],
  });
  beforeEach(() => (spectator = createComponent()));

  // let component: TotalComponent;
  // let fixture: ComponentFixture<TotalComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [TotalComponent],
  //   }).compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(TotalComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(spectator).toBeTruthy();
  });
});
