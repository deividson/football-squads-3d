module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'FootballSquads3d',
      externals: {
        react: 'React'
      }
    }
  }
}
