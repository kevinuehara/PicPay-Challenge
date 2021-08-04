import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule } from "@angular/material";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { ButtonComponent } from "../components/button/button.component";
import { UserInfoComponent } from "../components/user-info/user-info.component";
import { UserService } from "../services/UserService";

import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockUserService;

  beforeEach(async(() => {
    mockUserService = jasmine.createSpyObj(["getUsers"]);
    mockUserService.getUsers.and.returnValue(
      of([
        {
          id: 1001,
          name: "Eduardo Santos",
          img: "https://randomuser.me/api/portraits/men/9.jpg",
          username: "@eduardo.santos",
        },
      ])
    );

    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        UserInfoComponent,
        ButtonComponent,
      ],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
      imports: [HttpClientModule, MatDialogModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create Home Component", () => {
    const welcomeMessage = fixture.debugElement.queryAll(By.css('#welcome-message'));
    expect(welcomeMessage[0].nativeElement.textContent.trim()).toEqual('Bem vindo!');
    expect(component).toBeTruthy();
  });

  it('should list users', () => {
    const users = fixture.debugElement.queryAll(By.css('app-user-info'));
    expect(users.length).toBe(1);
  })

});
