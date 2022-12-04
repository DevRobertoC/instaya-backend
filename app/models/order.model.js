module.exports = mongoose => {
    const Order = mongoose.model(
      "order",
      mongoose.Schema(
        {
          fecha: Date,
          hora: String,
          largo: String,
          ancho: String,
          alto: String,
          peso: String,
          estado: String,
          direccionRecogida: String,
          ciudadRecogida: String,
          nombreDestinatario: String,
          cedulaDestinatario: String,
          direccionEntrega: String,
          ciudadEntrega: String          
        },
        { timestamps: true }
      )
    );
  
    return Order;
}; 

