import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserInfoComponent } from "./user-info.component";
import { ButtonComponent } from "../button/button.component";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from '@angular/material/dialog';
import { By } from "@angular/platform-browser";

describe("UserInfoComponent", () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfoComponent, ButtonComponent],
      imports: [HttpClientModule, MatDialogModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create UserInfo Component", () => {
    expect(component).toBeTruthy();
  });

  it("should render UserInfo Component", () => {
    component.name = 'Kevin Uehara';
    component.userId = 12345;
    component.username = '@kevin.uehara';
    fixture.detectChanges();
    const username = fixture.debugElement.queryAll(By.css('.user-name'));
    expect(username[0].nativeElement.textContent.trim()).toEqual('Kevin Uehara');
  });
});
