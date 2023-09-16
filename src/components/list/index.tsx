import React, { useState, useEffect, useContext } from "react";
import { DivStyledList } from "./styled";
import { Card } from "../card";
import { api } from "../../service";
import { Context } from "../../context/context";

interface Root {
  descriptionShort: string;
  photo: string;
  price: number;
  productName: string;
}

export const List = () => {
  const [data, setData] = useState<Root[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const {
    getDataUser,
    search,
    products,
    cart,
    openFocusProduct,
    focusProduct,
    getCartUser,
    focusCart,
    setFocusCart,
  } = useContext(Context);
  const itemsPerPage = 4;

  const capturingData = async () => {
    const response: any = await api.get("products");
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    capturingData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const searchValue = products.filter(
    (element: any) =>
      element.name.toLowerCase().includes(search.toLowerCase()) ||
      element.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DivStyledList>
      <div className="line">
        <h2>Produtos relacionados</h2>
      </div>
      <div className="list">
        {search == "" && (
          <button onClick={handlePrevPage} className="button-left">
            {"<"}
          </button>
        )}

        <ul>
          {search == "" && (
            <>
              {currentData.map((element) => (
                <Card key={element.productName} {...element} />
              ))}
            </>
          )}

          {search !== "" && (
            <>
              {searchValue &&
                searchValue.map((element: any) => (
                  <Card key={element.productName} {...element} />
                ))}
            </>
          )}
        </ul>
        {search == "" && (
          <button onClick={handleNextPage} className="button-right">
            {">"}
          </button>
        )}
      </div>
    </DivStyledList>
  );
};
