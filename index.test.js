const test = require('tape')
const func = require('./teste')



test('Aplicar desconto padrão', (t) => {
    t.assert(func.aplicardesconto(10,5) === 5, "Desconto true 01")
    t.end()
})
test('Aplicar desconto padrão', (t) => {
    t.assert(func.aplicardesconto(11,5) === 5, "Desconto false 02")
    t.end()
})
test('Aplicar desconto padrão', (t) => {
    t.assert(func.aplicardesconto(20,5) === 15, "Desconto true 03")
    t.end()
})
test('Aplicar desconto padrão', (t) => {
    t.assert(func.aplicardesconto(100,50) === 50, "Desconto true 04")
    t.end()
})
test('Aplicar desconto padrão', (t) => {
    t.assert(func.aplicardesconto(1000,500) === 500, "Desconto true 05")
    t.end()
})



test('Valida se é número', (t) => {
    t.assert(func.validarnumero(1000) == true, "Validacao 01")
    t.end()
})

test('Valida se é número', (t) => {
    t.assert(func.validarnumero('alana') == false, "Validacao 02")
    t.end()
})

