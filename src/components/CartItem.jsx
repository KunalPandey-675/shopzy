import { RiDeleteBin6Line } from "react-icons/ri";
import { cartActions } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const CartItem = ({ item, cartItem }) => {
  const [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 1);
  const dispatch = useDispatch();
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleRemoveFromCart = () => {
    dispatch(cartActions.removeFromCart(item.id));
  };
  return (
    <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
      <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <a href="#" class="shrink-0 md:order-1">
          <img class="h-20 w-20" src={item.thumbnail} alt="imac image" />
        </a>

        <label for="counter-input" class="sr-only">
          Choose quantity:
        </label>
        <div class="flex items-center justify-between md:order-3 md:justify-end">
          <div class="flex items-center">
            <span class="text-base font-medium text-gray-600">
              Quantity: {quantity}
            </span>
          </div>
          <div class="text-end md:order-4 md:w-32">
            <p class="text-base font-bold text-gray-900">${item.price} </p>
          </div>
        </div>

        <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <a
            href="#"
            class="text-base font-medium text-gray-900 hover:underline"
          >
            {item.title}
          </a>

          <div class="flex items-center gap-4">
            <button
              type="button"
              class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline"
            >
              <svg
                class="me-1.5 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
              Add to Favorites
            </button>

            <button
              type="button"
              class="inline-flex items-center text-sm font-medium text-red-600 hover:underline gap-2 cursor-pointer"
              onClick={handleRemoveFromCart}
            >
              <RiDeleteBin6Line />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
