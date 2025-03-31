"use client";
import { mainnet } from "@starknet-react/chains";
import {
  StarknetConfig,
  publicProvider,
  argent,
  braavos,
  useInjectedConnectors,
  starkscan,
} from "@starknet-react/core";

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const { connectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: "onlyIfNoConnectors",
    order: "alphabetical",
  });

  return (
    <StarknetConfig
      chains={[mainnet]}
      provider={publicProvider()}
      connectors={connectors}
      explorer={starkscan}
      autoConnect={true} // Enable auto-connect
    >
      {children}
    </StarknetConfig>
  );
}

export default StarknetProvider;