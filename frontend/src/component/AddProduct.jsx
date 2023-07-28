import React, { useState } from "react";
import productService from "../service/product.service";
import "./addpro.css"

const AddProduct = () =>
 {
  const [product, setProduct] = useState({
    name: "",
    author: "",
    genre: "",
    chapters: "",
  });


  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegsiter = (e) => {
    e.preventDefault();

    productService
      .saveProduct(product)
      .then((res) => {
        setProduct({
          name: "",
          author: "",
          genre: "",
          chapters: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return(
      <div className="ct mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card7">
              <div className="card-header fs-3 text-center">WORKFLOW MANAGEMENT</div>

              <div className="card-body">
                <form onSubmit={(e) => ProductRegsiter(e)}>
                  <div className="mb-3">
                    <label>TASK</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.name}
                    />
                  </div>

                  <div className="mb-3">
                    <label>DESCRIPTION</label>
                    <input
                      type="text"
                      name="author"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.author}
                    />
                  </div>
                  <div className="mb-3">
                    <label>STATUS</label>
                    <input
                      type="text"
                      name="genre"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.genre}
                    />
                  </div>

                  <div className="mb-3">
                    <label>DATE</label>
                    <input
                      type="number"
                      name="chapters"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.chapters}
                    />
                  </div>
                  <button className="glow-on-hover">ADD</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddProduct;