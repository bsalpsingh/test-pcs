export const mutateVBHPUtil = (VBPH, operation, VID, VPH) => {
  if (operation === "unCheckVendor") {
    delete VBPH[VID];
    return { ...VBPH };
  }

  if (operation === "checkVendor") {
    // if (VBPH[VID]) {
    //   delete VBPH[VID];
    // }
    VBPH[VID] = [...VPH[VID]];
    return { ...VBPH };
  }
  //   return;
};

export const mutateVBHPProductListUtil = (
  VBPH,
  operation,
  VID,
  VPH,
  VPHProduct
) => {
  if (operation === "unCheckProduct") {
    // find the product by id in the vendor array and delete it
    if (!!VBPH[VID] === false) {
      // VBPH[VID] = [VPHProduct];
      return { ...VBPH };
    }
    if (VBPH[VID].length === 1) {
      mutateVBHPUtil(VBPH, "unCheckVendor", VID, VPH);
      console.log("length 1");
      return { ...VBPH };
    }

    let VBPHProductIndex = VBPH[VID].findIndex(
      (product, productIndex) => product.variant._id === VPHProduct.variant._id
    );

    if (VBPHProductIndex < 0) {
      return { ...VBPH };
    }

    VBPH[VID].splice(VBPHProductIndex, 1);
    return { ...VBPH };
  }

  if (operation === "checkProduct") {
    if (!!VBPH[VID] === false) {
      VBPH[VID] = [VPHProduct];
      return { ...VBPH };
    }

    let checkIndex = VBPH[VID].findIndex((compProuduct, compIndex) => {
      // console.log(`ids - > ${compProuduct.variant._id }`)
      return compProuduct.variant._id === VPHProduct.variant._id;
    });
    if (checkIndex >= 0) {
      return { ...VBPH };
    } else {
      VBPH[VID] = [...VBPH[VID], VPHProduct];
      return { ...VBPH };
    }
  }
};
