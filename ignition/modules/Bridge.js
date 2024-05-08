const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ONE_GWEI = 1_000_000_000n;
const FIVE_GWEI = 5_000_000_000n;

module.exports = buildModule("BridgeModule", (m) => {
  const lockedAmount = m.getParameter("lockedAmount", FIVE_GWEI);

  const bridge = m.contract("Bridge", ['0xdbc1856cbD9553B8F2BE31f6E6d5695dC823B47C','0x4d03b7891c23A55b17904405D33b63D037441383'], {
    value: lockedAmount,
  });

  return { bridge };
});
