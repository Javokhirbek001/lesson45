import React, { useState } from "react";
import "./Products.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Products(props) {
  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggle = (index) => {
    setModal(!modal);
    if (index) {
      setCurrentIndex(index);
    } else{
      setCurrentIndex ()
    }
  };
  return (
    <div className="mt-3">
      {console.log(setCurrentIndex)}
      <div className="container">
        <div className="row">
          {props.products.map((product, index) => (
            <div className="col-md-3 mb-2">
              <div className="card">
                <div className="card-header">
                  <img className="w-100" src={product.imgUrl} alt="rasm" />
                </div>
                <div className="card-body">
                  <h4>Name:{product.name}</h4>
                  <h4>Brand:{product.brand}</h4>
                  <p>
                    <b>Price:</b>
                    {product.price}$
                  </p>
                  <button
                    onClick={() => toggle(index)}
                    className="asa btn btn-block btn-primary"
                  >
                    Add too card
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal size="xl" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-4">
              <div className="card h-100">
                <div className="card-header">
                  <h2>Card info</h2>
                </div>
                <div className="card-body">
                  <h4>
                    Name:{currentIndex && props.products[currentIndex].name}
                  </h4>
                  <h4>
                    Brand:{currentIndex && props.products[currentIndex].brand}
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card h-100">
                <div className="card-header">
                  <h2>Product</h2>
                </div>
                <div className="card-body">
                  <img
                    className="w-100"
                    src={currentIndex && props.products[currentIndex].imgUrl}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card h-100">
                <div className="card-header">
                  <h2>Action</h2>
                </div>
                <div className="card-body">
                  <h4>
                    Name:{currentIndex && props.products[currentIndex].name}
                  </h4>
                  <h4>
                    Brand:{currentIndex && props.products[currentIndex].brand}
                  </h4>
                  <p className="mb-0">
                    <b>Price:</b>
                    {currentIndex && props.products[currentIndex].price}$
                  </p>
                  <p className="mt-1">
                    <b>Total Price:</b>
                    {currentIndex && props.products[currentIndex].price * props.temCount}$
                  </p>
                  <button onClick={()=>props.changeCount("minus")} className="btn btn-secondary">-</button>
                  <button className="btn btn-light">{props.temCount}</button>
                  <button onClick={()=>props.changeCount("plyus")} className="btn btn-secondary">+</button>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Add
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel  
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
