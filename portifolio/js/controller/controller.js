angular
.module("projetoPortifolio")
.controller("portifolioController", portifolioController);

        function portifolioController(relatosAPI, $scope) {
          
        var vm = this;

        vm.mudaFoto =mudaFoto;
        vm.aumenta  =aumenta;
        vm.diminui  =diminui;
        vm.adicionarRelatos = adicionarRelatos;
        vm.apagarRelato = apagarRelato;
        vm.alterarRelato = alterarRelatos;
        vm.ordenarPor = ordenarPor;
        vm.carregarRelatos = carregarRelatos; 

        function mudaFoto(foto) {
            document.getElementById("icone").src = foto;
        }
     
        function aumenta(obj) {
            obj.height = obj.height * 2;
            obj.width = obj.width * 2;
        }
     
        function diminui(obj) {
            obj.height = obj.height / 2;
            obj.width = obj.width / 2;
        }

        function carregarRelatos() {
            relatosAPI.getRelatos().then(function(response){              
            vm.relatos = response.data;
                });
        };

        function adicionarRelatos(relato) {
            if(relato.id){
                relatosAPI.alterarRelato(relato).then(function (data) {
                    delete $scope.relato;
                    $scope.relatoForm.$setPristine();
                    carregarRelatos();
                });
            }else{
                relatosAPI.saveRelato(relato).then(function (data) {
                    delete $scope.relato;
                    $scope.RelatoForm.$setPristine();
                    carregarRelatos();
                });
            }
        };

        function apagarRelato (relato) {
            vm.relatos = vm.relatos.filter(function (relatos) {
                if (relato.selecionado) {
                    relatosAPI.excluirRelato(relato).then(function (response){                      
                        carregarRelatos();
                    });
                }
            });
        }

        function alterarRelatos(relato){
            vm.relatos = vm.relatos.filter(function (relato) {
                if (relato.selecionado){
                    relato.selecionado = !relato.selecionado;
                    $scope.relato = angular.copy(relato);
                }
            });
        }
            function ordenarPor (campo) {
                vm.criterioDeOrdenacao = campo;
                vm.direcaoDaOrdenacao = !vm.direcaoDaOrdenacao;
            };
        carregarRelatos();
    
    };