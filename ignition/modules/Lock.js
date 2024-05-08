const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;
const FIVE_GWEI = 5_000_000_000n;

module.exports = buildModule("LockModule", (m) => {
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const lock = m.contract("Lock", [JAN_1ST_2030], {
    value: lockedAmount,
  });

  return { lock };
});
