import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import useBicycle from "../hooks/useBicycle";
import Items from "../Items/Items";
import "./InventoryItems.css";

const InventoryItems = () => {
  const [items] = useBicycle();
  return (
    <div>
      <section className="mt-5">
        <h2 className="home-card-title mb-3 text-center">Inventory Items</h2>
        <div className="card-container container">
          {items.slice(0, 3).map((item) => (
            <Items key={item.id} item = {item}></Items>
          ))}
        </div>
        <p className="text-end container fs-4">
          <Link className="text-decoration-none" to="/allItems">
            See All Items
            <span className="ms-2">
              <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
            </span>
          </Link>
        </p>
      </section>
    </div>
  );
};

export default InventoryItems;
