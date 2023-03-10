class ProductManager {
  constructor() {
    this.arrayProductos = [];
  }

  static id = 0;

  addProduct = (title, description, price, thumbnail, code, stock) => {
    if (
      this.validarCarga(title, description, price, thumbnail, code, stock) == 0
    ) {
      let producto = {
        id: ++ProductManager.id,
        code: code,
        title: title,
        description: description,
        price: price,
        thumbnail: thumbnail,
        stock: stock,
      };
      this.arrayProductos.push(producto);
      console.log(`Producto Cargado`);
    }
  };

  getProducts = () => {
    let resu = [];
    for (const objeto of this.arrayProductos) resu.push(objeto);
    console.log(`********** LISTANDO TODOS LOS PRODCUTOS ****************`);
    console.log(resu);
    console.log(`********** FIN LISTADO DE TODOS LOS PRODCUTOS **********`);
  };

  getProductById = (id) => {
    let flag = 0;
    let objeto = {};

    this.arrayProductos.filter((e) => {
      if (e.id == id) {
        flag = 1;
        objeto = { ...e };
      }
    });

    console.log(`********** BUSCANDO PRODUCTO CON ID: ${id} *****************`);
    if (flag == 1) {
      console.log(objeto);
    } else {
      console.log("***ERROR: Producto no encontrado ***");
    }
    console.log(`********** FIN BUSQUEDA PRODCUTOS ID: ${id} ****************`);
  };

  getProductByCode = (code) => {
    for (const obj of this.arrayProductos) if (obj.code == code) return obj;
  };

  validarCarga = (title, description, price, thumbnail, code, stock) => {
    if (
      title == "" ||
      description == "" ||
      price < 0 ||
      thumbnail == "" ||
      code == "" ||
      stock < 0
    ) {
      console.log("ERROR: Todos los campos son obligatorios");
      return 1;
    } else if (this.getProductByCode(code) != undefined) {
      console.log(`ERROR: El código: ${code} ya existe para otro producto`);
      return 1;
    } else {
      return 0;
    }
  };
}
/********************************/
/**********   PRUEBAS    ********/
/********************************/
const productoManager = new ProductManager();

productoManager.addProduct("Titulo1", "desc1", 12, "url foto1", "COD-1", 25.5);

productoManager.addProduct("Titulo2", "desc2", 22, "url foto 2", "COD-2", 55.5);

productoManager.getProducts();

productoManager.getProductById(1);
