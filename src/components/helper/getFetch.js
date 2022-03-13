const productos = [{
    id: "1",
    nombre: "Turbo Cruze 1.4T",
    foto: "https://icdn.dtcn.com/image/digitaltrends_es/turbo-2-500x500.jpg",
    detail: "Turbocompresor Chevrolet Cruze 1.4T, Diametro de entrada 30mm, Numero de pieza: 12679375",
    precio: "$39000",
    categoria: "inyeccion"
  },
  {
    id: "2",
    nombre: "Filtro de aire",
    foto: "https://www.motoryracing.com/images/noticias/21000/21881/1.jpg",
    detail: "Filtro de aire conico para Chevrolet Onix",
    precio: "$5400",
    categoria: "filtros"
  },
  {
    id: "3",
    nombre: "Filtro de aceite",
    foto: "https://www.bridgestone.com.mx/content/dam/bridgestone/consumer/bst/latam/mx/nosotros/tips/FiltroAceite-01_big.jpg",
    detail: "Filtro de aceite Chevrolet Cruze 1.4T de papel microporoso",
    precio: "$3900",
    categoria: "filtros"
  },
  {
    id: "4",
    nombre: "Filtro de nafta",
    foto: "https://refaccionariamario.info/29033-tm_thickbox_default/filtro-de-gasolina-ac-delco-para-chevy-corsa-tornado.jpg",
    detail: "Filtro de nafta para Chevrolet Corsa 1.4 8V para vehiculos a nafta o GNC",
    precio: "$3700",
    categoria: "filtros"
  },
  {
    id: "5",
    nombre: "Filtro de habitaculo",
    foto: "http://d2r9epyceweg5n.cloudfront.net/stores/994/749/products/akx-357231-75152d9bfdc3373fc915595823388175-640-0.png",
    detail: "Filtro de habitaculo Chevrolet Cruze 1.4T",
    precio: "$2400",
    categoria: "filtros"
  },
  {
    id: "6",
    nombre: "Llanta Cruze 2017",
    foto: "https://http2.mlstatic.com/D_NQ_NP_928779-MLA25879249249_082017-O.jpg",
    detail: "Llanta Chevrolet Cruze Premier 1.4T 2017, centro de rueda 300mm, diametro de llanta: 17 pulgadas, centro de tuercas: 4x100",
    precio: "$25000",
    categoria: "llantas"
  }
]


export const getFetch = new Promise((resolve, reject) => {
  let url = 'tata.com'
  if (url === 'tata.com') {
    setTimeout(() => {
      resolve(productos)
    }, 3000)
  } else {
    reject('404 not found')
  }
})

export const getFetchProd = new Promise((resolve, reject) => {
  let url = 'tata.com'
  if (url === 'tata.com') {
    setTimeout(() => {
      resolve(productos)
    }, 3000)
  } else {
    reject('404 not found')
  }
})

