import * as React from "react";
import { Connector, useConnect } from "wagmi";
import { Button } from "./Button";

export function WalletOptions({ onConnect }: { onConnect: () => void }) {
    const { connectors, connect } = useConnect();

    const handleConnect = async (connector: Connector) => {
        connect({ connector });
        onConnect(); // Notify the parent
    };

    return (
        <div className="space-y-4">
            {connectors.map((connector) => (
                <WalletOption
                    key={connector.uid}
                    connector={connector}
                    onClick={() => handleConnect(connector)}
                />
            ))}
        </div>
    );
}

function WalletOption({
    connector,
    onClick,
}: {
    connector: Connector;
    onClick: () => void;
}) {
    const [ready, setReady] = React.useState(false);

    React.useEffect(() => {
        (async () => {
            const provider = await connector.getProvider();
            setReady(!!provider);
        })();
    }, [connector]);

    return (
        <Button
            disabled={!ready}
            onClick={onClick}
            className={`w-full ${ready ? "bg-blue-500" : "bg-gray-300"} hover:bg-purple-600`}
        >
            {connector.name}
        </Button>
    );
}
