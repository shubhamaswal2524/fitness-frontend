import { SearchIcon } from "../../../../public/assets/icons";


type CommonSearchProps = {
  label?: string;
  placeholder?: string;
  name?: string;
  className?: string;
  searchFunction?: (term: any) => void; // Optional prop
};

const CommonSearch: React.FC<CommonSearchProps> = ({
  label,
  placeholder,
  name,
  className,
  searchFunction,
}: any) => {
  // const [searchTerm, setSearchTerm] = useState<string>('');

  // const debouncedSearchFunction = useCallback(
  //   debounce((term: string) => {
  //     if (term.length > 2) {
  //       searchFunction(term.includes('@') ? { email: term } : { name: term });
  //     } else {
  //       searchFunction({});
  //     }
  //   }, 500), // Adjust the debounce delay as needed
  //   [searchFunction],
  // );

  // useEffect(() => {
  //   debouncedSearchFunction(searchTerm);

  //   // Cleanup function to cancel the debounce on unmount
  //   return () => {
  //     debouncedSearchFunction.cancel();
  //   };
  // }, [searchTerm]);

  return (
    <>
      <div className={`commonSearch ${className}`}>
        {label && <label className="searhLabel">{label}</label>}
        <div className="searchInput">
          <span className="searchIcon">
            <SearchIcon />
          </span>
          <input
            // onChange={(e: any) => {
            //   e.target.value === ''
            //     ? setSearchTerm('')
            //     : setSearchTerm(e.target.value);
            // }}
            // value={searchTerm}
            type="text"
            className=""
            id="searchbox"
            name={name}
            placeholder={placeholder}
          />
        </div>
      </div>
    </>
  );
};

export default CommonSearch;
