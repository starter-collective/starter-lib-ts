import { describe, expect, it } from 'vitest'
import { sayHello } from '../src/say-hello'

describe('test for say-hello.ts', () => {
  it('should return a greeting message', () => {
    const res = sayHello('Kieran')
    expect(res).toBe('Hello, Kieran!')
  })
})
