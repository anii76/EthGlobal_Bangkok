import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Lending = buildModule("Lending", (m) => {
  const addressProvider = m.getParameter(
    "addressProvider",
    "0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A"
  );

  const lending = m.contract("Lending", [addressProvider]);

  return { lending };
});

export default Lending;