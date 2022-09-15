const dataClientes = [
    {
        name:"Leonardo Guzmán",
        edad:"21",
        direccion:"Ate 301"
    },
    {
        name:"Carmen Rosa" ,
        edad:"54",
        direccion:"Ate 301"
    },
    {
        name:"Alejandro",
        edad:"27",
        direccion:"Colonial 3130"
    }
];

const dataProductos = [
    {
        nombre:"Monitor",
        precio:"699.99",
        stock:"10"
    },
    {
        nombre:"HeadPhones",
        precio:"389.99",
        stock:"20"
    },
    {
        nombre:"PS4",
        precio:"1399.99",
        stock:"10"
    }
];

export const findAllClientes = () => {
    return dataClientes;
};

export const findAllProductos = () => {
    return dataProductos;
};