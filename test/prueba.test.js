import { describe, it, expect } from 'vitest';
import { calculateThirdAngle } from '../index.js';

describe('calculateThirdAngle', () => {
  it('should return 90 when given angles 30 and 60', () => {
    const result = calculateThirdAngle(30, 60);
    console.log(`Result for angles 30 and 60: ${result}`);
    expect(result).toBe(90);
  });

  it('should return 60 when given angles 60 and 60', () => {
    const result = calculateThirdAngle(60, 60);
    console.log(`Result for angles 60 and 60: ${result}`);
    expect(result).toBe(60);
  });

  it('should return 59 when given angles 43 and 78', () => {
    const result = calculateThirdAngle(43, 78);
    console.log(`Result for angles 43 and 78: ${result}`);
    expect(result).toBe(59);
  });

  it('should return 150 when given angles 10 and 20', () => {
    const result = calculateThirdAngle(10, 20);
    console.log(`Result for angles 10 and 20: ${result}`);
    expect(result).toBe(150);
  });
});