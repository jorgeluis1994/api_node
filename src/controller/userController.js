exports.getAllUsers = async (ctx) => {
    ctx.body = 'Obtener todos los usuarios';
  };
  
  exports.getUserById = async (ctx) => {
    const userId = ctx.params.id;
    ctx.body = `Obtener usuario con ID: ${userId}`;
  };
  
  exports.createUser = async (ctx) => {
    const newUser = ctx.request.body;
    ctx.body = `Crear nuevo usuario: ${JSON.stringify(newUser)}`;
  };
  
  exports.updateUser = async (ctx) => {
    const userId = ctx.params.id;
    const updatedUser = ctx.request.body;
    ctx.body = `Actualizar usuario con ID: ${userId}, Datos: ${JSON.stringify(updatedUser)}`;
  };
  
  exports.deleteUser = async (ctx) => {
    const userId = ctx.params.id;
    ctx.body = `Eliminar usuario con ID: ${userId}`;
  };
  