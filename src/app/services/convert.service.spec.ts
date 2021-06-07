import { TestBed } from '@angular/core/testing';
import { combineLatest } from 'rxjs';

import { ConvertService } from './convert.service';

describe('ConvertService', () => {
  let service: ConvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Галосныя і, ы', () => {
    describe('і ў пачатку слова ў формах займеннікаў вымаўляецца як спалучэнне й з і (йі)', () => {
      it('іх -> [й]іх', () => {
        expect(service.replaceI('іх')).toEqual('[й]іх');
      });
      it(' іх ->  [й]іх', () => {
        expect(service.replaceI(' іх')).toEqual(' [й]іх');
      });
      it('.іх -> .[й]іх', () => {
        expect(service.replaceI('.іх')).toEqual('.[й]іх');
      });
      it('іхні -> [й]іхні', () => {
        expect(service.replaceI('іхні')).toEqual('[й]іхні');
      });
      it('ім -> [й]ім', () => {
        expect(service.replaceI('ім')).toEqual('[й]ім');
      });
      it('іншы -> [й]іншы', () => {
        expect(service.replaceI('іншы')).toEqual('[й]іншы');
      });
      xit('іголка -> іголка', () => {
        expect(service.replaceI('іголка')).toEqual('іголка');
      });
      xit('.іголка -> .іголка', () => {
        expect(service.replaceI('.іголка')).toEqual('.іголка');
      });
      xit(' іголка ->  іголка', () => {
        expect(service.replaceI(' іголка')).toEqual(' іголка');
      });
    });
    describe('і ў сярэдзіне альбо на канцы слова пасля галоснага вымаўляецца як спалучэнне й з і (йі)', () => {
      it('краіна -> кра[й]іна', () => {
        expect(service.replaceI('краіна')).toEqual('кра[й]іна');
      });
      it('ручаіна -> руча[й]іна', () => {
        expect(service.replaceI('ручаіна')).toEqual('руча[й]іна');
      });
      it('тваіх -> тва[й]іх', () => {
        expect(service.replaceI('тваіх')).toEqual('тва[й]іх');
      });
      it('сваіх -> сва[й]іх', () => {
        expect(service.replaceI('сваіх')).toEqual('сва[й]іх');
      });
      it('у маі -> у ма[й]і', () => {
        expect(service.replaceI('у маі')).toEqual('у ма[й]і');
      });
      it('у родным краі -> у родным кра[й]і', () => {
        expect(service.replaceI('у родным краі')).toEqual('у родным кра[й]і');
      });
      it('у бярозавым гаі -> у бярозавым га[й]і', () => {
        expect(service.replaceI('у бярозавым гаі')).toEqual('у бярозавым га[й]і');
      });
    });
    describe('Калі насля слована на галосны няма паузы або яна кароткая, ненаціскны і ў незапазычаных словах вымаўляецца як й або як спалучэнне й з і (йі)', () => {
      xit('паслалі да Івана -> паслалі да [й]вана', () => {
        expect(service.replaceI('паслалі да Івана')).toEqual('паслалі да [й]вана');
      });
      xit('вазьмі іголку -> вазьмі [й]голку', () => {
        expect(service.replaceI('вазьмі іголку')).toEqual('вазьмі [й]голку');
      });
      xit('дарога на Івацэвічы -> дарога на [й]вацэвічы', () => {
        expect(service.replaceI('дарога на Івацэвічы')).toEqual('дарога на [й]вацэвічы');
      });
      xit('па іржышчы -> па [й]ржышчы', () => {
        expect(service.replaceI('па іржышчы')).toEqual('па [й]ржышчы');
      });
      xit('спявала, іголка -> спявала, іголка', () => {
        expect(service.replaceI('спявала, іголка')).toEqual('спявала, іголка');
      });
      it('прамень іржышча -> прамень іржышча', () => {
        expect(service.replaceI('прамень іржышча')).toEqual('прамень іржышча');
      });
    });
    describe('Злучнік і часціца і пасля слова на галосны пры адсутнасці працяглай паўзы вымаўляецца як й', () => {
      it('збяруся і пайду -> збяруся [й] пайду', () => {
        expect(service.replaceI('збяруся і пайду')).toEqual('збяруся [й] пайду');
      });
      it('бацька і сын -> бацька [й] сын', () => {
        expect(service.replaceI('бацька і сын')).toEqual('бацька [й] сын');
      });
      it('замля і неба -> замля [й] неба', () => {
        expect(service.replaceI('замля і неба')).toEqual('замля [й] неба');
      });
      it('прамень і неба -> прамень і неба', () => {
        expect(service.replaceI('прамень і неба')).toEqual('прамень і неба');
      });
    });
    describe('і пасля слоў, якія заканчваюцца на цвёрды зычны, вымаўляецца як ы', () => {
      it('ён ішоў -> ён [ы]шоў', () => {
        expect(service.replaceI('ён ішоў')).toEqual('ён [ы]шоў');
      });
      it('голуп і галубка -> голуп [ы] галубка', () => {
        expect(service.replaceI('голуп і галубка')).toEqual('голуп [ы] галубка');
      });
      it('лён і каноплі -> лён [ы] каноплі', () => {
        expect(service.replaceI('лён і каноплі')).toEqual('лён [ы] каноплі');
      });
      it('герб і сцяг -> герб [ы] сцяг', () => {
        expect(service.replaceI('герб і сцяг')).toEqual('герб [ы] сцяг');
      });
      it('без ілюзій -> без [ы]люзій', () => {
        expect(service.replaceI('без ілюзій')).toEqual('без [ы]люзій');
      });
      it('прамень і неба -> прамень і неба', () => {
        expect(service.replaceI('прамень і неба')).toEqual('прамень і неба');
      });
    });
    // Немагчыма выканаць без марфалагічнага аналізу
    xdescribe('У складаных словах пасля цвёрдага зычнага і вымаўляецца як ы', () => {
      it('міжінстытуцкі -> між[ы]нстытуцкі', () => {
        expect(service.replaceI('міжінстытуцкі')).toEqual('між[ы]нстытуцкі');
      });
      it('медінстытут -> мед[ы]нстытут', () => {
        expect(service.replaceI('медінстытут')).toEqual('мед[ы]нстытут');
      });
      it('бортінжынер -> борт[ы]нжынер', () => {
        expect(service.replaceI('бортінжынер')).toEqual('борт[ы]нжынер');
      });
    });
  });
  xdescribe('Галосны у', () => {
    xdescribe('У словах, якія абазначаюць прозвішчы, імёны, геаграфічныя назвы, у вымаўляецца як ў.', () => { });
    xdescribe('У запазычаных словах розных значэнняў у вымаўляецца як ў.', () => { });
    xdescribe('У сярэдзіне сказа пасля знака прыпынку, калі ў прамаўленні няма паўзы або яна кароткая, у вымаўляецца як ў', () => { });
  });
  xdescribe('Галосныя е, ё, ю, я', () => {
  });
  xdescribe('Зычныя й, ў', () => {
  });
  describe('Зычныя т, д', () => {
    describe('т перад звонкімі зычнымі б, д у сярэдзіне слова вымаўляецца як д', () => {
      it('футбол -> фу[д]бол', () => {
        expect(service.replaceT('футбол')).toEqual('фу[д]бол');
      });
      it('дзетдом -> дзе[д]дом', () => {
        expect(service.replaceT('дзетдом')).toEqual('дзе[д]дом');
      });
      it('баскетбол -> баске[д]бол', () => {
        expect(service.replaceT('баскетбол')).toEqual('баске[д]бол');
      });
      it('дзетдомавец -> дзе[д]домавец', () => {
        expect(service.replaceT('дзетдомавец')).toEqual('дзе[д]домавец');
      });
      it('дзетдомаўка -> дзе[д]домаўка', () => {
        expect(service.replaceT('дзетдомаўка')).toEqual('дзе[д]домаўка');
      });
      it('вопратка -> вопратка', () => {
        expect(service.replaceT('вопратка')).toEqual('вопратка');
      });
    });
    xdescribe('Калі ў слове побач стаяць два т, то яны вымаўляюцца як асобныя гукі.', () => { });
    describe('Спалучэнне т з наступнай афрыкатай ц утварае падоўжаную афрыкату цц.', () => {
      it('не ўсякай чутцы вер -> не ўсякай чу[ц]цы вер', () => {
        expect(service.replaceT('не ўсякай чутцы вер')).toEqual('не ўсякай чу[ц]цы вер');
      });
      it('сітцо -> сі[ц]цо', () => {
        expect(service.replaceT('сітцо')).toEqual('сі[ц]цо');
      });
      it('тваёй матцы рады ў кожнай хатцы -> тваёй ма[ц]цы рады ў кожнай ха[ц]цы', () => {
        expect(service.replaceT('тваёй матцы рады ў кожнай хатцы')).toEqual('тваёй ма[ц]цы рады ў кожнай ха[ц]цы');
      });
    });
    xdescribe('д на канцы слова аглушаецца і вымаўляеца як т.', () => {
      it('калі маё не ў лад, то я са сваім назад -> калі маё не ў ла[т], то я са сваім наза[т]', () => {
        expect(service.replaceD('калі маё не ў лад, то я са сваім назад')).toEqual('калі маё не ў ла[т], то я са сваім наза[т]');
      });
      it('кожны гад мае свой яд -> кожны га[т] мае свой я[т]', () => {
        expect(service.replaceD('кожны гад мае свой яд')).toEqual('кожны га[т] мае свой я[т]');
      });
      it('трапіў у нерат, ні ўзад, ні ўперад -> трапіў у нерат, ні ўза[т], ні ўпера[т]', () => {
        expect(service.replaceD('трапіў у нерат, ні ўзад, ні ўперад')).toEqual('трапіў у нерат, ні ўза[т], ні ўпера[т]');
      });
    });
    xdescribe('Калі ў слове побач стаяць два д, то яны вымаўляюцца як асобныя гукі.', () => { });
    describe('д у сярэдзіне слова перад глухімі зычнымі вымаўляецаа як т.', () => {
      it('адхадзіў -> а[т]хадзіў', () => {
        expect(service.replaceD('адхадзіў')).toEqual('а[т]хадзіў');
      });
      it('брыдкі -> бры[т]кі', () => {
        expect(service.replaceD('брыдкі')).toEqual('бры[т]кі');
      });
      it('адтуль -> а[т]туль', () => {
        expect(service.replaceD('адтуль')).toEqual('а[т]туль');
      });
      it('надхмар\'е -> на[т]хмар\'е', () => {
        expect(service.replaceD('надхмар\'е')).toEqual('на[т]хмар\'е');
      });
      it('падшываць -> па[т]шываць', () => {
        expect(service.replaceD('падшываць')).toEqual('па[т]шываць');
      });
      it('падзываць -> падзываць', () => {
        expect(service.replaceD('падзываць')).toEqual('падзываць');
      });
      it('падазваць -> падазваць', () => {
        expect(service.replaceD('падазваць')).toEqual('падазваць');
      });
    });
    describe('Спалучэнне д з наступнай мяккай афрыкатай дзь утварае падвойную звонкую афрыкату дзьдзь.', () => {
      it('паддзёўка -> па[дзь]дзёўка', () => {
        expect(service.replaceD('паддзёўка')).toEqual('па[дзь]дзёўка');
      });
      it('бязлюддзе -> бязлю[дзь]дзе', () => {
        expect(service.replaceD('бязлюддзе')).toEqual('бязлю[дзь]дзе');
      });
      it('аддзячыць -> а[дзь]дзячыць', () => {
        expect(service.replaceD('аддзячыць')).toEqual('а[дзь]дзячыць');
      });
      it('аддза -> аддза', () => {
        expect(service.replaceD('аддза')).toEqual('аддза');
      });
    });
    describe('Спалучэнне д прыстаўкі ці прыназоўніка з наступнай афрыкатай ц, ць вымаўляецца як тц або падвойная афрыката цц, цьць.', () => {
      it('пад цэглаю -> па[ц] цэглаю', () => {
        expect(service.replaceD('пад цэглаю')).toEqual('па[ц] цэглаю');
      });
      it('перапад цэглы -> перапа[т] цэглы', () => {
        expect(service.replaceD('перапад цэглы')).toEqual('перапа[т] цэглы');
      });
      it('адцадзіць -> а[ц]цадзіць', () => {
        expect(service.replaceD('адцадзіць')).toEqual('а[ц]цадзіць');
      });
      it('пад цяжарам -> па[ць] цяжарам', () => {
        expect(service.replaceD('пад цяжарам')).toEqual('па[ць] цяжарам');
      });
      it('адцьвісьці -> а[ць]цьвісьці', () => {
        expect(service.replaceD('адцьвісьці')).toEqual('а[ць]цьвісьці');
      });
      it('падцепліваць -> па[ць]цепліваць', () => {
        expect(service.replaceD('падцепліваць')).toEqual('па[ць]цепліваць');
      });
      xit('перападцельмік -> перападцельмік', () => {
        expect(service.replaceD('перападцельмік')).toEqual('перападцельмік');
      });
    });
    describe('Спалучэнне д і свісцячага с перад т вымаўляецца як ц.', () => {
      it('самаўладства -> самаўла[ц]тва', () => {
        expect(service.replaceD('самаўладства')).toEqual('самаўла[ц]тва');
      });
      it('справаводства -> справаво[ц]тва', () => {
        expect(service.replaceD('справаводства')).toEqual('справаво[ц]тва');
      });
      it('падстава -> па[ц]става', () => {
        expect(service.replaceD('падстава')).toEqual('па[ц]става');
      });
      it('з-пад Століна -> з-пад Століна', () => {
        expect(service.replaceD('з-пад Століна')).toEqual('з-па[ц]толіна');
      });
    });
    describe('У спалучэнні д і свісцячага с перад к аглушаецца і вымаўляецца як т або афрыката ц.', () => {
      it('адскочыць -> а[ц]скочыць', () => {
        expect(service.replaceD('адскочыць')).toEqual('а[ц]скочыць');
      });
      it('адскрэбці -> а[ц]скрэбці', () => {
        expect(service.replaceD('адскрэбці')).toEqual('а[ц]скрэбці');
      });
      it('бургундскае віно -> бургун[ц]кае віно', () => {
        expect(service.replaceD('бургундскае віно')).toEqual('бургун[ц]кае віно');
      });
      it('наваградскі замак -> навагра[ц]кі замак', () => {
        expect(service.replaceD('наваградскі замак')).toEqual('навагра[ц]кі замак');
      });
      it('добрасуседскі -> добрасусе[ц]кі', () => {
        expect(service.replaceD('добрасуседскі')).toEqual('добрасусе[ц]кі');
      });
    });
    xdescribe('У спалучэнні дс, дзе д з’яўляецца часткаю прыстаўкі ці прыназоўніка, д можа вымаўляцца як т або афрыката ц, ць.', () => { });
    describe('Спалучэнне д і т з наступнай афрыкатай ч утварае падоўжаную афрыкату чч.', () => {
      // Д
      it('гладчэйшы -> гла[ч]чэйшы', () => {
        expect(service.replaceD('гладчэйшы')).toEqual('гла[ч]чэйшы');
      });
      it('дасведчанасць -> дасве[ч]чанасць', () => {
        expect(service.replaceD('дасведчанасць')).toEqual('дасве[ч]чанасць');
      });
      it('адчапіся -> а[ч]чапіся', () => {
        expect(service.replaceD('адчапіся')).toEqual('а[ч]чапіся');
      });
      // Т
      it('здабытчык -> здабы[ч]чык', () => {
        expect(service.replaceT('здабытчык')).toEqual('здабы[ч]чык');
      });
      it('дыспетчар -> дыспе[ч]чар', () => {
        expect(service.replaceT('дыспетчар')).toEqual('дыспе[ч]чар');
      });
    });
  });
  describe('Зычныя с, з', () => {
    describe('с перад мяккімі зычнымі с, л, м, н, ц, п, в вымаўляецца мякка.', () => {
      //с
      it('ссівеў -> с[ь]сівеў', () => {
        expect(service.replaceMiak('ссівеў').replace(/Ь/g, '[ь]')).toEqual('с[ь]сівеў');
      });
      xit('бяссмерце -> бяс[ь]с[ь]мерце', () => {
        expect(service.replaceMiak('бяссмерце').replace(/Ь/g, '[ь]')).toEqual('бяс[ь]с[ь]мерце');
      });
      it('воссю -> вос[ь]сю', () => {
        expect(service.replaceMiak('воссю').replace(/Ь/g, '[ь]')).toEqual('вос[ь]сю');
      });
      it('кассё -> кас[ь]сё', () => {
        expect(service.replaceMiak('кассё').replace(/Ь/g, '[ь]')).toEqual('кас[ь]сё');
      });
      it('уссесці -> ус[ь]сес[ь]ці', () => {
        expect(service.replaceMiak('уссесці').replace(/Ь/g, '[ь]')).toEqual('ус[ь]сес[ь]ці');
      });
      it('церассядзёлак -> церас[ь]сядзёлак', () => {
        expect(service.replaceMiak('церассядзёлак').replace(/Ь/g, '[ь]')).toEqual('церас[ь]сядзёлак');
      });
      //л
      it('слёзы -> с[ь]лёзы', () => {
        expect(service.replaceMiak('слёзы').replace(/Ь/g, '[ь]')).toEqual('с[ь]лёзы');
      });
      it('сляпіць -> с[ь]ляпіць', () => {
        expect(service.replaceMiak('сляпіць').replace(/Ь/g, '[ь]')).toEqual('с[ь]ляпіць');
      });
      it('след у след -> с[ь]лед у с[ь]лед', () => {
        expect(service.replaceMiak('след у след').replace(/Ь/g, '[ь]')).toEqual('с[ь]лед у с[ь]лед');
      });
      it('слізгота -> с[ь]лізгота', () => {
        expect(service.replaceMiak('слізгота').replace(/Ь/g, '[ь]')).toEqual('с[ь]лізгота');
      });
      it('слюда -> с[ь]люда', () => {
        expect(service.replaceMiak('слюда').replace(/Ь/g, '[ь]')).toEqual('с[ь]люда');
      });
      it('цесля -> цес[ь]ля', () => {
        expect(service.replaceMiak('цесля').replace(/Ь/g, '[ь]')).toEqual('цес[ь]ля');
      });
      //м
      it('смерч -> с[ь]мерч', () => {
        expect(service.replaceMiak('смерч').replace(/Ь/g, '[ь]')).toEqual('с[ь]мерч');
      });
      it('смяшыць -> с[ь]мяшыць', () => {
        expect(service.replaceMiak('смяшыць').replace(/Ь/g, '[ь]')).toEqual('с[ь]мяшыць');
      });
      //н
      it('снедаць -> с[ь]недаць', () => {
        expect(service.replaceMiak('снедаць').replace(/Ь/g, '[ь]')).toEqual('с[ь]недаць');
      });
      it('у Дзісне -> у Дзіс[ь]не', () => {
        expect(service.replaceMiak('у Дзісне').replace(/Ь/g, '[ь]')).toEqual('у Дзіс[ь]не');
      });
      //ц
      xit('учарсцвелы -> учарс[ь]ц[ь]велы', () => {
        expect(service.replaceMiak('учарсцвелы').replace(/Ь/g, '[ь]')).toEqual('учарс[ь]ц[ь]велы');
      });
      it('шасцярня -> шас[ь]цярня', () => {
        expect(service.replaceMiak('шасцярня').replace(/Ь/g, '[ь]')).toEqual('шас[ь]цярня');
      });
      it('чысцюткі -> чыс[ь]цюткі', () => {
        expect(service.replaceMiak('чысцюткі').replace(/Ь/g, '[ь]')).toEqual('чыс[ь]цюткі');
      });
      it('дзвесце -> дз[ь]вес[ь]це', () => {
        expect(service.replaceMiak('дзвесце').replace(/Ь/g, '[ь]')).toEqual('дз[ь]вес[ь]це');
      });
      it('дасціпнасць -> дас[ь]ціпнас[ь]ць', () => {
        expect(service.replaceMiak('дасціпнасць').replace(/Ь/g, '[ь]')).toEqual('дас[ь]ціпнас[ь]ць');
      });
      it('сцізорык -> с[ь]цізорык', () => {
        expect(service.replaceMiak('сцізорык').replace(/Ь/g, '[ь]')).toEqual('с[ь]цізорык');
      });
      //п
      it('спектакль -> с[ь]пектакль', () => {
        expect(service.replaceMiak('спектакль').replace(/Ь/g, '[ь]')).toEqual('с[ь]пектакль');
      });
      it('спіна -> с[ь]піна', () => {
        expect(service.replaceMiak('спіна').replace(/Ь/g, '[ь]')).toEqual('с[ь]піна');
      });
      //в
      it('светапогляд -> с[ь]ветапогляд', () => {
        expect(service.replaceMiak('светапогляд').replace(/Ь/g, '[ь]')).toEqual('с[ь]ветапогляд');
      });
      it('свяжэйшы -> с[ь]вяжэйшы', () => {
        expect(service.replaceMiak('свяжэйшы').replace(/Ь/g, '[ь]')).toEqual('с[ь]вяжэйшы');
      });
    });
    describe('с, сь перад звонкімі вымаўляюцца як з, зь.', () => {
      it('хрэсьбіны -> хрэ[зь]біны', () => {
        expect(service.replaceS(service.replaceMiak('хрэсьбіны'))).toEqual('хрэ[зь]біны');
      });
      it('касьба -> ка[зь]ба', () => {
        expect(service.replaceS(service.replaceMiak('касьба'))).toEqual('ка[зь]ба');
      });
      it('носьбіт -> но[зь]біт', () => {
        expect(service.replaceS(service.replaceMiak('носьбіт'))).toEqual('но[зь]біт');
      });
      it('просьба -> про[зь]ба', () => {
        expect(service.replaceS(service.replaceMiak('просьба'))).toEqual('про[зь]ба');
      });
      it('солсберскі -> сол[зь]берскі', () => {
        expect(service.replaceS(service.replaceMiak('солсберскі'))).toEqual('сол[зь]берскі');
      });
      it('фасген -> фа[з]ген', () => {
        expect(service.replaceS(service.replaceMiak('фасген'))).toEqual('фа[з]ген');
      });
      it('бейсбол -> бей[з]бол', () => {
        expect(service.replaceS(service.replaceMiak('бейсбол'))).toEqual('бей[з]бол');
      });
      it('бейсбаліст -> бей[з]баліст', () => {
        expect(service.replaceS(service.replaceMiak('бейсбаліст'))).toEqual('бей[з]баліст');
      });
      it('дысгармонія -> ды[з]гармонія', () => {
        expect(service.replaceS(service.replaceMiak('дысгармонія'))).toEqual('ды[з]гармонія');
      });
      it('айсберг -> ай[з]берг', () => {
        expect(service.replaceS(service.replaceMiak('айсберг'))).toEqual('ай[зь]берг');
      });
      it('неспакой -> неспакой', () => {
        expect(service.replaceS(service.replaceMiak('неспакой'))).toEqual('неспакой');
      });
    });
    describe('с перад мяккімі зычнымі к, ф, х вымаўляецца цвёрда.', () => {
      it('скеміць -> скеміць', () => {
        expect(service.replaceS(service.replaceMiak('скеміць')).replace(/Ь/g, '[ь]')).toEqual('скеміць');
      });
      it('скіба -> скіба', () => {
        expect(service.replaceS(service.replaceMiak('скіба')).replace(/Ь/g, '[ь]')).toEqual('скіба');
      });
      it('сфера -> сфера', () => {
        expect(service.replaceS(service.replaceMiak('сфера')).replace(/Ь/g, '[ь]')).toEqual('сфера');
      });
      it('сфінкс -> сфінкс', () => {
        expect(service.replaceS(service.replaceMiak('сфінкс')).replace(/Ь/g, '[ь]')).toEqual('сфінкс');
      });
      it('схема -> схема', () => {
        expect(service.replaceS(service.replaceMiak('схема')).replace(/Ь/g, '[ь]')).toEqual('схема');
      });
      it('схільнасці -> схільнас[ь]ці', () => {
        expect(service.replaceS(service.replaceMiak('схільнасці')).replace(/Ь/g, '[ь]')).toEqual('схільнас[ь]ці');
      });
    });
    describe('с перад зычнымі ш, ч вымаўляецца як ш.', () => {
      it('сшытак -> [ш]шытак', () => {
        expect(service.replaceS('сшытак')).toEqual('[ш]шытак');
      });
      it('сшараваў -> [ш]шараваў', () => {
        expect(service.replaceS('сшараваў')).toEqual('[ш]шараваў');
      });
      it('расшыраны -> ра[ш]шыраны', () => {
        expect(service.replaceS('расшыраны')).toEqual('ра[ш]шыраны');
      });
      it('сшыць -> [ш]шыць', () => {
        expect(service.replaceS('сшыць')).toEqual('[ш]шыць');
      });
      it('сшаткаваць -> [ш]шаткаваць', () => {
        expect(service.replaceS('сшаткаваць')).toEqual('[ш]шаткаваць');
      });
      it('сшэрхлы -> [ш]шэрхлы', () => {
        expect(service.replaceS('сшэрхлы')).toEqual('[ш]шэрхлы');
      });
      //
      it('счакаць -> [ш]чакаць', () => {
        expect(service.replaceS('счакаць')).toEqual('[ш]чакаць');
      });
      it('счарнець -> [ш]чарнець', () => {
        expect(service.replaceS('счарнець')).toEqual('[ш]чарнець');
      });
      it('счытваць -> [ш]чытваць', () => {
        expect(service.replaceS('счытваць')).toEqual('[ш]чытваць');
      });
      it('счэрчваць -> [ш]чэрчваць', () => {
        expect(service.replaceS('счэрчваць')).toEqual('[ш]чэрчваць');
      });
      it('счысціць -> [ш]чысціць', () => {
        expect(service.replaceS('счысціць')).toEqual('[ш]чысціць');
      });
      it('счэплівацца -> [ш]чэплівацца', () => {
        expect(service.replaceS('счэплівацца')).toEqual('[ш]чэплівацца');
      });
    });
    describe('з перад мяккімі зычнымі дз, л, з, б, в, м, н вымаўляецца мякка.', () => { 
      //дз
      it('здзейсніць -> з[ь]дзейс[ь]ніць', () => {
        expect(service.replaceS(service.replaceMiak('здзейсніць')).replace(/Ь/g, '[ь]')).toEqual('з[ь]дзейс[ь]ніць');
      });
      it('з Дзімам -> з[ь] Дзімам', () => {
        expect(service.replaceS(service.replaceMiak('з Дзімам')).replace(/Ь/g, '[ь]')).toEqual('з[ь] Дзімам');
      });
      it('без дзяцей -> без[ь] дзяцей', () => {
        expect(service.replaceS(service.replaceMiak('без дзяцей')).replace(/Ь/g, '[ь]')).toEqual('без[ь] дзяцей');
      });
      it('здзівіць -> з[ь]дзівіць', () => {
        expect(service.replaceS(service.replaceMiak('здзівіць')).replace(/Ь/g, '[ь]')).toEqual('з[ь]дзівіць');
      });
      //л
      it('з лета -> з[ь] лета', () => {
        expect(service.replaceS(service.replaceMiak('з лета')).replace(/Ь/g, '[ь]')).toEqual('з[ь] лета');
      });
      it('з лёну -> з[ь] лёну', () => {
        expect(service.replaceS(service.replaceMiak('з лёну')).replace(/Ь/g, '[ь]')).toEqual('з[ь] лёну');
      });
      it('цераз лес -> цераз[ь] лес', () => {
        expect(service.replaceS(service.replaceMiak('цераз лес')).replace(/Ь/g, '[ь]')).toEqual('цераз[ь] лес');
      });
      it('пералез лес -> пералез лес', () => {
        expect(service.replaceS(service.replaceMiak('пералез лес')).replace(/Ь/g, '[ь]')).toEqual('пералез лес');
      });
      it('злёг -> з[ь]лёг', () => {
        expect(service.replaceS(service.replaceMiak('злёг')).replace(/Ь/g, '[ь]')).toEqual('з[ь]лёг');
      });
      it('безліч -> без[ь]ліч', () => {
        expect(service.replaceS(service.replaceMiak('безліч')).replace(/Ь/g, '[ь]')).toEqual('без[ь]ліч');
      });
      //з
      it('ззяе -> з[ь]зяе', () => {
        expect(service.replaceS(service.replaceMiak('ззяе')).replace(/Ь/g, '[ь]')).toEqual('з[ь]зяе');
      });
      it('з зімы -> з[ь] зімы', () => {
        expect(service.replaceS(service.replaceMiak('з зімы')).replace(/Ь/g, '[ь]')).toEqual('з[ь] зімы');
      });
      it('з Зінаю -> з[ь] Зінаю', () => {
        expect(service.replaceS(service.replaceMiak('з Зінаю')).replace(/Ь/g, '[ь]')).toEqual('з[ь] Зінаю');
      });
      it('без зярняці -> без[ь] зярняці', () => {
        expect(service.replaceS(service.replaceMiak('без зярняці')).replace(/Ь/g, '[ь]')).toEqual('без[ь] зярняці');
      });
      it('з зямлянкі -> з[ь] зямлянкі', () => {
        expect(service.replaceS(service.replaceMiak('з зямлянкі')).replace(/Ь/g, '[ь]')).toEqual('з[ь] зямлянкі');
      });
      //б
      it('збянтэжанасць -> з[ь]бянтэжанас[ь]ць', () => {
        expect(service.replaceS(service.replaceMiak('збянтэжанасць')).replace(/Ь/g, '[ь]')).toEqual('з[ь]бянтэжанас[ь]ць');
      });
      it('з берагу -> з[ь] берагу', () => {
        expect(service.replaceS(service.replaceMiak('з берагу')).replace(/Ь/g, '[ь]')).toEqual('з[ь] берагу');
      });
      it('збегчы -> з[ь]бегчы', () => {
        expect(service.replaceS(service.replaceMiak('збегчы')).replace(/Ь/g, '[ь]')).toEqual('з[ь]бегчы');
      });
      it('збірацца -> з[ь]бірацца', () => {
        expect(service.replaceS(service.replaceMiak('збірацца')).replace(/Ь/g, '[ь]')).toEqual('з[ь]бірацца');
      });
      //в
      it('звесткі -> з[ь]весткі', () => {
        expect(service.replaceS(service.replaceMiak('звесткі')).replace(/Ь/g, '[ь]')).toEqual('з[ь]весткі');
      });
      it('з Вераю -> з[ь] Вераю', () => {
        expect(service.replaceS(service.replaceMiak('з Вераю')).replace(/Ь/g, '[ь]')).toEqual('з[ь] Вераю');
      });
      it('звініць -> з[ь]вініць', () => {
        expect(service.replaceS(service.replaceMiak('звініць')).replace(/Ь/g, '[ь]')).toEqual('з[ь]вініць');
      });
      it('звярынец -> з[ь]вярынец', () => {
        expect(service.replaceS(service.replaceMiak('звярынец')).replace(/Ь/g, '[ь]')).toEqual('з[ь]вярынец');
      });
      it('звязаць -> з[ь]вязаць', () => {
        expect(service.replaceS(service.replaceMiak('звязаць')).replace(/Ь/g, '[ь]')).toEqual('з[ь]вязаць');
      });
      //м
      it('змяя -> з[ь]мяя', () => {
        expect(service.replaceS(service.replaceMiak('змяя')).replace(/Ь/g, '[ь]')).toEqual('з[ь]мяя');
      });
      it('цераз Мір -> цераз[ь] Мір', () => {
        expect(service.replaceS(service.replaceMiak('цераз Мір')).replace(/Ь/g, '[ь]')).toEqual('цераз[ь] Мір');
      });
      it('з месца -> з[ь] месца', () => {
        expect(service.replaceS(service.replaceMiak('з месца')).replace(/Ь/g, '[ь]')).toEqual('з[ь] месца');
      });
      it('змены -> з[ь]мены', () => {
        expect(service.replaceS(service.replaceMiak('змены')).replace(/Ь/g, '[ь]')).toEqual('з[ь]мены');
      });
      it('змяркаецца -> з[ь]мяркаецца', () => {
        expect(service.replaceS(service.replaceMiak('змяркаецца')).replace(/Ь/g, '[ь]')).toEqual('з[ь]мяркаецца');
      });
      //н
    });
    describe('з перад мяккімі зычнымі п, с, ц аглушаеццаі вымаўляецца мякка.', () => { 
      //п
      it('з Петрыкава -> [сь] Петрыкава', () => {
        expect(service.replaceZ(service.replaceMiak('з Петрыкава')).replace(/Ь/g, '[ь]')).toEqual('[сь] Петрыкава');
      });
      it('без пячаткі -> бе[сь] пячаткі', () => {
        expect(service.replaceZ(service.replaceMiak('без пячаткі')).replace(/Ь/g, '[ь]')).toEqual('бе[сь] пячаткі');
      });
      it('з Петрусём -> [сь] Петрусём', () => {
        expect(service.replaceZ(service.replaceMiak('з Петрусём')).replace(/Ь/g, '[ь]')).toEqual('[сь] Петрусём');
      });
      it('з песнямі -> [сь] пес[ь]нямі', () => {
        expect(service.replaceZ(service.replaceMiak('з песнямі')).replace(/Ь/g, '[ь]')).toEqual('[сь] пес[ь]нямі');
      });
      it('з перамогай -> [сь] перамогай', () => {
        expect(service.replaceZ(service.replaceMiak('з перамогай')).replace(/Ь/g, '[ь]')).toEqual('[сь] перамогай');
      });
      //с
      it('з сенажаці -> [сь] сенажаці', () => {
        expect(service.replaceZ(service.replaceMiak('з сенажаці')).replace(/Ь/g, '[ь]')).toEqual('[сь] сенажаці');
      });
      it('з семінара -> [сь] семінара', () => {
        expect(service.replaceZ(service.replaceMiak('з семінара')).replace(/Ь/g, '[ь]')).toEqual('[сь] семінара');
      });
      it('без Сяргея -> бе[сь] Сяргея', () => {
        expect(service.replaceZ(service.replaceMiak('без Сяргея')).replace(/Ь/g, '[ь]')).toEqual('бе[сь] Сяргея');
      });
      it('цераз Свіслач -> цера[сь] с[ь]віслач', () => {
        expect(service.replaceZ(service.replaceMiak('цераз Свіслач')).replace(/Ь/g, '[ь]')).toEqual('цера[сь] с[ь]віслач');
      });
      //ц
      it('з цеста -> [сь] цеста', () => {
        expect(service.replaceZ(service.replaceMiak('з цеста')).replace(/Ь/g, '[ь]')).toEqual('[сь] цеста');
      });
      it('з цёскам -> [сь] цёскам', () => {
        expect(service.replaceZ(service.replaceMiak('з цёскам')).replace(/Ь/g, '[ь]')).toEqual('[сь] цёскам');
      });
      it('без цвіка -> бе[сь] ц[ь]віка', () => {
        expect(service.replaceZ(service.replaceMiak('без цвіка')).replace(/Ь/g, '[ь]')).toEqual('бе[сь] ц[ь]віка');
      });
    });
    xdescribe('з, зь на канцы слова аглушаюцца і вымаўляюцца як с, сь.', () => { 
      it('гразь -> гра[сь]', () => {
        expect(service.replaceZ(service.replaceMiak('гразь')).replace(/Ь/g, '[ь]')).toEqual('гра[сь]');
      });
      it('мазь -> ма[сь]', () => {
        expect(service.replaceZ(service.replaceMiak('мазь')).replace(/Ь/g, '[ь]')).toEqual('ма[сь]');
      });
      it('злазь -> зла[сь]', () => {
        expect(service.replaceZ(service.replaceMiak('злазь')).replace(/Ь/g, '[ь]')).toEqual('зла[сь]');
      });
      it('воз -> во[с]', () => {
        expect(service.replaceZ(service.replaceMiak('воз')).replace(/Ь/g, '[ь]')).toEqual('во[с]');
      });
      it('вёз -> вё[с]', () => {
        expect(service.replaceZ(service.replaceMiak('вёз')).replace(/Ь/g, '[ь]')).toEqual('вё[с]');
      });
    });
    describe('з перад глухімі ш, ч вымаўляецца як ш.', () => { 
      //ш
      it('з шафы -> [ш] шафы', () => {
        expect(service.replaceZ(service.replaceMiak('з шафы')).replace(/Ь/g, '[ь]')).toEqual('[ш] шафы');
      });
      it('цераз Шклоў -> цера[ш] Шклоў', () => {
        expect(service.replaceZ(service.replaceMiak('цераз Шклоў')).replace(/Ь/g, '[ь]')).toEqual('цера[ш] Шклоў');
      });
      //ч
      it('грузчык -> гру[ш]чык', () => {
        expect(service.replaceZ(service.replaceMiak('грузчык')).replace(/Ь/g, '[ь]')).toEqual('гру[ш]чык');
      });
      it('з чабору -> [ш] чабору', () => {
        expect(service.replaceZ(service.replaceMiak('з чабору')).replace(/Ь/g, '[ь]')).toEqual('[ш] чабору');
      });
    });
    describe('з перад цвёрдымі глухімі зычнымі к, х, т, с, ц, п аглушаецца і вымаўляецца як с.', () => {
      //к
      it('падмазка -> падма[с]ка', () => {
        expect(service.replaceZ(service.replaceMiak('падмазка')).replace(/Ь/g, '[ь]')).toEqual('падма[с]ка');
      });
      it('з калена -> [с] калена', () => {
        expect(service.replaceZ(service.replaceMiak('з калена')).replace(/Ь/g, '[ь]')).toEqual('[с] калена');
      });
      it('без клею -> бе[с] клею', () => {
        expect(service.replaceZ(service.replaceMiak('без клею')).replace(/Ь/g, '[ь]')).toEqual('бе[с] клею');
      });
      it('блізка -> блі[с]ка', () => {
        expect(service.replaceZ(service.replaceMiak('блізка')).replace(/Ь/g, '[ь]')).toEqual('блі[с]ка');
      });
      //х
      it('з хваробаю -> [с] хваробаю', () => {
        expect(service.replaceZ(service.replaceMiak('з хваробаю')).replace(/Ь/g, '[ь]')).toEqual('[с] хваробаю');
      });
      it('без хвіліны -> бе[с] хвіліны', () => {
        expect(service.replaceZ(service.replaceMiak('без хвіліны')).replace(/Ь/g, '[ь]')).toEqual('бе[с] хвіліны');
      });
      it('з хутара -> [с] хутара', () => {
        expect(service.replaceZ(service.replaceMiak('з хутара')).replace(/Ь/g, '[ь]')).toEqual('[с] хутара');
      });
      //т
      it('з тваім -> [с] тваім', () => {
        expect(service.replaceZ(service.replaceMiak('з тваім')).replace(/Ь/g, '[ь]')).toEqual('[с] тваім');
      });
      it('без твайго -> бе[с] твайго', () => {
        expect(service.replaceZ(service.replaceMiak('без твайго')).replace(/Ь/g, '[ь]')).toEqual('бе[с] твайго');
      });
      it('з Талачына -> [с] Талачына', () => {
        expect(service.replaceZ(service.replaceMiak('з Талачына')).replace(/Ь/g, '[ь]')).toEqual('[с] Талачына');
      });
      //с
      it('з салам -> [с] салам', () => {
        expect(service.replaceZ(service.replaceMiak('з салам')).replace(/Ь/g, '[ь]')).toEqual('[с] салам');
      });
      it('без солі -> падма[с]ка', () => {
        expect(service.replaceZ(service.replaceMiak('без солі')).replace(/Ь/g, '[ь]')).toEqual('бе[с] солі');
      });
      it('з сітам -> [сь] сітам', () => {
        expect(service.replaceZ(service.replaceMiak('з сітам')).replace(/Ь/g, '[ь]')).toEqual('[сь] сітам');
      });
      it('з сырадою -> [с] сырадою', () => {
        expect(service.replaceZ(service.replaceMiak('з сырадою')).replace(/Ь/g, '[ь]')).toEqual('[с] сырадою');
      });
      it('з срэбра -> [с] срэбра', () => {
        expect(service.replaceZ(service.replaceMiak('з срэбра')).replace(/Ь/g, '[ь]')).toEqual('[с] срэбра');
      });
      //ц
      it('з царквы -> [с] царквы', () => {
        expect(service.replaceZ(service.replaceMiak('з царквы')).replace(/Ь/g, '[ь]')).toEqual('[с] царквы');
      });
      it('з цэглы -> [с] цэглы', () => {
        expect(service.replaceZ(service.replaceMiak('з цэглы')).replace(/Ь/g, '[ь]')).toEqual('[с] цэглы');
      });
      //п
      it('з пустога -> [с] пустога', () => {
        expect(service.replaceZ(service.replaceMiak('з пустога')).replace(/Ь/g, '[ь]')).toEqual('[с] пустога');
      });
      it('цераз плот -> цера[с] плот', () => {
        expect(service.replaceZ(service.replaceMiak('цераз плот')).replace(/Ь/g, '[ь]')).toEqual('цера[с] плот');
      });
      it('без пастуха -> бе[с] пастуха', () => {
        expect(service.replaceZ(service.replaceMiak('без пастуха')).replace(/Ь/g, '[ь]')).toEqual('бе[с] пастуха');
      });
      it('цераз Парыж -> цера[с] Парыж', () => {
        expect(service.replaceZ(service.replaceMiak('цераз Парыж')).replace(/Ь/g, '[ь]')).toEqual('цера[с] Парыж');
      });
     });
    describe('з перад зычным ж і афрыкатай дж вымаўляецца як ж.', () => { 
      //ж
      it('з журавін -> [ж] журавін', () => {
        expect(service.replaceZ(service.replaceMiak('з журавін')).replace(/Ь/g, '[ь]')).toEqual('[ж] журавін');
      });
      it('цераз Жлобін -> цера[ж] Жлобін', () => {
        expect(service.replaceZ(service.replaceMiak('цераз Жлобін')).replace(/Ь/g, '[ь]')).toEqual('цера[ж] Жлобін');
      });
      it('з жыта -> [ж] жыта', () => {
        expect(service.replaceZ(service.replaceMiak('з жыта')).replace(/Ь/g, '[ь]')).toEqual('[ж] жыта');
      });
      it('мазжачок -> ма[ж]жачок', () => {
        expect(service.replaceZ(service.replaceMiak('мазжачок')).replace(/Ь/g, '[ь]')).toEqual('ма[ж]жачок');
      });
      it('без жалеза -> бе[ж] жалеза', () => {
        expect(service.replaceZ(service.replaceMiak('без жалеза')).replace(/Ь/g, '[ь]')).toEqual('бе[ж] жалеза');
      });
      //дж
      it('бразджаць -> бра[ж]джаць', () => {
        expect(service.replaceZ(service.replaceMiak('бразджаць')).replace(/Ь/g, '[ь]')).toEqual('бра[ж]джаць');
      });
      it('заезджаны -> зае[ж]джаны', () => {
        expect(service.replaceZ(service.replaceMiak('заезджаны')).replace(/Ь/g, '[ь]')).toEqual('зае[ж]джаны');
      });
      it('з джунгляў -> [ж] джунгляў', () => {
        expect(service.replaceZ(service.replaceMiak('з джунгляў')).replace(/Ь/g, '[ь]')).toEqual('[ж] джунгляў');
      });
      it('цераз Джакарту -> цера[ж] Джакарту', () => {
        expect(service.replaceZ(service.replaceMiak('цераз Джакарту')).replace(/Ь/g, '[ь]')).toEqual('цера[ж] Джакарту');
      });
      it('язджалы -> я[ж]джалы', () => {
        expect(service.replaceZ(service.replaceMiak('язджалы')).replace(/Ь/g, '[ь]')).toEqual('я[ж]джалы');
      });
    });
    xdescribe('з перад мяккім зычным г вымаўляецца цвёрда.', () => { 
      it('згіб -> згіб', () => {
        expect(service.replaceZ(service.replaceMiak('згіб')).replace(/Ь/g, '[ь]')).toEqual('згіб');
      });
      it('з геаграфіі -> з геаграфіі', () => {
        expect(service.replaceZ(service.replaceMiak('з геаграфіі')).replace(/Ь/g, '[ь]')).toEqual('з геаграфіі');
      });
      it('без Генадзя -> без Генадзя', () => {
        expect(service.replaceZ(service.replaceMiak('без Генадзя')).replace(/Ь/g, '[ь]')).toEqual('без Генадзя');
      });
    });
    describe('з перад мяккімі глухімі к, x аглушаецца і вымаўляецца як с.', () => { 
      //к
      it('з Кемерава -> [с] Кемерава', () => {
        expect(service.replaceZ(service.replaceMiak('з Кемерава')).replace(/Ь/g, '[ь]')).toEqual('[с] Кемерава');
      });
      it('з Кёльна -> [с] Кёльна', () => {
        expect(service.replaceZ(service.replaceMiak('з Кёльна')).replace(/Ь/g, '[ь]')).toEqual('[с] Кёльна');
      });
      it('цераз Кенію -> цера[с] Кенію', () => {
        expect(service.replaceZ(service.replaceMiak('цераз Кенію')).replace(/Ь/g, '[ь]')).toEqual('цера[с] Кенію');
      });
      it('з келіха -> [с] келіха', () => {
        expect(service.replaceZ(service.replaceMiak('з келіха')).replace(/Ь/g, '[ь]')).toEqual('[с] келіха');
      });
      //х
      it('з хітрынкаю -> [с] хітрынкаю', () => {
        expect(service.replaceZ(service.replaceMiak('з хітрынкаю')).replace(/Ь/g, '[ь]')).toEqual('[с] хітрынкаю');
      });
      it('з хібамі -> [с] хібамі', () => {
        expect(service.replaceZ(service.replaceMiak('з хібамі')).replace(/Ь/g, '[ь]')).toEqual('[с] хібамі');
      });
      it('з хеўраю -> [с] хеўраю', () => {
        expect(service.replaceZ(service.replaceMiak('з хеўраю')).replace(/Ь/g, '[ь]')).toEqual('[с] хеўраю');
      });
      it('цераз Херсон -> цера[с] Херсон', () => {
        expect(service.replaceZ(service.replaceMiak('цераз Херсон')).replace(/Ь/g, '[ь]')).toEqual('цера[с] Херсон');
      });
    });
  });
  describe('Зычныя ш, ж', () => {
    describe('На канцы слова ж аглушаецца і вымаўляецца як ш.', () => { });
    describe('У спалучэнні жск пры вымаўленні выпадае ж.', () => { });
    describe('У спалучэнні шск пры вымаўленні выпадае ш.', () => { });
    describe('Спалучэнні шс, жс паміж галоснымі вымаўляюцца як падоўжаны мяккі сьсь.', () => { });
    describe('Спалучэнне ж і афрыкаты дж у сярэдзіне слова вымаўляецца як два асобныя гукі – ж-дж.', () => { });
    describe('На канцы слова спалучэнне ждж аглушаецца і вымаўляецца як шч.', () => { });
    describe('Пасля слова на галосны часціца ж аглушаецца і вымаўляецца як ш толькі ў тым выпадку, калі яна стаіць перад глухім зычным.', () => { });
    describe('У сярэдзіне слова перад глухімі ж аглушаецца і вымаўляецца як ш.', () => { });
  });
  describe('Зычныя дж, ч', () => {
    xdescribe('Вымаўленне афрыкаты дж як звонкага зычнага ж – парушэнне норм беларускага літаратурнага вымаўлення (джаліць, не жаліць).', () => { });
    xdescribe('У словах, дзе д – гук прыстаўкі, а ж – гук кораня, трэба вымаўляць два асобныя зычныя гукі, а не афрыкату дж (ад-жыў).', () => { });
    describe('На канцы слова дж аглушаецца і вымаўляецца як ч.', () => { });
    describe('Спалучэнне чц вымаўляецца як падоўжаная зацвярдзелая афрыката цц.', () => { });
  });
  describe('Зычныя дз, ц', () => {
    xdescribe('Вымаўленне звонкай мяккай афрыкаты дз як дь будзе парушэннем нормы беларускага літаратурнага вымаўлення (дзьве, не дьве).', () => { });
    describe('Звонкая афрыката дз, дзь на канцы слова аглушаецца і вымаўляецца як ц, ць.', () => { });
    xdescribe('У словах, дзе зычны д з’яўляецца часткай прыстаўкі, а з – гукам кораня, трэба вымаўляць два асобныя зычныя, а не афрыкату дз (ад-завіся).', () => { });
    describe('дзь перад глухімі зычнымі вымаўляецца як ць.', () => { });
    describe('Цвёрдая звонкая афрыката дз сустракаецца толькі ў асобных словах, у іншамоўных геаграфічных назвах і прозвішчах.', () => { });
    describe('ц перад мяккім зычным вь вымаўляецца мякка.', () => { });
    describe('ц, ць перад звонкімі зычнымі г, б, бь вымаўляецца як дз, дзь.', () => { });
  });
  describe('Зычныя к, х, г', () => {
    describe('г на канцы слова аглушаецца і вымаўляецца як х.', () => { });
    describe('г перад глухімі зычнымі аглушаецца і вымаўляецца як х.', () => { });
    xdescribe('У запазычаных словах замест фрыкатыўнага трэба вымаўляць выбухны звонкі г (гуз, гузік, ганак, гонты, гарнец, гвалт, гірса, нягеглы, газа, газьніца, газнічка, газоўка, гарсэт, гарчык, гвалтаваць, гвалтоўнік, гергетаць, гізаваць, гільза, гіпс, гіпсаванне, гуз, гузак, гузасты, гузаваты, гузічак, джганне, джгануць, джгаць, джыгіт, джыгітоўка, джыгітаваць, джыгаць, магерка, мегера, нязграбнасць, нязгрэба).', () => { });
    describe('к перад звонкімі зычнымі з, г, д у сярэдзіне слова вымаўляецца як выбухны г.', () => { });
  });
  describe('Зычныя п, б', () => {
    describe('б на канцы слова аглушаецца і вымаўляецца як п.', () => { });
    describe('Перад глухімі зычнымі б аглушаецца і вымаўляецца як п.', () => { });
    describe('Калі слова заканчваецца на галосны, часціца б аглушаецца і вымаўляецца як п толькі ў тым выпадку, калі б стаіць перад глухім зычным.', () => { });
  });
  describe('Зычныя м, н', () => {
    describe('н перад мяккімі афрыкатамі дзь, ць вымаўляецца мякка.', () => { });
    describe('н перад мяккімі зычнымі с, з, в, ф, к, г, л вымаўляецца цвёрда.', () => { });
    describe('м перад мяккімі зычнымі н, с, в, ф, к, п, б, л, дз вымаўляецца цвёрда.', () => { });
  });
  xdescribe('Часціца не, прыназоўнік без', () => {
    xdescribe('Часціца не, прыназоўнік без, калі яны стаяць перад словам з націскам на першым складзе, вымаўляюцца як ня, бяз.', () => { });
  });
});
