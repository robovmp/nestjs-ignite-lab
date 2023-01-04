import { Content } from './notification.content';

describe('Notification content', () => {
  it('Should be able to create a notification content', () => {
    const content = new Content('Você receveu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('Should not be able to create a notification content width less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('Should not be able to create a notification content width more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
