const path = require('path');
// const { VueLoaderPlugin } = require('vue-loader');
const  VueLoaderPlugin  = require('vue-loader/lib/plugin');

module.exports = {
  mode:'development',
  devtool:'eval',
  entry:{
    app:path.join(__dirname,'main'),
  },
  module:{//핵심
    rules:[
      {
        test:/\.vue$/,
        use:'vue-loader'
      }
    ]
  },
  resolve:{
    extensions:['.js','.vue'],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  output:{
    filename:'[name].js',
    path:path.join(__dirname,'dist'),
  },
};