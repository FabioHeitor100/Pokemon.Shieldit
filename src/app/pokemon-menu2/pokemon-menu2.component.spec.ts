import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokemonMenu2Component } from './pokemon-menu2.component';

describe('PokemonMenu2Component', () => {
  let component: PokemonMenu2Component;
  let fixture: ComponentFixture<PokemonMenu2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonMenu2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
