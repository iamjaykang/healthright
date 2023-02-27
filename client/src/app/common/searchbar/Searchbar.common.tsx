import React, {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { setHamburgerMenuIsOpen } from "../../stores/hamburgerMenu/hamburgerMenu.action";
import { useDispatch } from "react-redux";
import { searchProductsLoading } from "../../stores/products/product.action";

export interface SearchBarProps {
  setHmDropdownOpen?: Dispatch<SetStateAction<{}>>;
}

const Searchbar: FC<SearchBarProps> = ({ setHmDropdownOpen }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const searchInputRef = useRef<HTMLInputElement>(null);

  const resetForm = () => {
    setSearchTerm("");
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

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchTerm) {
      return;
    }

    try {
      resetForm();
      dispatch(searchProductsLoading(searchTerm));
      navigate(`/search?q=${searchTerm}`);
      closeMenu();
    } catch (error) {
      throw error;
    }

  };

  const searchInputValue = useMemo(() => searchTerm, [searchTerm]);

  return (
    <form className="app__search-form" onSubmit={handleSubmit}>
      <input
        ref={searchInputRef}
        className="app__search-input"
        type="text"
        placeholder="Search..."
        value={searchInputValue}
        onChange={searchHandler}
      />
      <button className="app__search-btn" type="submit" disabled={!searchTerm}>
        <IoIosSearch />
      </button>
    </form>
  );
};

export default Searchbar;
