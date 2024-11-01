import { describe, expect, it } from 'vitest'
import { sayHello } from '../src/say-hello'

describe('test use for say-hello.ts', () => {
  it('base', () => {
    const res = sayHello('Kieran')
    expect(res).toBe('Hello, Kieran!')
  })
})
