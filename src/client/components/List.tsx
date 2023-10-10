import React from "react";

interface Props {
    children: Array<JSX.Element> | string;
}

function List({ children }: Props) {
    return <ul className="list">{children}</ul>;
}

export default List;
