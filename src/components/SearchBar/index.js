import React, { useState, useEffect, useRef } from "react";
//image
import searchIcon from "../../images/search-icon.svg";
//styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState("");
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
            return () => {
                clearInterval(timer);
            };
        }, 500);
    }, [setSearchTerm, state]);
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input
                    type="text"
                    placeholder="Search Movie"
                    onChange={(event) => setState(event.currentTarget.value)}
                    val={state}
                />
            </Content>
        </Wrapper>
    );
};

export default SearchBar;
