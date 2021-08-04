import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should create Footer Component', () => {
    const title = fixture.debugElement.queryAll(By.css('.creator'));
    expect(title[0].nativeElement.textContent.trim()).toEqual('Desenvolvido por Kevin Uehara');
    expect(component).toBeTruthy();
  });
});
