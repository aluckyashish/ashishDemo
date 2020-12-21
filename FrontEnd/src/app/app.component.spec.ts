import { TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let mockStore: MockStore<{ cart: any, auth: any, showcase: any, browse: any }>;
  beforeEach(waitForAsync(() => {
    const initialState = {
      cart: [], auth: [], showcase: [], browse: [],
    };
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
    }).compileComponents();
    mockStore = TestBed.inject(Store);
  }));
  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should dispatch CheckIfLoggedIn()', waitForAsync(() => {
    spyOn(mockStore, 'dispatch').and.stub();
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(mockStore.dispatch).toHaveBeenCalledTimes(1);
  }));
});
