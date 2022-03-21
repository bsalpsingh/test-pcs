export const mutateCart = (stateCart, productDetails, operation) => {
  console.log(stateCart, "StateCart");
  // alert("running mutate");
  let cart = stateCart;

  // Crud fxns according to the operations
  //   const cart =  Cart.findOne({ userId: req.user._id }).lean({
  //     virtuals: true,
  //   });
  //   if (!cart) {
  //     return next(new AppError("sorry cart does not exist for user", 404));
  //   }

  const addCartItems = (variantId, productId) => {
    let updateBody = { ...cart };
    console.log("this is update body", updateBody, variantId, productId);
    let matchedSkuIndex;
    let productArrayPromise = updateBody.regular.map((el, index) => {
      return el;
    });

    const cartProductArray = productArrayPromise;
    const cartProductCategoryArray = cartProductArray.map(
      (el, index) => el.category
    );
    console.log("cartItemProduct", productDetails);
    const cartItemProduct = productDetails;
    console.log(cartItemProduct, "cart item product");

    if (
      (cartItemProduct.category.toLowerCase() === "restaurant" &&
        cartProductCategoryArray.every((el, index) => el === "restaurant") ===
          false) ||
      (cartItemProduct.category.toLowerCase() !== "restaurant" &&
        cartProductCategoryArray.some((el, index) => el === "restaurant") ===
          true)
    ) {
      // return next(
      //   new AppError(
      //     "sorry, Restaurant items cannot be placed with other categories",
      //     401
      //   )
      // );
      // alert("returning ");
      return;
    }
    // console.log(updateBody, "queried cart");
    // alert("check");

    if (
      updateBody.regular.some(
        (el, index) =>
          el.variant[0]._id === variantId &&
          el._id === productId &&
          !!el.billed === false
      )
    ) {
      // updateBody.push({...req.body,qty:})
      matchedSkuIndex = updateBody.regular.findIndex(
        (el, index) =>
          el.variant[0]._id === variantId &&
          el._id === productId &&
          !!el.billed === false
      );
      // alert("running cart item ");
      updateBody.regular[matchedSkuIndex] = {
        ...updateBody.regular[matchedSkuIndex],
        qty: updateBody.regular[matchedSkuIndex].qty + 1,
      };

      //   const updatedCart =  Cart.findOneAndUpdate(
      //     { userId: req.user._id },
      //     {
      //       ...updateBody,
      //     }
      //   );
      const updatedCart = updateBody;
      return updatedCart;
    } else {
      updateBody.regular.push({ ...productDetails, qty: 1 });
      const updatedCart = updateBody;
      return updatedCart;
    }
  };

  // !remove item
  const removeCartItems = (variantId, productId) => {
    let updateBody = { ...cart };
    let matchedSkuIndex;

    if (
      updateBody.regular.some(
        (el, index) =>
          el.variant[0]._id === variantId && el._id === productId && el.qty > 1
      )
    ) {
      if (
        updateBody.regular.some(
          (el, index) =>
            el.variant[0]._id === variantId &&
            el._id === productId &&
            el.qty > 1 &&
            !!el.billed === false
        )
      ) {
        matchedSkuIndex = updateBody.regular.findIndex(
          (el, index) =>
            el.variant[0]._id === variantId &&
            el._id === productId &&
            !!el.billed === false
        );
      } else {
        matchedSkuIndex = updateBody.regular.findIndex(
          (el, index) =>
            el.variant[0]._id === variantId &&
            el._id === productId &&
            !!el.billed === true
        );
      }

      // updateBody.push({...req.body,qty:})

      updateBody.regular[matchedSkuIndex] = {
        ...updateBody.regular[matchedSkuIndex],
        qty: updateBody.regular[matchedSkuIndex].qty - 1,
      };

      const updatedCart = updateBody;
      return updatedCart;
    } else if (
      updateBody.regular.some(
        (el, index) =>
          el.variant[0]._id === variantId &&
          el._id === productId &&
          el.qty === 1
      )
    ) {
      if (
        updateBody.regular.some(
          (el, index) =>
            el.variant[0]._id === variantId &&
            el._id === productId &&
            el.qty === 1 &&
            !!el.billed === false
        )
      ) {
        matchedSkuIndex = updateBody.regular.findIndex(
          (el, index) =>
            el.variant[0]._id === variantId &&
            el._id === productId &&
            !!el.billed === false &&
            el.qty === 1
        );
      } else {
        matchedSkuIndex = updateBody.regular.findIndex(
          (el, index) =>
            el.variant[0]._id === variantId &&
            el._id === productId   &&
            el.qty === 1 &&
            !!el.billed === true
        );
      }
      updateBody.regular.splice(matchedSkuIndex, 1);
      const updatedCart = updateBody;
      return updatedCart;
    } else {
      return updateBody;
    }
  };

  // !delete item
  const deleteCartItem = (sku, upn) => {
    let updateBody = { ...cart };
    let matchedSkuIndex;
    let productArrayPromise = updateBody.regular.map((el, index) => {
      return el;
    });

    const cartProductArray = productArrayPromise;
    const cartProductCategoryArray = cartProductArray.map(
      (el, index) => el.category
    );
    // console.log(updateBody, "queried cart");
    if (
      updateBody.regular.some(
        (el, index) => el.variantId === variantId && el.productId === productId
      )
    ) {
      // updateBody.push({...req.body,qty:})
      matchedSkuIndex = updateBody.regular.findIndex(
        (el, index) => el.variantId === variantId && el.productId === productId
      );

      updateBody.regular.splice(matchedSkuIndex, 1);

      const updatedCart = updateBody;
      return updatedCart;
    } else {
      return;
    }
  };

  const clearCart = () => {
    let updateBody = { ...cart };

    updateBody.regular = [];
    // console.log(updateBody.regular, "regular cart", req.user._id);
    const updatedCart = updateBody;
    return updatedCart;
  };
  const { variantId, productId } = productDetails;
  switch (operation) {
    case "AddItem":
      return addCartItems(productDetails.variant[0]._id, productDetails._id);
    case "RemoveItem":
      return removeCartItems(productDetails.variant[0]._id, productDetails._id);

    case "DeleteItem":
      return deleteCartItem(productDetails.variant[0]._id, productDetails._id);

    case "clearCart":
      return clearCart();
    default:
      // return next(new AppError("something went wrong", 500));
      return stateCart;
  }
};
