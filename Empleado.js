class Empleado{
    id;
    nombre;
    telef;
    direccion;
    apellidos;
    empleado;
    correo;
    falta = [];
    banco =[];


    constructor(nom,telef,dire,apelli,correo, empleado,id){ 
        this.nombre=nom;
        this.telef=telef;
        this.direccion=dire;
        this.apellidos=apelli;
        this.correo=correo;
        this.empleado=empleado;
        this.id=id;
    }
    /**
     * 
     * @param {Falta} Falta 
     */
    agregarFalta =  function(Falta){
        let falta = this.falta;
        falta.push(Falta);
    }
    
}
    /**
     * 
     * @param {Banco} Banco 
     */
agregarBanco = function(Banco){
    let banco = this.banco;
    banco.push(Banco);
  }



    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    