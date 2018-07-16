const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
/* Como por padrao o node restful nao retorna o objeto modificado ao utilizar
   o methodo put e sim o objeto antigo, eh preciso setar essa argumento 'new'.
   O mesmo acontece com as validacoes do schema (required, default e etc) */
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo