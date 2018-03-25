
Primeiramente foi feita uma análise dos recursos disponibilizados pela api OpenWeather, após essa análise eu escolhi usar o endpoint que mostra a previsão atual do clima apartir do id da cidade. Apartir dessa escolha eu criei um arquivo json que serve de mock para o resultado do chamado a essa api, o arquivo json mockado me permitiu criar o componente mais rapidamente. Com os componentes criados com informacao mockada, foi só implementar a chamada a api e passar esse resultado ao invés do mockado. 

Dada a restrição de tempo, eu decidi utilizar o framework SemanticUi para auxiliar no desenvolvimento dos componentes de interface, por já ter usado o mesmo anteriormente com React.

Uma decisão que eu tive que tomar foi quanto a listagem de cidades, dado que eu tenho que ter o id da cidade para fazer a chamada o openweather fornece um arquivo com a lista de todas cidades, mas o mesmo é muito grande para se manipular o que deixava a interface muito lenta, por isso eu decidi restringir o escopo para somente as cidades do Brasil.

