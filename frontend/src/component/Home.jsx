import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/product.service";
import "./hom.css";
const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Details Deleted");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div className="con mt-3">
        <div className="ro">
          <div className="col-md-12">
            <div className="c1">
              
                <h1 className="assign">ASSIGN TASK</h1>

              <div className="cardbody">
                <table class="table1">
                  <thead>
                  <div className="space1">
                  <tr>
                  <th  scope="col">ID</th>
                  <th scope="col">TASK</th>
                  <th scope="col">DESCRIPTION</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">DATE</th>
                  <th scope="col">ACTION</th>
                  </tr>
                  </div>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <div className='space'>
                      <tr >
                      <td>{num + 1}</td>
                      <td className='i2'>{p.name}</td>
                      <td className='i2'>{p.author}</td>
                      <td className='i2'>{p.genre}</td>
                      <td className='i2'>{p.chapters}</td>
                      <td>
                      <Link to={'/editProduct/'+p.id} className="dark">
                      Update
                      </Link>
                      <button
                      onClick={() => deleteProduct(p.id)}
                      className="dark">
                      Delete
                      </button>
                      </td>
                      </tr>
                      </div>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;