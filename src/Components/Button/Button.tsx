import * as React from "react";

import { IButton } from "./dts/Button";

const Button: React.FunctionComponent<IButton.IProps> = (): JSX.Element => {
    return <button>Click me</button>;
};

export { Button };
