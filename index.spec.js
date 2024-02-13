import cloneDeepCopy from './index';

const PERSON = {
  id: 123,
  name: '김동현',
  brith: new Date('2005-12-19'),
  skills: new Map([['web', ['JavaScript', 'CSS', 'HTML']]]),
  property: null,
  connect: /^[a-zA-Z0-9]+@gmail\.com$/,
  hobbies: [
    {
      id: 1,
      name: 'book1',
      group: {
        name: 'group1',
      },
    },
    {
      id: 2,
      name: 'book2',
      group: {
        name: 'group2',
      },
    },
  ],
};

describe('cloneDeepCopy 함수가 정상적으로 동작하는지 테스트~~', () => {
  describe('복사된 값이 원본 값과 동일한지 비교한다.~~', () => {
    it('기본형을 비교한다.~~', () => {
      const defaultId = PERSON.id;
      const defaultProperty = PERSON.property;
      const defaultUndefined = undefined;

      const clonePerson = cloneDeepCopy(PERSON);
      const clonedId = clonePerson.id;
      const clonedProperty = clonePerson.property;
      const clonedUndefined = clonePerson.undefined;

      expect(clonedId).toEqual(defaultId);
      expect(clonedProperty).toEqual(defaultProperty);
      expect(clonedUndefined).toEqual(defaultUndefined);
    });

    it('Date 객체를 비교한다.~~', () => {
      const defaultBrith = PERSON.brith;

      const clonePerson = cloneDeepCopy(PERSON);
      const clonedBrith = clonePerson.brith;

      expect(clonedBrith).toEqual(defaultBrith);
    });

    it('Map 객체를 비교한다.~~', () => {
      const defaultSkills = PERSON.skills;

      const clonePerson = cloneDeepCopy(PERSON);
      const clonedSkills = clonePerson.skills;

      expect(clonedSkills).toEqual(defaultSkills);
    });

    it('RegExp 객체를 비교한다.~~', () => {
      const defaultConnect = PERSON.connect;

      const clonePerson = cloneDeepCopy(PERSON);
      const clonedConnect = clonePerson.connect;

      expect(clonedConnect).toEqual(defaultConnect);
    });

    it('일반적인 중첩 객체를 비교한다.~~', () => {
      const defaultHobbies = PERSON.hobbies;

      const clonePerson = cloneDeepCopy(PERSON);
      const clonedHobbies = clonePerson.hobbies;

      expect(clonedHobbies).toEqual(defaultHobbies);
    });
  });

  describe('복사된 객체에 속성을 변경하면 원본에 영향을 주는지 확인한다.~~', () => {
    it('Map 객체의 value 배열에 영향을 주는지 확인한다~~', () => {
      const defaultSkills = PERSON.skills.get('web');
      const expectedSkills = ['JavaScript', 'CSS', 'HTML'];

      const clonePerson = cloneDeepCopy(PERSON);
      const cloneSkills = clonePerson.skills.get('web');
      cloneSkills.push('good');

      expect(defaultSkills).toEqual(expectedSkills);
    });

    it('일반적인 중첩 객체의 특정 속성에 영향을 주는지 확인한다.~~', () => {
      const defaultFirstGroup = PERSON.hobbies[0].group;
      const expectedFirstGroup = { name: 'group1' };

      const clonePerson = cloneDeepCopy(PERSON);
      const clonedFirstGroup = clonePerson.hobbies[0].group;
      clonedFirstGroup.money = 10000;

      expect(expectedFirstGroup).toEqual(defaultFirstGroup);
    });
  });
});
