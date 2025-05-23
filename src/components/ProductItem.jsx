import { useState } from "react";
import QuickPreview from "./QuickPreview";
import { useSelector, useDispatch } from "react-redux";
import { BsCartPlus } from "react-icons/bs";
import { BsCartX } from "react-icons/bs";
import { cartActions } from "../store/cartSlice";

const ProductItem = ({ items }) => {
  const [preview, setPreview] = useState(false);
  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const handlePreviewToggle = () => {
    setPreview(!preview);
  };

  const itemInCart = cartItems.some((cartItem) => cartItem.id === items.id);
  const handleMinusFromCart = () => {
    dispatch(cartActions.removeFromCart(items.id));
  };
  return (
    <>
      <div className="rounded-lg border cursor-pointer border-gray-200 bg-white p-3 shadow-sm overflow-hidden">
        <div className="w-full aspect-square overflow-hidden">
          <a href="#">
            <img
              className="mx-auto h-full w-full object-cover"
              src={items.images[0]}
              alt=""
            />
          </a>
        </div>
        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              {" "}
              Up to {items.discountPercentage} % off{" "}
            </span>

            <div className="flex items-center justify-end gap-1 ">
              <button
                type="button"
                data-tooltip-target="tooltip-add-to-favorites"
                className="text-indigo-600 rounded-lg p-2 hover:bg-gray-100 hover:text-gray-900  "
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <a
            href="#"
            className="text-lg font-semibold leading-tight text-gray-900 hover:underline"
          >
            {items.title}
          </a>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              <svg
                className="h-4 w-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>

              <svg
                className="h-4 w-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>

              <svg
                className="h-4 w-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>

              <svg
                className="h-4 w-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>

              <svg
                className="h-4 w-4 text-yellow-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
              </svg>
            </div>

            <p className="text-sm font-medium text-gray-500">{items.rating} </p>
          </div>

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>
              <p className="text-sm font-medium text-gray-500">Fast Delivery</p>
            </li>

            <li className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
              <p className="text-sm font-medium text-gray-500">Best Price</p>
            </li>
          </ul>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-1xl font-extrabold leading-tight text-gray-900">
              ${items.price}
            </p>

            {itemInCart ? (
              <button
                type="button"
                className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none bg-red-500 hover:bg-red-600 gap-2 cursor-pointer"
                onClick={handleMinusFromCart}
              >
                <BsCartX />
                Remove Item
              </button>
            ) : (
              <button
                type="button"
                className="inline-flex items-center rounded-lg px-5 py-2.5 bg-indigo-600 text-sm font-medium text-white focus:outline-none hover:bg-indigo-500 gap-1 cursor-pointer"
                onClick={handlePreviewToggle}
              >
                <BsCartPlus />
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
      {preview && (
        <QuickPreview item={items} onClose={() => setPreview(false)} />
      )}
    </>
  );
};
export default ProductItem;
