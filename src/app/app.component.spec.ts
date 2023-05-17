import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { fakeAsync ,tick} from '@angular/core/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'Tesztelgetes'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('Tesztelgetes');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('Tesztelgetes app is running!');
  // });

  it('H1', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appElement = fixture.nativeElement;
    const h1= appElement.querySelector('h1');
    app.cim="Welcome";
    fixture.detectChanges();
    expect(h1.textContent).toContain(app.cim);
  });


  it('Template=>Component UserName', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appElements = fixture.nativeElement;
    
    const inputUserName= appElements.querySelector('#username');

    inputUserName.value="Jonh Doe";
    fixture.detectChanges();
    inputUserName.dispatchEvent(new Event('input'));
    //fixture.detectChanges();
    expect(inputUserName.value).toEqual(app.userName);
  });

  it('Component=>Template UserName', fakeAsync( ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appElements = fixture.nativeElement;
    
    const inputUserName= appElements.querySelector('#username');

    app.userName="Jonh Doe";
    fixture.detectChanges();

    fixture.whenStable().then(
      ()=>{
        expect(inputUserName.value).toEqual(app.userName);
      }
    )


    //inputUserName.dispatchEvent(new Event('input'));
    //fixture.detectChanges();
   
  })
  );


  it('Add User', fakeAsync( ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appElements = fixture.nativeElement;
    
    app.userName="Attila";
    fixture.detectChanges();
    
    fixture.whenStable().then(
      ()=>{
        const gomb = appElements.querySelector('button');
        const users= appElements.querySelector('#users');
        gomb.click();
        fixture.detectChanges();
        expect(users.textContent).toContain(app.userName);
      }
    )
  }));


  it('Delete Users', fakeAsync( ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appElements = fixture.nativeElement;
    
    app.userName="Attila";
    fixture.detectChanges();
    
    fixture.whenStable().then(
      ()=>{
        const addGomb = appElements.querySelector('button');
        const users= appElements.querySelector('#users');
        addGomb.click();
        fixture.detectChanges();
        const deleteGomb = appElements.querySelector('#deleteusers');
        deleteGomb.click();
        fixture.detectChanges();
        const t:any=[];
        console.log("appUsersTömb: ",app.users);
        expect(app.users).toEqual([]);
      }
    )
  }));
  
  it('empty', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const appElements = fixture.nativeElement;
  });

});
