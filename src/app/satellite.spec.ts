import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite("orbit","type","12/28/2020","LOW",true)).toBeTruthy();
  });
});
