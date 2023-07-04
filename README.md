# miniapp-checkout

Para gerar o build precisa ser gerado uma chave keystore então basta rodar o seguinte comando:

yarn build:android:key

Na primeira etapa ele pede para definir uma senha, set uma senha a sua escolha;
obs.: A senha deve conter no minimo 6 digitos! Ex: 123456
Segunda etapa pede pare repetir a senha;
As demais seram opcionais;

obs: Quando chegar na confirmação dos dados algo semelhante a:

CN=Unknown, OU=Unknown, O=Unknown, L=Unknown, ST=Unknown, C=Unknown Está correto?
  [não]:

apenas digite sim e aperte enter;

Feito isso precisamos dar "visão do android" ao nosso projeto referente ao SDK então siga os passos:

1- entre na pasta android:

cd android

2- crie um arquivo com o nome:

local.properties

3- coloque o caminho do seu Sdk:

ex: sdk.dir=/Users/<seu-usuario>/Android/Sdk

obs.: A senha que voce usou no build:key você irá precisar coloca-lá no gradlew.properties:

MYAPP_RELEASE_STORE_PASSWORD=******
MYAPP_RELEASE_KEY_PASSWORD=******

em seguida você pode rodar o comando `yarn build:android` para gerar o apk;

Após rodar o comando e finalizar com sucesso confira seu apk na pasta android > app > build > outputs > apk > release