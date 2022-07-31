import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";

// const data = [
//   {
//     id: 1,
//     name: "Adidas Prophere",
//     alias: "adidas-prophere",
//     price: 350,
//     description:
//       "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
//     shortDescription:
//       "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
//     quantity: 995,
//     image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
//   },
//   {
//     id: 2,
//     name: "Adidas Prophere Black White",
//     alias: "adidas-prophere-black-white",
//     price: 450,
//     description:
//       "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
//     shortDescription:
//       "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
//     quantity: 990,
//     image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
//   },
//   {
//     id: 3,
//     name: "Adidas Prophere Customize",
//     alias: "adidas-prophere-customize",
//     price: 375,
//     description:
//       "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
//     shortDescription:
//       "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
//     quantity: 415,
//     image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
//   },
//   {
//     id: 4,
//     name: "Adidas Super Star Red",
//     alias: "adidas-super-star-red",
//     price: 465,
//     description:
//       "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
//     shortDescription:
//       "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
//     quantity: 542,
//     image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
//   },
//   {
//     id: 5,
//     name: "Adidas Swift Run",
//     alias: "adidas-swift-run",
//     price: 550,
//     description:
//       "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
//     shortDescription:
//       "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
//     quantity: 674,
//     image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
//   },
//   {
//     id: 6,
//     name: "Adidas Tenisky Super Star",
//     alias: "adidas-tenisky-super-star",
//     price: 250,
//     description:
//       "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
//     shortDescription:
//       "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
//     quantity: 456,
//     image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
//   },
//   {
//     id: 7,
//     name: "Adidas Ultraboost 4",
//     alias: "adidas-ultraboost-4",
//     price: 450,
//     description:
//       "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
//     shortDescription:
//       "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
//     quantity: 854,
//     image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
//   },
//   {
//     id: 8,
//     name: "Adidas Yeezy 350",
//     alias: "adidas-yeezy-350",
//     price: 750,
//     description:
//       "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
//     shortDescription:
//       "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
//     quantity: 524,
//     image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
//   },
//   {
//     id: 9,
//     name: "Nike Adapt BB",
//     alias: "nike-adapt-bb",
//     price: 630,
//     description:
//       "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
//     shortDescription: "Paul George is the rare high-percentage shooter",
//     quantity: 599,
//     image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
//   },
//   {
//     id: 10,
//     name: "Nike Air Max 97",
//     alias: "nike-air-max-97",
//     price: 650,
//     description:
//       "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
//     shortDescription: "Paul George is the rare high-percentage shooter",
//     quantity: 984,
//     image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
//   },
//   {
//     id: 11,
//     name: "Nike Air Max 97 Blue",
//     alias: "nike-air-max-97-blue",
//     price: 450,
//     description:
//       "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
//     shortDescription: "Paul George is the rare high-percentage shooter",
//     quantity: 875,
//     image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
//   },
//   {
//     id: 12,
//     name: "Nike Air Max 270 React",
//     alias: "nike-air-max-270-react",
//     price: 750,
//     description:
//       "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
//     shortDescription: "Paul George is the rare high-percentage shooter",
//     quantity: 445,
//     image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
//   },
// ];
export default function Detail() {
  let [item, setItem] = React.useState({});
  let [related, setRelated] = React.useState([]);
  //Check xem id nhan vao dang la kieu du lieu nao
  let { id } = useParams();
  let url = `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`;
  React.useEffect(() => {
    let promise = axios.get(url);
    promise.then((response) => {
      setItem(response.data.content);
      setRelated(response.data.content.relatedProducts);
    });
    window.scrollTo(0, 350)
  }, []);
  let renderRelatedProduct = () => {
    return related.map((prod, index) => {
      return (
        <div className="col-lg-4 col-md-6 col-12 mt-4 p-3" key={index}>
          <Link to={`/product/${prod.id}`}>
            <img src={prod.image} width="100%" alt="" />
          </Link>
          <div className="p-3 text-center">
            <h4>{prod.name}</h4>
            <p>{prod.price}$</p>
          </div>
        </div>
      );
    });
  };
  const { name, price, description, image, size } = item;
  return (
    <div className="container">
      <div className="row justify-content-around mt-2 m-2" id={id}>
        <div className="col-lg-4 col-md-12 mt-5 mb-5">
          <img className="w-100" src={image} alt="..." />
        </div>
        <div className="col-lg-6 col-md-12 mt-5 mb-5">
          <h1 className="mb-3">{name}</h1>
          <p className="mb-3">{description}</p>
          <span
            style={{ display: "block" }}
            className="text-success fs-3 fst-italic"
          >
            Available size
          </span>
          <div className="d-flex flex-row justify-content-between align-items-start">
            {/* {size.map((num) => {
            return <button className="me-2 ps-3 pe-3 mt-3 btn">{num}</button>;
          })} */}
            <button className="me-2 ps-3 pe-3 mt-3 btn">1</button>
            <button className="me-2 ps-3 pe-3 mt-3 btn">1</button>
            <button className="me-2 ps-3 pe-3 mt-3 btn">1</button>
            <button className="me-2 ps-3 pe-3 mt-3 btn">1</button>
            <button className="me-2 ps-3 pe-3 mt-3 btn">1</button>
            <button className="me-2 ps-3 pe-3 mt-3 btn">1</button>
            <button className="me-2 ps-3 pe-3 mt-3 btn">1</button>
          </div>
          <span
            style={{ display: "block" }}
            className="mt-3 mb-3 text-danger fw-bold fs-3"
          >
            {price}$
          </span>
          <button className="btn btn-dark fs-4 me-3 border border-dark">
            Add to cart
          </button>
          <Link
            style={{ textDecoration: "none" }}
            className="btn btn-light fs-4 border border-dark"
            to="/product"
          >
            Back
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-center text-dark fst-italic m-5">
          Related Product
        </h2>
        <div className="row">{renderRelatedProduct()}</div>
      </div>
    </div>
  );
}
