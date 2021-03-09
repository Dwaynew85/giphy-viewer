import React, {FC} from "react";

interface GiphyResultsProps {
    url: string;
}

export const GiphyResults: FC<GiphyResultsProps> = ({url}) =>
<div>
  <h2>Results</h2>
  <img src="" alt="search result"/>
</div>