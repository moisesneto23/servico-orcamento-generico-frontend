module.exports = {
  devServer: {
    proxy: 'https://servico-orcamento-generico.azurewebsites.net/',
    },
  transpileDependencies: [
    'vuetify'
  ]
}
