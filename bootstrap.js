import {AppRegistry} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';

//o ideal seria carregar os modules via webpack.config atributo remotes do Repack.plugins.ModuleFederationPlugin, mas nao deu certo
import scriptSharedModules from './scriptSharedModules'; 
scriptSharedModules(); 

AppRegistry.registerComponent(appName, () => App);
