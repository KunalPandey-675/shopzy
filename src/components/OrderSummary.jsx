import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../store/cartSlice";
const OrderSummary = () => {
  const [orderStatus, setOrderStatus] = useState(false);

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  
  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
    setOrderStatus(true);
    setInterval(() => {
      dispatch(cartActions.checkout());
    }, 2000);
  };
  const totalItems = cartItems.reduce((sum, qty) => sum + qty.quantity, 0);
  const DELIVERY_CHARGE = 2;
  let totalMRP = 0;
  let discount = 0;
  let totalAmount = 0;

  cartItems.forEach((cartItem) => {
    const item = items.find((item) => item.id === cartItem.id);
    if (item) {
      const itemTotal = item.price * cartItem.quantity;
      totalMRP += itemTotal;
      if (item.discountPercentage) {
        discount += itemTotal * (item.discountPercentage / 100);
      }
    }
  });

  totalMRP = parseFloat(totalMRP.toFixed(2));
  discount = parseFloat(discount.toFixed(2));
  totalAmount = parseFloat((totalMRP - discount + DELIVERY_CHARGE).toFixed(2));

  return (
    <>
      <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
        <p class="text-xl font-semibold text-gray-900">Order summary</p>

        <div class="space-y-4">
          <div class="space-y-2">
            <dl class="flex items-center justify-between gap-4">
              <dt class="text-base font-normal text-gray-500">Total Items</dt>
              <dd class="text-base font-medium text-gray-900">{totalItems} </dd>
            </dl>
            <dl class="flex items-center justify-between gap-4">
              <dt class="text-base font-normal text-gray-500">Total MRP</dt>
              <dd class="text-base font-medium text-gray-900">${totalMRP}</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4">
              <dt class="text-base font-normal text-gray-500">Discount</dt>
              <dd class="text-base font-medium text-green-600">-${discount}</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4">
              <dt class="text-base font-normal text-gray-500">
                Delivery Charge
              </dt>
              <dd class="text-base font-medium text-gray-900">
                ${DELIVERY_CHARGE}
              </dd>
            </dl>
          </div>

          <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
            <dt class="text-base font-bold text-gray-900">Total Amount</dt>
            <dd class="text-base font-bold text-gray-900">${totalAmount}</dd>
          </dl>
        </div>

        {orderStatus ? (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
            <p className="text-lg font-semibold">Order Status: Confirmed</p>
            <p>
              Your order has been successfully confirmed and is now being
              processed.
            </p>
          </div>
        ) : (
          <button
            href="#"
            class="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-primary-300"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        )}

        <div class="flex items-center justify-center gap-2">
          <span class="text-sm font-normal text-gray-500"> or </span>
          <Link
            to="/products"
            title=""
            class="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline"
          >
            Continue Shopping
            <svg
              class="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
