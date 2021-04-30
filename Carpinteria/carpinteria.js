
let brocha=0

  function botonañadirbrocha(){
    brocha ++;
    cestica()
  }
  function botonquitarbrocha(){
    brocha --;
    cestica()
  }

  function cestica(){
    document.getElementById("brochica").innerHTML=`
    <h1>Brochas</h1><p> ${brocha}</p>
    `
    }

    let llave=0

  function botonañadirllave(){
    llave ++;
    cestica2()
  }
  function botonquitarllave(){
    llave --;
    cestica2()
  }

  function cestica2(){
    document.getElementById("llavecilla").innerHTML=`
    <h1>Llaves</h1><p> ${llave}</p>
    `
    }

    martillo=0

    function botonañadirmartillo(){
      martillo ++;
      cestica3()
    }
    function botonquitarmartillo(){
      martillo --;
      cestica3()
    }
  
    function cestica3(){
      document.getElementById("martillin").innerHTML=`
      <h1>Martillo</h1><p> ${martillo}</p>
      `
      }

      tronco=0

      function botonañadirtronco(){
        tronco ++;
        cestica4()
      }
      function botonquitartronco(){
        tronco --;
        cestica4()
      }
    
      function cestica4(){
        document.getElementById("troooonco").innerHTML=`
        <h1>Tronco</h1><p> ${tronco}</p>
        `
        }

        /*hacer una funcion para que una única función lo haga todo
        if(brochas>o){
          for(let i=0; 1<= brochas; i++){
            brochashtml+=<img src=o  carpeta o archivo + atributo + caracteristicas del css>
          }
        }

        */
        