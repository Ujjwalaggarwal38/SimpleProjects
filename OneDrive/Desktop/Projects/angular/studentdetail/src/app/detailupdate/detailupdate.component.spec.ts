import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailupdateComponent } from './detailupdate.component';

describe('DetailupdateComponent', () => {
  let component: DetailupdateComponent;
  let fixture: ComponentFixture<DetailupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
