import destructuring from '../app.js';

describe('destructuring', () => {
  test('два спец.свойства одно с дефолтным описание', () => {
    const character = {
      name: 'Лучник',
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон',
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
        },
      ],
    };

    expect(destructuring(character)).toEqual([
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ]);
  });

  test('пустой массив special — возвращает пустой массив', () => {
    expect(destructuring({ special: [] })).toEqual([]);
  });

  test('без аргумента — возвращает пустой массив', () => {
    expect(destructuring()).toEqual([]);
  });
});
