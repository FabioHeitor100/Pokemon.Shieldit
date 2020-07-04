import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokemonMenu1Component } from './pokemon-menu1.component';

describe('PokemonMenu1Component', () => {
  let component: PokemonMenu1Component;
  let fixture: ComponentFixture<PokemonMenu1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonMenu1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonMenu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
