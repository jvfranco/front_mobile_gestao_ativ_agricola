import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AptAtividadeDetPage } from './apt-atividade-det.page';

describe('AptAtividadeDetPage', () => {
  let component: AptAtividadeDetPage;
  let fixture: ComponentFixture<AptAtividadeDetPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AptAtividadeDetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AptAtividadeDetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
