import React, { createContext, useState } from "react";

const NavigationContext = createContext({
  isExpanded: true,
  setIsExpanded: () => {},
});
export default NavigationContext;
