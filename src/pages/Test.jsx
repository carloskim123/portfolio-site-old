import { ColorRepoKim } from "color-repo-kim";

import React from "react";

const Test = () => {
    const textColor = "#d6af8o"

    const rgbResult = ColorRepoKim.convert.hexToRgb(textColor)
    const validResult = ColorRepoKim.validate.isValidHex(textColor)


    console.log(validResult);

    return (
        <div>
            {JSON.stringify(ColorRepoKim.parse.hexToRgb("#000000"))}
        </div>
    )
};

export default Test;
