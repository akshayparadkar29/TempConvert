import { CelsiusFahrenheitPipe } from './celsius-fahrenheit.pipe';

describe('CelsiusFahrenheitPipe', () => {
  it('create an instance', () => {
    const pipe = new CelsiusFahrenheitPipe();
    expect(pipe).toBeTruthy();
  });
});
