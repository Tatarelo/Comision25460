const productos = [
    {id:1, foto: "https://icdn.dtcn.com/image/digitaltrends_es/turbo-2-500x500.jpg"},
    {id:2, foto: "https://www.motoryracing.com/images/noticias/21000/21881/1.jpg"},
    {id:3, foto: "https://www.bridgestone.com.mx/content/dam/bridgestone/consumer/bst/latam/mx/nosotros/tips/FiltroAceite-01_big.jpg"},
    {id:4, foto: "https://refaccionariamario.info/29033-tm_thickbox_default/filtro-de-gasolina-ac-delco-para-chevy-corsa-tornado.jpg"},
    {id:5, foto: "http://d2r9epyceweg5n.cloudfront.net/stores/994/749/products/akx-357231-75152d9bfdc3373fc915595823388175-640-0.png"},
    {id:6, foto: "https://http2.mlstatic.com/D_NQ_NP_928779-MLA25879249249_082017-O.jpg"}
  ]

export const getFetch = new Promise ((resolve, reject) => {
    let url = 'tata.com'
    if(url === 'tata.com'){
      setTimeout(() => {
        resolve(productos)
      }, 3000)
    } else {
      reject('400 not found')
    }
  })