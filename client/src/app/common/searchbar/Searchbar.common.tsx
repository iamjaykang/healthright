import React, {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useRef,
} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { setHamburgerMenuIsOpen } from "../../stores/hamburgerMenu/hamburgerMenu.action";
import { useDispatch } from "react-redux";

export interface SearchBarProps {
  setHmDropdownOpen?: Dispatch<SetStateAction<{}>>;
}

const Searchbar: FC<SearchBarProps> = ({ setHmDropdownOpen }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const searchInputRef = useRef<HTMLInputElement>(null);

  // This function will be called whenever the text input changes
  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    let search;
    if (event.target.value) {
      search = {
        q: event.target.value,
      };
    } else {
      search = undefined;
    }

    setSearchParams(search, { replace: true });
  };

  const resetForm = () => {
    setSearchParams({ q: "" }, { replace: true });
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
  };

  const closeMenu = () => {
    dispatch(setHamburgerMenuIsOpen(false));
    if (setHmDropdownOpen) {
      setHmDropdownOpen({});
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      resetForm();
      navigate(`/search${searchTerm ? `?q=${searchTerm}` : ""}`);
      closeMenu();
    } catch (error) {
      throw error;
    }
  };
  return (
    <form className="app__search-form" onSubmit={handleSubmit}>
      <input
        ref={searchInputRef}
        className="app__search-input"
        type="text"
        placeholder="Search..."
        value={searchParams ? searchParams.get("q") || "" : ""}
        onChange={searchHandler}
      />
      <button className="app__search-btn" type="submit" disabled={!searchTerm}>
        <IoIosSearch />
      </button>
    </form>
  );
};

export default Searchbar;
