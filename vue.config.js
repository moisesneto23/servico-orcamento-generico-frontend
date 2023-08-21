module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://servico-orcamento-generico.azurewebsites.net', // URL da sua API
        changeOrigin: true,
        secure: true, // Ajuste para true se o seu servidor de destino também usa HTTPS
        pathRewrite: {
          '^/api': '/api' // Mantenha o prefixo "/api" na URL da requisição
        }
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
